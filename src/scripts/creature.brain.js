'use strict';
/**
 * @module CreatureBrain
 * @requires synaptic
 * @see {@link https://github.com/cazala/synaptic} based on work by @cazala 's Synaptic.
 */

const { Architect } = synaptic;

/**
 * Creature's mind
 */
class CreatureBrain {
    /**
     * Creates a new neural network
	 * @see {@link https://github.com/cazala/synaptic/wiki/Architect}
	 * @see {@link https://github.com/cazala/synaptic/wiki/Networks}
     */
	constructor (
        inputNeurons = 4,
        hiddenNeurons = 4,
        outputNeurons = 3
	) {
		this.network = new Architect.Perceptron(
			inputNeurons,
			hiddenNeurons,
			outputNeurons
		);
    }

    /**
     * Think of where to move from current location (align to others)
     */
    think(
		location,
		velocity
	) {
		return this.network.activate([
			location.x,
			location.y,
			velocity.x,
			velocity.y
		]);
    }

    /**
     * Learn how to move
     */
    learn(cohesion, angle, world) {
		this.network.propagate(
			world.learningRate,
			[
				cohesion.x / world.width, // X target
				cohesion.y / world.height, // Y target
				(angle + Math.PI) / (Math.PI * 2) // Target angle
			]
		);
    }
}
