'use strict';
/**
 * @module Creature
 * @requires lodash
 * @requires World
 * @requires Vector
 * @requires DrawCreature
 * @requires CreatureBrain
 * @requires CreatureBody
 */

const world = new World();

/**
 * Artificial Intelligence based in perceptron neural networks that lives in a 2D world
 */
class Creature {
    constructor(
        x,
        y,
        species,
        mass,
        inputNeurons,
        hiddenNeurons,
        outputNeurons
    ) {
        this.brain = new CreatureBrain(inputNeurons, hiddenNeurons, outputNeurons);
        this.metabolism = 0.001; // Bigger means shorter life
        this.metabolismAgingRatio = 0.75; // Bigger means longer life
        this.minMass = 1;
        this.maxMass = 2;
        this.margin = 5; // Minimum separation from walls
        this.mass = !!mass ? mass : this.minMass;
        this.maxSpeed = this.mass * 2;
        this.maxforce = 0.33 * (this.mass / 2);
        this.location = new Vector(x, y);
        this.velocity = new Vector(0, 0);
        this.acceleration = new Vector(0, 0);

        CreatureBody.initializeSpecies(this, species);
        CreatureBody.initializeColor(this);
    }

    /**
     * Applies creature's movement
     */
    moveTo(networkOutput) {
        this._decision = {
            x: networkOutput[0],
            y: networkOutput[1],
            angle: networkOutput[2]
        };

        return this.applyForce(new Vector(0, 0)
            .add(this.separate()) // Apply force to reduce separation
            .add(this.seek(new Vector( // Apply force to increase cohesion
                this._decision.x * world.width,
                this._decision.y * world.height
            )))
            .add(this.align() // Apply force to better align to peers
                .setAngle((this._decision.angle * (Math.PI * 2)) - Math.PI)
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
        DrawCreature.shape(
            this.mass,
            this.color,
            this.location,
            world
        );

        return this;
    }

    /**
     * Update's creature
     */
    update() {
        CreatureBody.grow(this);
        CreatureBody.age(this, world);
        CreatureBody.boundaries(this, world);
        CreatureBody.adjustSpeed(this);

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
        return target.copy()
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
        this._index = world.creatures.length;

        while (this._index--) {
            if (world.creatures[this._index] === this)
                continue; // Skip to next creatue

            this._distance = this.location.dist(world.creatures[this._index].location) + this.mass;

            CreatureBody.attemptReproduction(
                this,
                world,
                world.creatures[this._index],
                this._distance
            );

            [this._sum, this._count] = this.normalizeSeparation(this.location.copy());
        }

        return !this._count ? this._sum :
            this._sum
                .div(this._count)
                .normalize()
                .sub(this.velocity);
    }

    /**
     * Normalizes creature separation if they are within range
     */
    normalizeSeparation(currentPosition) {
        if ((this._distance < this.maxSeparation) &&
            (this._distance > this.minSeparation)
        ) { // is far enough & is close enough
            this._sum.add(currentPosition
                .sub(world.creatures[this._index].location)
                .normalize()
                .div(Math.pow(this._distance, 2))
            );
            this._count++;
        }

        if (this._distance < this.mass) { // Bounce
            this.applyForce(world.creatures[this._index].acceleration);
            world.creatures[this._index].applyForce(this.acceleration);
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
        this._index = world.creatures.length;

        while (this._index--) {
            if (world.creatures[this._index] === this)
                continue; // Skip to next creatue

            this._sum = this.addAlignmentTo(world.creatures[this._index]);
            this._count++;
        }

        return this._count > 0 ? this._sum.mul(0.003) : this._sum;
    }

    /**
     * Adds force required to align to another creature
     */
    addAlignmentTo(target) {
        if (target.species === this.species) // Align more to same species
            this._sum.add(target.velocity);
        else { // Align less to other species
            this._targetVelocity = target.velocity.copy();
            this._sum.add(this._targetVelocity.div(6));
        }

        return this._sum;
    }

    /**
     * Makes creature group with same species
     * @return {Vector}
     */
    cohesion() {
        this._sum = new Vector(0, 0);
        this._count = 0;
        this._index = world.creatures.length;

        while (this._index--) {
            if (world.creatures[this._index] === this)
                continue; // Skip to next creatue

            [this._sum, this._count] = this.applyCohesion();
        }

        return this._count > 0 ? this._sum.div(this._count) : this._sum;
    }

    /**
     * Makes creature attempt to stay within reasonable distance
     */
    applyCohesion() {
        this._sum.add(world.creatures[this._index].location);
        this._count ++;

        return [this._sum, this._count];
    }
}

world.launch(); // Start simulation
