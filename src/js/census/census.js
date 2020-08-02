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
 * @property {string} logColor - Log color for this species
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
    console.log('==================================');

    this.logPopulation('red');
    this.logPopulation('green');
    this.logPopulation('blue');

    console.log(` Population: ${simulation.creatures.length}`);
    console.log(` Births: ${this.births}`);
    console.log(` Deaths ${this.deaths}`);

    if (simulation.creatures.length >= simulation.topPopulation)
      console.log(`Overpopulation after ${simulation.cycles} cycles!`);

    if (simulation.creatures.length === 0)
      console.log(`Extintion after ${simulation.cycles} cycles!`);

    console.log('==================================');
  }

  /**
   * Show current population and reproduction chance of a species
   * @param {string} species - Target species
   * @example this.logPopulation('red');
   */
  logPopulation(species) {
    console.log(
      `%c ${species} : ${this[species]}`,
      this.getSpeciesColor(species)
    );

    console.log(
      `%c Reproduction chance ${simulation.reproductionChance[species]}`,
      this.getSpeciesColor(species)
    );
  }

  /**
   * Returns RGB color for a particular species
   * @param {string} species - Target species
   * @example this.getSpeciesColor('red');
   */
  getSpeciesColor(species) {
    return `color: rgb(${species === 'red' ? 255 : 100}, ${
      species === 'green' ? 255 : 100
    }, ${species === 'blue' ? 255 : 100})`;
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

export default Census;
