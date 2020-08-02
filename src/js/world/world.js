import { clone, random, minBy } from 'lodash';
import Creature from '../creature/creature';
import Census from '../census/census';
import Vector from '../vector/vector';
import $ from 'jquery';

/**
 * 2D environment for creatures
 * @requires Creature
 * @requires Census
 * @requires Vector
 * @requires lodash
 * @requires jquery
 */
class World {
  constructor(
    topPopulation = 100,
    id = 'world',
    species = ['red', 'green', 'blue']
  ) {
    this.cycles = 0;
    this.learningRate = 0.1;
    this.id = id;
    this.creatures = [];
    this.species = species;
    this.topPopulation = topPopulation;
    this.census = new Census();
    this.initialPopulation = this.species.length * 2;
    this.mousePosition = {
      vector: new Vector(0, 0),
      onScreen: false,
    };
  }

  /**
   * Start simulation
   */
  launch() {
    this.initializeCanvas();
    this.initializePopulation();
    this.startListeners();

    return this.drawNextFrame();
  }

  /**
   * Canvas Setup
   */
  initializeCanvas() {
    this.canvas = $(`#${this.id}`)[0];
    this.ctx = this.canvas.getContext('2d');
    this.ctx.canvas.height = $(`#${this.id}`).height();
    this.ctx.canvas.width = $(`#${this.id}`).width();
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.ctx.lineWidth = 4;
  }

  /**
   * Stores current mouse position
   */
  getMousePosition() {
    $(document).mousemove((event) => {
      this.mousePosition.onScreen = event.pageX >= 50 && event.pageY >= 50;

      if (this.mousePosition.onScreen)
        this.mousePosition.vector = new Vector(event.pageX, event.pageY);
      else this.mousePosition.vector = new Vector(0, 0);
    });
  }

  /**
   * Spawn first creatures
   */
  initializePopulation() {
    this.initialReproductionChange = {
      red: 2,
      green: 2,
      blue: 2,
    };
    this.reproductionChance = clone(this.initialReproductionChange);

    this._i = this.species.length * 4;
    while (this._i--)
      this.spawnCreature(
        random(0, this.width),
        random(0, this.height),
        this.species[Math.round((this._i + 1) / 3) - 1]
      );
  }

  /**
   * Events listeners
   */
  startListeners() {
    $(`button.add, #${this.id}`).click((
      e // Add new creature to the less populated species on left click
    ) => this.increasePopulation(e.clientX, e.clientY));

    $(`button.remove`).click(() => this.decreasePopulation());

    $(`#${this.id}`).contextmenu(() => {
      // Remove oldest creature on right click
      this.decreasePopulation();

      return false; // Don't show context menu on right click
    });

    $(window).resize(() => {
      // Update canvas size on screen change
      this.ctx = this.canvas.getContext('2d');
      this.ctx.canvas.height = $(`#${this.id}`).height();
      this.ctx.canvas.width = $(`#${this.id}`).width();
      this.width = this.canvas.width;
      this.height = this.canvas.height;
    });
  }

  /**
   * Increases the least populated species if none is specified
   * @param {number} [x] - New creature's coordinate on the X axis
   * @param {number} [y] - New creature's coordinate on the Y axis
   * @param {string} [species] - New creature's species
   */
  increasePopulation(x, y) {
    this.spawnCreature(x, y, this.census.minority().species);
  }

  /**
   * Removes oldest (slowest) creature
   * @return {number}
   */
  decreasePopulation() {
    this.removeCreature(minBy(this.creatures, 'maxSpeed'));
  }

  /**
   * Adds a new crature to the simulation
   * @param {number} [x]
   * @param {number} [y]
   * @param {string} [species]
   * @param {number}[mass]
   */
  spawnCreature(x, y, species, mass) {
    this.creatures.push(new Creature(x, y, species, mass));
    this.census.newBirth();

    return this.census.log(this);
  }

  /**
   * Removes a creature from the simulation
   * @param {Object} creature
   */
  removeCreature(creature) {
    this._index = this.creatures.indexOf(creature);
    this.creatures.splice(this._index, 1);
    this.census.newDeath();

    return this.census.log(this);
  }

  /**
   * Adjust population and draws creatures next move
   */
  drawNextFrame() {
    this.cycles++;
    this.ctx.globalAlpha = 0.5;
    this.ctx.fillStyle = `rgb(0, 0, 0)`;
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.globalAlpha = 1;

    this.adjustPopulationGrowth();
    this.getMousePosition();

    return this.updateCreatures();
  }

  /**
   * Adjust world population growth to prevent overpopulation or full extintion
   */
  adjustPopulationGrowth() {
    this._i = this.species.length;

    while (this._i--) {
      switch (
        true // Population control
      ) {
        case this.census[this.species[this._i]] > this.initialPopulation * 2: // If overpopulation in progress
          this.reproductionChance[this.species[this._i]] *= 0.999; // Reduce reproduction chance
          break;

        case this.census[this.species[this._i]] < this.initialPopulation * 0.8: // If extintion in progress
          this.reproductionChance[this.species[this._i]] *= 1.001; // Increase reproduction chance
          break;

        default:
          this.reproductionChance[
            this.species[this._i]
          ] = this.initialReproductionChange[this.species[this._i]];
          break;
      }
    }
  }

  /**
   * Draws creatures next move
   */
  updateCreatures() {
    try {
      this._index = this.creatures.length;
      
      while (this._index--) {
        this.creatures[this._index].moveTo(
          this.creatures[this._index].brain.think(
            this.creatures[this._index].location,
            this.creatures[this._index].velocity
          )
        );

        this.creatures[this._index].draw(); // Move creature
        this._creatureCohesion = this.creatures[this._index].cohesion();

        this.creatures[this._index].brain.learn(
          // Learn to move with others
          this._creatureCohesion,
          this.creatures[this._index].align().angle(),
          this
        );
      }

      return requestAnimationFrame(() => this.drawNextFrame());
    } catch (err) {
      return requestAnimationFrame(() => this.drawNextFrame());
    }
  }
}

/**
 * @exports World
 */
export default World;
