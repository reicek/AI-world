import Vector from '../vector/vector';
import Brain from './brain/brain';
import Draw from './draw/draw';
import Body from './body/body';
import simulation from '../app';

/** Artificial Intelligence based in perceptron neural networks that lives in a 2D world */
export default class Creature {
  /**
   * Create creature
   * @param {*} x 
   * @param {*} y 
   * @param {*} species 
   * @param {*} mass 
   * @param {*} inputNeurons 
   * @param {*} hiddenNeurons 
   * @param {*} outputNeurons 
   */
  constructor(x, y, species, mass, inputNeurons, hiddenNeurons, outputNeurons) {
    this.brain = new Brain(inputNeurons, hiddenNeurons, outputNeurons);
    this.metabolism = 0.005; // Bigger means shorter life
    this.metabolismAgingRatio = 0.4; // Bigger means longer life
    this.minMass = 1;
    this.maxMass = 3;
    this.margin = 5; // Minimum separation from walls
    this.mass = !!mass ? mass : this.minMass;
    this.maxSpeed = this.mass * 2;
    this.maxforce = 0.33 * (this.mass / 2);
    this.location = new Vector(x, y);
    this.velocity = new Vector(0, 0);
    this.acceleration = new Vector(0, 0);

    Body.initializeSpecies(this, species);
    Body.initializeColor(this);
  }

  /**
   * Applies creature's movement
   */
  moveTo(networkOutput) {
    this._decision = {
      x: networkOutput[0],
      y: networkOutput[1],
      angle: networkOutput[2],
    };

    return this.applyForce(
      new Vector(0, 0)
        .add(this.separate()) // Apply force to reduce separation
        .add(
          this.seek(
            new Vector( // Apply force to increase cohesion
              this._decision.x * simulation.width,
              this._decision.y * simulation.height
            )
          )
        )
    );
  }

  /**
   * Applies a vector force to the creature's momentum=
   */
  applyForce(force) {
    return this.acceleration.add(force);
  }

  /**
   * Draws current's creature position and direction
   */
  draw() {
    this.update();
    Draw.shape(this.mass, this.color, this.location, simulation);

    return this;
  }

  /**
   * Update's creature
   */
  update() {
    Body.grow(this);
    if (this.maxSpeed > 0.1) {
      Body.age(this, simulation);
    } else {
      simulation.removeCreature(this);
    }
    Body.boundaries(this, simulation);
    Body.adjustSpeed(this);

    this.location.add(this.velocity);
    this.acceleration.mul(0);

    return this;
  }

  /**
   * Returns the force needed to move towards specific creature
   * @param {Vector} target
   * @return {Vector}
   */
  seek(target) {
    return target
      .copy()
      .sub(this.location)
      .sub(this.velocity)
      .limit(this.maxforce / 4);
  }

  /**
   * Makes creature attempt to stay within reasonable distance
   * Triggers reproduction when creatures touch, depending on world reproduction chance
   * @return {Vector}
   */
  separate() {
    this.minSeparation = this.mass * 1.5;
    this.maxSeparation = this.minSeparation * 2;
    this._sum = new Vector(0, 0);
    this._count = 0;
    this._index = simulation.creatures.length;

    while (this._index--) {
      if (simulation.creatures[this._index] === this) continue; // Skip to next creatue

      this._distance =
        this.location.dist(simulation.creatures[this._index].location) +
        this.mass;

      Body.attemptReproduction(
        this,
        simulation,
        simulation.creatures[this._index],
        this._distance
      );

      [this._sum, this._count] = this.normalizeSeparation(this.location.copy());
    }

    return !this._count
      ? this._sum
      : this._sum.div(this._count).normalize().sub(this.velocity);
  }

  /**
   * Normalizes creature separation if they are within range
   */
  normalizeSeparation(currentPosition) {
    if (
      this._distance < this.maxSeparation &&
      this._distance > this.minSeparation
    ) {
      // is far enough & is close enough
      this._sum.add(
        currentPosition
          .sub(simulation.creatures[this._index].location)
          .normalize()
          .div(Math.pow(this._distance, 2))
      );
      this._count++;
    }

    if (this._distance < this.mass) {
      // Bounce
      this.applyForce(simulation.creatures[this._index].acceleration);
      simulation.creatures[this._index].applyForce(this.acceleration);
    }

    return [this._sum, this._count];
  }

  /**
   * Align to other creatures
   * @return {Vector}
   */
  align() {
    this._sum = new Vector(0, 0);
    this._count = 0;
    this._index = simulation.creatures.length;

    while (this._index--) {
      if (simulation.creatures[this._index] === this) continue; // Skip to next creatue

      this._sum = this.addAlignmentTo(simulation.creatures[this._index]);
      this._count++;
    }

    return this._count > 0 ? this._sum.mul(0.003) : this._sum;
  }

  /**
   * Adds force required to align to another creature
   */
  addAlignmentTo(target) {
    if (target.species === this.species)
      // Align more to same species
      this._sum.add(target.velocity);
    else {
      // Align less to other species
      this._targetVelocity = target.velocity.copy();
      this._sum.add(this._targetVelocity.div(10));
    }

    return this._sum;
  }

  /**
   * Makes creature group with others
   * @return {Vector}
   */
  cohesion() {
    this._sum = new Vector(0, 0);
    this._count = 0;
    this._index = simulation.creatures.length;

    while (this._index--) {
      if (simulation.creatures[this._index] === this) continue; // Skip to next creatue

      [this._sum, this._count] = this.applyCohesion();
    }

    return this._count > 0 ? this._sum.div(this._count) : this._sum;
  }

  /**
   * Makes creature attempt to stay close to same species
   */
  applyCohesion() {
    if (simulation.creatures[this._index].species === this.species) {
      this._sum.add(simulation.creatures[this._index].location);
      this._count++;
    }

    return [this._sum, this._count];
  }
}
