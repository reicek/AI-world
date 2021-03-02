import { minBy, maxBy } from 'lodash';
import $ from 'jquery';

/** Red logs */
const RED_LOG = 'color: rgb(255, 100, 100)';
/** GREEN logs */
const GREEN_LOG = 'color: rgb(100, 255, 100)';
/** Green logs */
const BLUE_LOG = 'color: rgb(100, 100, 255)';
/** Gray logs */
const GRAY_LOG = 'color: #777';

/**
 * Population registry
 * @module
 */
export default class Census {
  /** Create sensus */
  constructor() {
    /** Red population */
    this.red = 0;
    /** Green population */
    this.green = 0;
    /** Blue population */
    this.blue = 0;
    /** Total births */
    this.births = 0;
    /** Total deaths */
    this.deaths = 0;
  }

  /** Update census results on log */
  log(simulation) {
    this.update(simulation);
    $('#population').text(simulation.creatures.length);

    console.clear();
    console.log('%c==================================', GRAY_LOG);
    console.log(`%c Red   : ${this.red}`, RED_LOG);
    console.log(
      `%c Reproduction chance ${simulation.reproductionChance.red}`,
      RED_LOG
    );
    console.log(`%c Green  : ${this.green}`, GREEN_LOG);
    console.log(
      `%c Reproduction chance ${simulation.reproductionChance.green}`,
      GREEN_LOG
    );
    console.log(`%c Blue : ${this.blue}`, BLUE_LOG);
    console.log(
      `%c Reproduction chance ${simulation.reproductionChance.blue}`,
      BLUE_LOG
    );
    console.log(` Population: ${simulation.creatures.length}`);

    if (this.births > 0) console.log(` Births: ${this.births}`);

    if (this.deaths > 0) console.log(` Deaths ${this.deaths}`);

    if (simulation.creatures.length >= simulation.topPopulation)
      console.log(
        `%c Overpopulation after ${simulation.cycles} cycles!`,
        RED_LOG
      );

    if (simulation.creatures.length === 0)
      console.log(`%c Extintion after ${simulation.cycles} cycles!`, RED_LOG);

    console.log(simulation.creatures);
    console.log('%c==================================', GRAY_LOG);
  }

  /** Registers a new death */
  newDeath() {
    this.deaths++;
  }

  /** Registers a new birth */
  newBirth() {
    this.births++;
  }

  /** Calculate population by species */
  update(simulation) {
    if (!simulation) {
      return;
    }

    this.reset();

    let index = simulation.creatures.length;
    while (index--) this[simulation.creatures[index].species]++;
  }

  /** Reset counts */
  reset() {
    this.red = 0;
    this.green = 0;
    this.blue = 0;
  }

  /** Least populated species */
  minority() {
    return minBy(this.list(), 'population');
  }

  /** Most populated species */
  mayority() {
    return maxBy(this.list(), 'population');
  }

  /** Census list */
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
