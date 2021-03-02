import { random, max } from 'lodash';
import $ from 'jquery';
import simulation from '../../app';
import Vector from '../../vector/vector';
import Creature from '../creature';

/**
 * Helper methods for creature's body processes
 * @module
 * @requires lodash
 * @requires jquery
 */
export default class Body {
  /**
   * Initializes creature's species
   * @param {Creature} creature Creature reference
   * @param {"red"|"green"|"blue"} species
   */
  static initializeSpecies(creature, species) {
    creature.minColor = 100;
    creature.maxColor = 255;

    if (species) {
      creature.species = species; // skip if already defined

      return creature.species; // skip if already defined
    }

    creature.colors = {
      red: random(creature.minColor, creature.maxColor),
      green: random(creature.minColor, creature.maxColor),
      blue: random(creature.minColor, creature.maxColor),
    };

    creature.dominantColor = max([
      creature.colors.red,
      creature.colors.green,
      creature.colors.blue,
    ]);
    switch (true) {
      case creature.colors.red === creature.dominantColor:
        creature.species = 'red';
        break;

      case creature.colors.green === creature.dominantColor:
        creature.species = 'green';
        break;

      case creature.colors.blue === creature.dominantColor:
        creature.species = 'blue';
        break;
    }
    delete creature.dominantColor;
  }

  /**
   * Initializes creature's color parameters
   * @param {Creature} creature Creature reference
   */
  static initializeColor(creature) {
    creature.colors = {
      red: creature.species === 'red' ? creature.maxColor : creature.minColor,
      green:
        creature.species === 'green' ? creature.maxColor : creature.minColor,
      blue: creature.species === 'blue' ? creature.maxColor : creature.minColor,
    };

    creature.color = `rgb(${creature.colors.red}, ${creature.colors.green}, ${creature.colors.blue})`;

    return creature.color;
  }

  /**
   * Add growth depending on metabolism
   * @param {Creature} creature Creature reference
   */
  static grow(creature) {
    if (creature.mass >= creature.maxMass) return;

    creature.mass += creature.metabolism;
    creature.maxSpeed = creature.mass * 2;
    creature.maxforce = 0.33 * (creature.mass / 2);

    return creature;
  }

  /**
   * Aging translates into the creature's max speed reduction
   * or death (deletion) when none speed is left
   * @param {Creature} creature Creature reference
   */
  static age(creature) {
    creature._deterioration =
      creature.metabolism / creature.metabolismAgingRatio;
    creature.maxSpeed -= creature._deterioration;
    creature.colors[creature.species] =
      Math.round((creature.maxSpeed * 255) / (creature.maxMass * 2)) + 110;
    creature.color = `rgb(${Math.round(creature.colors.red)}, ${Math.round(
      creature.colors.green
    )}, ${Math.round(creature.colors.blue)})`;

    return creature;
  }

  /**
   * Adjust velocity to stay close to maxSpeed
   * @param {Creature} creature Creature reference
   */
  static adjustSpeed(creature) {
    creature.velocity.add(creature.acceleration).limit(creature.maxSpeed);

    if (creature.velocity.mag() > creature.maxSpeed)
      return creature.velocity.setMag(creature.velocity.mag() * 0.9);
    else return creature.velocity.setMag(creature.velocity.mag() * 1.01);
  }

  /**
   * Prevents creatures from going beyond the edges
   * @param {Creature} creature Creature reference
   */
  static boundaries(creature) {
    switch (true) {
      case creature.location.x < creature.margin:
        creature.applyForce(new Vector(creature.velocity.mag(), 0));
        break;

      case creature.location.x > simulation.width - creature.margin:
        creature.applyForce(new Vector(-creature.velocity.mag(), 0));
        break;

      case creature.location.y < creature.margin:
        creature.applyForce(new Vector(0, creature.velocity.mag()));
        break;

      case creature.location.y > simulation.height - creature.margin:
        creature.applyForce(new Vector(0, -creature.velocity.mag()));
        break;

      default:
        break;
    }

    return creature;
  }

  /**
   * Attempt to reproduce creature
   * @param {Creature} creature Creature reference
   * @param {Object} target Target creature
   * @param {number} distance Distance between creature and target
   */
  static attemptReproduction(creature, target, distance) {
    if (
      distance <=
        creature.minSeparation *
          simulation.reproductionChance[creature.species] &&
      target.species === creature.species
    ) {
      // is close enough to reproduce
      if (
        creature.mass >= creature.maxMass &&
        target.mass >= creature.maxMass
      ) {
        // both creatures are fully mature
        // Both parents loose half their mass
        creature.mass /= 2;
        target.mass /= 2;
        // Spawn a new this of the same species in the same spot
        simulation.spawnCreature(
          creature.location.x,
          creature.location.y,
          creature.species,
          creature.mass / 2 // New borns are 1/4 of the original parents mass
        );
      }
    }
  }
}
