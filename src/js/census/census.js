import { minBy, maxBy } from 'lodash';
import { simulation } from '../simulation';
import $ from 'jquery';

/**
 * Census registry
 * @requires lodash
 * @property {number} red - Red population
 * @property {number} green - Green population
 * @property {number} blue - Blue population
 * @property {number} births - Total births
 * @property {number} deaths - Total deaths
 */
class Census {
  constructor() {
    this.red = 0;
    this.green = 0;
    this.blue = 0;
    this.births = 0;
    this.deaths = 0;
  }

  /**
   * Clears the log and shows the census results
   */
  log() {
    this.update();
    $('#population').text(simulation.creatures.length);

    console.clear();
    console.log('%c==================================', 'color: #777');
    console.log(`%c Red   : ${this.red}`, 'color: rgb(255, 100, 100)');
    console.log(
      `%c Reproduction chance ${simulation.reproductionChance.red}`,
      'color: rgb(255, 100, 100)'
    );
    console.log(`%c Green  : ${this.green}`, 'color: rgb(100, 255, 100)');
    console.log(
      `%c Reproduction chance ${simulation.reproductionChance.green}`,
      'color: rgb(100, 255, 100)'
    );
    console.log(`%c Blue : ${this.blue}`, ' color: rgb(100, 100, 255)');
    console.log(
      `%c Reproduction chance ${simulation.reproductionChance.blue}`,
      'color: rgb(100, 100, 255)'
    );
    console.log(` Population: ${simulation.creatures.length}`);

    if (this.births > 0) console.log(` Births: ${this.births}`);
    if (this.deaths > 0) console.log(` Deaths ${this.deaths}`);
    if (simulation.creatures.length >= simulation.topPopulation)
      console.log(
        `%c Overpopulation after ${simulation.cycles} cycles!`,
        'color: rgb(255, 150, 150)'
      );
    if (simulation.creatures.length === 0)
      console.log(
        `%c Extintion after ${simulation.cycles} cycles!`,
        'color: rgb(255, 150, 150)'
      );

    console.log('%c==================================', 'color: #777');
  }

  /**
   * Increase deaths count
   */
  newDeath() {
    this.deaths++;
  }

  /**
   * Increase births count
   */
  newBirth() {
    this.births++;
  }

  /**
   * Calculates population by species
   */
  update() {
    this.reset();

    this._index = simulation.creatures.length;
    while (this._index--) this[simulation.creatures[this._index].species]++;
  }

  /**
   * Return counts results to inital state
   */
  reset() {
    this.red = 0;
    this.green = 0;
    this.blue = 0;
  }

  /**
   * Returns the least populated species
   */
  minority() {
    return minBy(this.list(), 'population');
  }

  /**
   * Returns the most populated species
   */
  mayority() {
    return maxBy(this.list(), 'population');
  }

  /**
   * Census list
   */
  list() {
    return [
      {
        species: 'red',
        population: this.red,
      },
      {
        species: 'green',
        population: this.green,
      },
      {
        species: 'blue',
        population: this.blue,
      },
    ];
  }
}

/**
 * @exports Census
 */
export default Census;
