'use strict';
/**
 * @module Creature
 * @requires synaptic
 * @see {@link https://github.com/cazala/synaptic} based on work by @cazala 's Synaptic.
 */
const { Architect } = synaptic;

/**
 * @class Creature
 */
class Creature {
    constructor(
        x,
        y,
        species = false,
        mass = false,
        inputNeurons = 4,
        hiddenNeurons = 4,
        outputNeurons = 3
    ) {
        /**
         * Perceptron architecture allows to create multilayer perceptrons (feed-forward neural networks).
         * They consist of a sequence of layers, each fully connected to the next one.
         * @var network
         * @see {@link https://github.com/cazala/synaptic/wiki/Architect}
         * @see {@link https://github.com/cazala/synaptic/wiki/Networks}
         */
        this.network = new Architect.Perceptron(
            inputNeurons,
            hiddenNeurons,
            outputNeurons
        );

        this.metabolism = 0.001; // Bigger means shorter life
        this.metabolismAgingRatio = 0.75; // Bigger means longer life
        this.speciesAffinity = 4; // Higher makes creature pay less attention to other species
        this.minMass = 1;
        this.maxMass = 2;
        this.margin = 5; // Minimum separation from walls
        this.mass = !!mass ? mass : this.minMass;
        this.maxSpeed = this.mass * 2;
        this.maxforce = 0.33 * (this.mass / 2);
        this.length = this.mass * 2;
        this.base = this.length / 3;
        this.HALF_PI = Math.PI / 2;
        this.TWO_PI = Math.PI * 2;
        this.location = new Vector(x, y);
        this.velocity = new Vector(0, 0);
        this.acceleration = new Vector(0, 0);

        this.initializeCreatureSpecies();
        this.initializeCreatureColor();
    }

    /**
     * Initializes creature's species
     * @method initializeCreatureSpecies
     */
    initializeCreatureSpecies() {
        if (!!this.species)
            return; // skip if already defined

        this.minColor = 100;
        this.maxColor = 255;

        this.colors = {
            red: _.random(this.minColor, this.maxColor),
            green: _.random(this.minColor, this.maxColor),
            blue: _.random(this.minColor, this.maxColor)
        };

        this.dominantColor = _.max([this.colors.red, this.colors.green, this.colors.blue]);
        switch (true) {
            case (this.colors.red === this.dominantColor):
                this.species = 'red';
                break;

            case (this.colors.green === this.dominantColor):
                this.species = 'green';
                break;

            case (this.colors.blue === this.dominantColor):
                this.species = 'blue';
                break;
        }
        delete this.dominantColor;

        return this.species;
    }

    /**
     * Initializes creature's color parameters
     * @method initializeCreatureColor
     */
    initializeCreatureColor() {
        this.colors = {
            red: this.species === 'red' ? this.maxColor : this.minColor,
            green: this.species === 'green' ? this.maxColor : this.minColor,
            blue: this.species === 'blue' ? this.maxColor : this.minColor
        };

        this.color = `rgb(${this.colors.red}, ${this.colors.green}, ${this.colors.blue})`;

        return this.color;
    }

    /**
     * Applies creature's movement
     * @method moveTo
     * @param networkOutput
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
                .setAngle((this._decision.angle * this.TWO_PI) - Math.PI)
            )
        );
    }

    /**
     * Draws current's creature position and direction
     * @method draw
     */
    draw() {
        this.update();
        this._angle = this.velocity.angle();

        this.initCreatureDraw(this._angle);
        this.drawCreatureShape(this._angle);

        return this;
    }

    /**
     * Initializes canvas settings and moves starting point to the creature's position
     * @method initCreatureDraw
     */
    initCreatureDraw(angle) {
        world.ctx.fillStyle = this.color;
        world.ctx.strokeStyle = this.color;
        world.ctx.beginPath();

        return world.ctx.moveTo(
            this.location.x + Math.cos(angle) * this.base * 3, // x1
            this.location.y + Math.sin(angle) * this.base * 3  // y1
        );
    }

    /**
     * Creates creature's shape
     * @method drawCreatureShape
     */
    drawCreatureShape(angle) {
        world.ctx.lineTo(
            this.location.x + Math.cos(angle + this.HALF_PI) * this.base,
            this.location.y + Math.sin(angle + this.HALF_PI) * this.base
        );

        world.ctx.stroke();

        return world.ctx.fill();
    }

    /**
     * Update's creature
     * @method update
     */
    update() {
        if (this.mass < this.maxMass) { // Grow
            this.mass += this.metabolism;
            this.maxSpeed = this.mass * 2;
            this.maxforce = 0.33 * (this.mass / 2);
            this.length = this.mass * 2;
            this.base = this.length / 3;
        }

        if (this.maxSpeed > 0.1) { // Aging
            this._deterioration = this.metabolism / this.metabolismAgingRatio;
            this.maxSpeed -= this._deterioration;
            this.colors[this.species] = Math.round(this.maxSpeed * 255 / (this.maxMass * 2)) + 110;
            this.color = `rgb(${Math.round(this.colors.red)}, ${Math.round(this.colors.green)}, ${Math.round(this.colors.blue)})`;
        } else  // Death
            return world.removeCreature(this);

        this.boundaries();

        this.velocity
            .add(this.acceleration)
            .limit(this.maxSpeed);

        if (this.velocity.mag() > this.maxSpeed)
            this.velocity.setMag(this.velocity.mag() * 0.9);
        else if (this.velocity.mag() < this.maxSpeed)
            this.velocity.setMag(this.velocity.mag() * 1.01);

        this.location.add(this.velocity);
        this.acceleration.mul(0);

        return this;
    }

