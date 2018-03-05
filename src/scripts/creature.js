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
        hiddenNeurons = 6,
        outputNeurons = 3
    ) {
        this.metabolism = 0.0005; // Bigger means shorter life
        this.metabolismAgingRatio = 1.2; // Bigger means longer life
        this.speciesAffinity = 20; // Higher makes creature pay less attention to other species
        this.minColor = 100;
        this.maxColor = 255;
        this.minMass = 1;
        this.maxMass = 1.1;
        this.topMass = 2;
        this.minSpeed = 3;
        this.maxSpeed = 4;
        this.margin = 5; // Minimum separation from walls
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
        this.mass = !!mass ? mass : _.random(this.minMass, this.maxMass, true);
        this.maxspeed = _.random(this.minSpeed / this.mass, this.maxSpeed / this.mass, true);
        this.maxforce = _.random(0.3 * (this.mass / 2), 0.4 * (this.mass / 2), true);
        this.length = this.mass * 2;
        this.base = this.length / 3;
        this.HALF_PI = Math.PI / 2;
        this.TWO_PI = Math.PI * 2;
        this.location = new Vector(x, y);
        this.velocity = new Vector(0, 0);
        this.acceleration = new Vector(0, 0);
        this.colors = {
            red: _.random(this.minColor, this.maxColor),
            green: _.random(this.minColor, this.maxColor),
            blue: _.random(this.minColor, this.maxColor)
        };
        this.maxColor = _.max([this.colors.red, this.colors.green, this.colors.blue]);
        this.species = !!species ? species :
            this.colors.red === this.maxColor ? 'red' :
            this.colors.green === this.maxColor ? 'green' :
            'blue';
        this.colors = {
            red: this.species === 'red' ? this.colors.red : this.minColor,
            green: this.species === 'green' ? this.colors.green : this.minColor,
            blue: this.species === 'blue' ? this.colors.blue : this.minColor
        };
        this.color = `rgb(${this.colors.red}, ${this.colors.green}, ${this.colors.blue})`;
    }

    /**
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
            .limit(this.maxforce)
        );
    }

    /**
     * @method draw
     */
    draw() {
        this.update();
        this._angle = this.velocity.angle();

        world.ctx.fillStyle = this.color;
        world.ctx.strokeStyle = this.color;
        world.ctx.beginPath();
        world.ctx.moveTo(
            this.location.x + Math.cos(this._angle) * this.base * 3, // x1
            this.location.y + Math.sin(this._angle) * this.base * 3  // y1
        );
        world.ctx.lineTo(
            this.location.x + Math.cos(this._angle + this.HALF_PI) * this.base, // x2
            this.location.y + Math.sin(this._angle + this.HALF_PI) * this.base  // y2
        );
        world.ctx.lineTo(
            this.location.x + Math.cos(this._angle - this.HALF_PI) * this.base, // x3
            this.location.y + Math.sin(this._angle - this.HALF_PI) * this.base  // y3
        );
        world.ctx.stroke();
        world.ctx.fill();

        return this;
    }

    /**
     * @method update
     */
    update() {
        if (this.mass < this.topMass) { // Grow
            this.mass += _.random(this.metabolism, this.metabolism * 2, true);
            this.maxspeed = _.random(this.minSpeed / this.mass, this.maxSpeed / this.mass, true);
            this.maxforce = _.random(0.3 * (this.mass / 2), 0.4 * (this.mass / 2), true);
            this.length = this.mass * 2;
            this.base = this.length / 3;
        }

        if (this.maxspeed > 0) { // Aging
            this._deterioration = this.metabolism / this.metabolismAgingRatio;
            this.maxspeed -= _.random(this._deterioration, this._deterioration * 2);

            if (this.maxspeed < 0.2) // Highlight older thiss
                this.color = `rgb(${this.species === 'red' ? this.minColor : 0}, ${this.species === 'green' ? this.minColor : 0}, ${this.species === 'blue' ? this.minColor : 0})`;

        } else  // Death
            return world.removeCreature(this);

        this.boundaries();

        this.velocity
            .add(this.acceleration)
            .limit(this.maxspeed);

        if (this.velocity.mag() > this.maxspeed)
            this.velocity.setMag(this.velocity.mag() * 0.9);
        else if (this.velocity.mag() < this.maxspeed)
            this.velocity.setMag(this.velocity.mag() * 1.01);

        this.location.add(this.velocity);
        this.acceleration.mul(0);

        return this;
    }

    /**
     * @method applyForce
     * @param force
     * @return {Vector}
     */
    applyForce(force) {
        return this.acceleration.add(force);
    }

    /**
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
     * @method seek
     * @param target
     * @return {Vector}
     */
    seek(target) {
        return target.copy()
            .sub(this.location)
            .sub(this.velocity)
            .limit(_.random(0.1, 0.01, true));
    }

    /**
     * @method separate
     * @return {Vector}
     */
    separate() {
        this._sum = new Vector(0, 0);
        this.minSeparation = this.mass * 1.2;
        this.maxSeparation = _.random(this.minSeparation * 2, this.minSeparation * 3);
        this._count = 0;

        this._index = world.creatures.length;
        while (this._index--) {
            if (world.creatures[this._index] === this) continue; // Skip to next creatue

            this.distance = this.location.dist(world.creatures[this._index].location);

            if ((this.distance < this.maxSeparation) && (this.distance > this.minSeparation)) { // is far enough & is close enough
                this._sum.add(this.location.copy()
                    .sub(world.creatures[this._index].location)
                    .normalize()
                    .div(Math.pow(this.distance, 2))
                );
                this._count++;
            }

            if ((this.distance <= (this.minSeparation * world.reproductionChance)) && (this.species === world.creatures[this._index].species)) { // is close enough to reproduce with same specie
                if ((this.mass >= this.topMass) && (world.creatures[this._index].mass >= this.topMass)) { // both creatures are fully mature
                    // Both parents loose half their mass
                    this.mass /= 2;
                    world.creatures[this._index].mass /= 2;
                    // Spawn a new this of the same specie in the same spot
                    world.spawnCreature(
                        this.location.x,
                        this.location.y,
                        this.species,
                        this.mass / 2 // New borns are 1/4 of the original parents mass
                    );

                    console.log(`A new ${this.species} was born.`);
                }
            }
        }

        if (!this._count){
            return this._sum;
        }
        else {
            return this._sum
                .div(this._count)
                .normalize()
                .sub(this.velocity);
        }
    }

    /**
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

            if (world.creatures[this._index].species === this.species) // Align to same species
                this._sum.add(world.creatures[this._index].velocity);
            else // Avoid other species
                this._sum
                    .sub(world.creatures[this._index].velocity.copy()
                    .div(this.speciesAffinity));

            this._count++;
        }

        if (this._count > 0)

            return this._sum
                .div(this._count)
                .limit(_.random(0.001, 0.1, true));
        else

            return this._sum;
    }

    /**
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
            this._sum.div(this._count);

        return this._sum;
    }
}

const world = new World();
world.launch();