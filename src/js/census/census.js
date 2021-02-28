/**
 * @typedef  {Object} Census Population by species
 * @property {number} red Red population
 * @property {number} green Green population
 * @property {number} blue Blue population
 * @property {number} births Total births
 * @property {number} deaths Total deaths
 */
/**
 * Census registry
 * @type {Census}
 * @requires lodash
 * @requires jquery
 */
class Census {
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

  /**
   * Update census results on log
   * @param {World} world Simulation reference
   */
  log(world) {
    this.update(world);
    $('#population').text(world.creatures.length);

    console.clear();
    console.log('%c==================================', 'color: #777');
    console.log(`%c Red   : ${this.red}`, 'color: rgb(255, 100, 100)');
    console.log(
      `%c Reproduction chance ${world.reproductionChance.red}`,
      'color: rgb(255, 100, 100)'
    );
    console.log(`%c Green  : ${this.green}`, 'color: rgb(100, 255, 100)');
    console.log(
      `%c Reproduction chance ${world.reproductionChance.green}`,
      'color: rgb(100, 255, 100)'
    );
    console.log(`%c Blue : ${this.blue}`, ' color: rgb(100, 100, 255)');
    console.log(
      `%c Reproduction chance ${world.reproductionChance.blue}`,
      'color: rgb(100, 100, 255)'
    );
    console.log(` Population: ${world.creatures.length}`);

    if (this.births > 0) console.log(` Births: ${this.births}`);
    if (this.deaths > 0) console.log(` Deaths ${this.deaths}`);
    if (world.creatures.length >= world.topPopulation)
      console.log(
        `%c Overpopulation after ${world.cycles} cycles!`,
        'color: rgb(255, 150, 150)'
      );
    if (world.creatures.length === 0)
      console.log(
        `%c Extintion after ${world.cycles} cycles!`,
        'color: rgb(255, 150, 150)'
      );

    console.log('%c==================================', 'color: #777');
  }

  /** Calculate population by species */
  update(world) {
    this.reset();

    this._index = world.creatures.length;
    while (this._index--) this[world.creatures[this._index].species]++;
  }

  /** Reset counts results */
  reset() {
    this.red = 0;
    this.green = 0;
    this.blue = 0;
  }

  /** Least populated species */
  minority() {
    return _.minBy(this.list(), 'population');
  }

  /** Most populated species */
  mayority() {
    return _.maxBy(this.list(), 'population');
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
