import { random, max } from 'lodash';
import $ from 'jquery';

/**
 * Helper methods for creature's body processes
 * @requires lodash
 * @requires jquery
 */
export default class Body {
  /**
   * Initializes creature's species
   */
  static initializeSpecies(creature, species) {
    creature.minColor = 100;
    creature.maxColor = 255;

    if (!!species) {
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

    return creature.species;
  }

  /**
   * Initializes creature's color parameters
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
   */
  static adjustSpeed(creature) {
    creature.velocity.add(creature.acceleration).limit(creature.maxSpeed);

    if (creature.velocity.mag() > creature.maxSpeed)
      return creature.velocity.setMag(creature.velocity.mag() * 0.9);
    else return creature.velocity.setMag(creature.velocity.mag() * 1.01);
  }

  /**
   * Prevents creatures from going beyond the edges
   */
  static boundaries(creature, world) {
    switch (true) {
      case creature.location.x < creature.margin:
        creature.applyForce(new Vector(creature.velocity.mag(), 0));
        break;

      case creature.location.x > world.width - creature.margin:
        creature.applyForce(new Vector(-creature.velocity.mag(), 0));
        break;

      case creature.location.y < creature.margin:
        creature.applyForce(new Vector(0, creature.velocity.mag()));
        break;

      case creature.location.y > world.height - creature.margin:
        creature.applyForce(new Vector(0, -creature.velocity.mag()));
        break;

      default: break;
    }

    return creature;
  }

  /**
   * Attempt to reproduce creature
   * @param {Object} target
   * @param {number} distance
   */
  static attemptReproduction(creature, world, target, distance) {
    if (
      distance <=
        creature.minSeparation * world.reproductionChance[creature.species] &&
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
        world.spawnCreature(
          creature.location.x,
          creature.location.y,
          creature.species,
          creature.mass / 2 // New borns are 1/4 of the original parents mass
        );
      }
    }
  }
}
