import World from './world/world';

/**
 * World instance to run the simulation
 * @type {World}
 */
const simulation = new World();
simulation.launch();

export { simulation };
