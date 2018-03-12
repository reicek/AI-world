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
    static initialize(
        inputNeurons = 4,
        hiddenNeurons = 4,
        outputNeurons = 3
	) {
		return new Architect.Perceptron(
				inputNeurons,
				hiddenNeurons,
				outputNeurons
			);
    }

    /**
     * Think of where to move from current location (align to others)
     */
    static think(creature) {
		return creature.brain.activate([
				creature.location.x,
				creature.location.y,
				creature.velocity.x,
				creature.velocity.y
			]);
    }

    /**
     * Learn how to move
     */
    static learn(creature, creatureCohesion, world) {
		creature.brain.propagate(world.learningRate, [
				creatureCohesion.x / world.width, // X target
				creatureCohesion.y / world.height, // Y target
				(creature.align().angle() + Math.PI) / (Math.PI * 2) // Target angle
			]);
    }
}
