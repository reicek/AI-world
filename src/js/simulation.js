import World from './world/world';

/**
 * Initializes the simulation
 * @module simulation
 * @requires World
 */

/**
 * World instance to run the simulation
 * @type {World}
 */
const simulation = new World();

simulation.launch(); // Start simulation

/**
 * Holds the state of the simulation to be used by different files
 * @exports World
 */
export { simulation };