    /**
     * Applies a vector force to the creature's momentum
     * @method applyForce
     * @param force
     * @return {Vector}
     */
    applyForce(force) {
        return this.acceleration.add(force);
    }

    /**
     * Prevents creatures from going beyond the edges
     * @method boundaries
     */
    boundaries() {
        switch (true) {
            case this.location.x < this.margin:
                this.applyForce(new Vector(this.velocity.mag(), 0));
                return this;

            case this.location.x > (world.width - this.margin):
                this.applyForce(new Vector(-this.velocity.mag(), 0));
                return this;

            case this.location.y < this.margin:
                this.applyForce(new Vector(0, this.velocity.mag()));
                return this;

            case this.location.y > (world.height - this.margin):
                this.applyForce(new Vector(0, -this.velocity.mag()));
                return this;

            default:
                return this;
        }
    }

    /**
     * Returns the force needed to move towards specific creature
     * @method seek
     * @param target
     * @return {Vector}
     */
    seek(target) {
        this.target = target.copy();

        return this.target
            .sub(this.location)
            .sub(this.velocity)
            .limit(this.maxforce / 4);
    }

    /**
     * Makes creature attempt to stay within reasonable distance
     * Triggers reproduction when creatures touch, depending on world reproduction chance
     * @method separate
     * @return {Vector}
     */
    separate() {
        this.minSeparation = this.mass * 1.2;
        this.maxSeparation = this.minSeparation * 2;
        this._sum = new Vector(0, 0);
        this._count = 0;

        this._index = world.creatures.length;
        while (this._index--) {
            if (world.creatures[this._index] === this)
                continue; // Skip to next creatue

            this._distance = this.location.dist(world.creatures[this._index].location);
            this.attemptReproduction(world.creatures[this._index], this._distance);
            [this._sum, this._count] = this.normalizeSeparation(
                world.creatures[this._index],
                this._distance,
                this.location.copy(),
                this._count, this._sum
            );
        }

        if (!this._count)
            return this._sum;
        else
            return this._sum
                .div(this._count)
                .normalize()
                .sub(this.velocity);
    }

    /**
     * Normalizes creature separation if they are within range
     * @method normalizeSeparation
     */
    normalizeSeparation(
        target,
        distance,
        currentPosition,
        count,
        sum
    ) {
        if ((distance < this.maxSeparation) && (distance > this.minSeparation)) { // is far enough & is close enough
            sum.add(currentPosition
                .sub(target.location)
                .normalize()
                .div(Math.pow(distance, 2))
            );
            count++;
        }

        return [
            sum,
            count
        ];
    }

    /**
     * Attempt to reproduce creature
     * @method attemptReproduction
     * @param {Object} target
     * @param {number} distance
     */
    attemptReproduction(target, distance) {
        if (distance <= (this.minSeparation * world.reproductionChance)) { // is close enough to reproduce
            if ((this.mass >= this.maxMass) && (target.mass >= this.maxMass)) { // both creatures are fully mature
                // Both parents loose half their mass
                this.mass /= 2;
                target.mass /= 2;
                // Spawn a new this of the same species in the same spot
                world.spawnCreature(
                    this.location.x,
                    this.location.y,
                    this.species,
                    this.mass / 2 // New borns are 1/4 of the original parents mass
                );
            }
        }
    }

    /**
     * Align to other creatures
     * @method align
     * @return {Vector}
     */
    align() {
        this._sum = new Vector(0, 0);
        this._count = 0;

        this._index = world.creatures.length;
        while (this._index--) {
            if (world.creatures[this._index] === this)
                continue; // Skip to next creatue

            if (world.creatures[this._index].species === this.species) // Align more to same species
                this._sum.add(world.creatures[this._index].velocity);
            else { // Align less to other species
                this.target = world.creatures[this._index].velocity.copy();
                this._sum.add(this.target.div(this.speciesAffinity));
            }

            this._count++;
        }

        if (this._count > 0)
            return this._sum
                .mul(0.003);
        else
            return this._sum;
    }

    /**
     * Makes creature group with same species
     * @method cohesion
     * @return {Vector}
     */
    cohesion() {
        this._sum = new Vector(0, 0);
        this._count = 0;

        this._index = world.creatures.length;
        while (this._index--) {
            if (world.creatures[this._index] === this) continue; // Skip to next creatue
            this.isNotMe = world.creatures[this._index] !== this;

            if (world.creatures[this._index].species === this.species) { // Coerce only to same species
                this._sum.add(world.creatures[this._index].location);
                this._count ++;
            }
        }

        if (this._count > 0)
            return this._sum.div(this._count);
        else
            return this._sum;
    }
}

const world = new World();
world.launch();