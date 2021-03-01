import { Architect } from 'synaptic';
import simulation from '../../app';

/**
 * Creature's mind
 * @module
 * @requires synaptic
 * @see {@link https://github.com/cazala/synaptic} based on work by @cazala 's Synaptic.
 */
export default class Brain {
  /**
   * Create new neural network
   * @param {*} inputNeurons
   * @param {*} hiddenNeurons
   * @param {*} outputNeurons
   * @see {@link https://github.com/cazala/synaptic/wiki/Architect}
   * @see {@link https://github.com/cazala/synaptic/wiki/Networks}
   */
  constructor(inputNeurons = 4, hiddenNeurons = 6, outputNeurons = 3) {
    this.network = new Architect.Perceptron(
      inputNeurons,
      hiddenNeurons,
      hiddenNeurons,
      outputNeurons
    );
  }

  /**
   * Think of where to move from current location
   */
  think(location, velocity) {
    return this.network.activate([
      location.x,
      location.y,
      velocity.x,
      velocity.y,
    ]);
  }

  /**
   * Learn how to move
   */
  learn(cohesion, angle) {
    this.network.propagate(simulation.learningRate, [
      cohesion.x / simulation.width, // X target
      cohesion.y / simulation.height, // Y target
      (angle + Math.PI) / (Math.PI * 2), // Target angle
    ]);
  }
}
