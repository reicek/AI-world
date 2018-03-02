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
        this.decision = {
            x: networkOutput[0],
            y: networkOutput[1],
            angle: networkOutput[2]
        };

        this.target = new Vector(
            this.decision.x * world.width,
            this.decision.y * world.height
        );

        this.force = new Vector(0, 0);
        this.angle = (this.decision.angle * this.TWO_PI) - Math.PI;

        this.separationValue = this.separate();
        this.cohesionValue = this.seek(this.target);
        this.alignmentValue = this.align().setAngle(this.angle);

        this.force.add(this.separationValue); // Apply force to reduce separation
        this.force.add(this.cohesionValue);   // Apply force to increase cohesion
        this.force.add(this.alignmentValue);  // Apply force to better align to peers
        this.force.limit(this.maxforce);

        this.applyForce(this.force);
    }

    /**
     * @method draw
     */
    draw() {
        this.update();

        this.angle = this.velocity.angle();

        this.x1 = this.location.x + Math.cos(this.angle) * this.base * 3;
        this.y1 = this.location.y + Math.sin(this.angle) * this.base * 3;

        this.x2 = this.location.x + Math.cos(this.angle + this.HALF_PI) * this.base;
        this.y2 = this.location.y + Math.sin(this.angle + this.HALF_PI) * this.base;

        this.x3 = this.location.x + Math.cos(this.angle - this.HALF_PI) * this.base;
        this.y3 = this.location.y + Math.sin(this.angle - this.HALF_PI) * this.base;

        world.ctx.lineWidth = 0.7;
        world.ctx.fillStyle = this.color;
        world.ctx.strokeStyle = this.color;
        world.ctx.beginPath();
        world.ctx.moveTo(this.x1, this.y1);
        world.ctx.lineTo(this.x2, this.y2);
        world.ctx.lineTo(this.x3, this.y3);
        world.ctx.stroke();
        world.ctx.fill();
    }

    /**
     * @method update
     */
    update() {
        if (this.mass < this.topMass){ // Grow
            this.mass += _.random(this.metabolism, this.metabolism * 2, true);
            this.maxspeed = _.random(this.minSpeed / this.mass, this.maxSpeed / this.mass, true);
            this.maxforce = _.random(0.3 * (this.mass / 2), 0.4 * (this.mass / 2), true);
            this.length = this.mass * 2;
            this.base = this.length / 3;
        }

        if (this.maxspeed > 0) { // Aging
            this.deterioration = this.metabolism / this.metabolismAgingRatio;
            this.maxspeed -= _.random(this.deterioration, this.deterioration * 2);

            if (this.maxspeed < 0.2) { // Highlight older thiss
                this.colors.red = this.species === 'red' ? this.minColor : 0;
                this.colors.green = this.species === 'green' ? this.minColor : 0;
                this.colors.blue = this.species === 'blue' ? this.minColor : 0;
                this.color = `rgb(${this.colors.red}, ${this.colors.green}, ${this.colors.blue})`;
            }
        } else  // Death
            world.removeCreature(this);

        this.boundaries();
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxspeed);

        if (this.velocity.mag() > this.maxspeed)
            this.velocity.setMag(this.velocity.mag() * 0.9);

        if (this.velocity.mag() < this.maxspeed)
            this.velocity.setMag(this.velocity.mag() * 1.01);

        this.location.add(this.velocity);
        this.acceleration.mul(0);
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
                break;

            case this.location.x > (world.width - this.margin):
                this.applyForce(new Vector(-this.velocity.mag(), 0));
                break;

            case this.location.y < this.margin:
                this.applyForce(new Vector(0, this.velocity.mag()));
                break;

            case this.location.y > (world.height - this.margin):
                this.applyForce(new Vector(0, -this.velocity.mag()));
                break;

            default:
                return;
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
        this.sum = new Vector(0, 0);
        this.minSeparation = this.mass * 1.2;
        this.maxSeparation = _.random(this.minSeparation * 2, this.minSeparation * 3);

        this.count = 0;

        for (this.index = 0, this.total = world.creatures.length; this.index < this.total; this.index++) {
            this.neighboor = world.creatures[this.index];
            this.isNotMe = this.neighboor != this;

            if (this.isNotMe) {
                this.distance = this.location.dist(this.neighboor.location);
                this.isFarEnough = this.distance < this.maxSeparation;
                this.isCloseEnough = this.distance > this.minSeparation;
                this.isSameSpecie = this.species === this.neighboor.species;
                this.intimateDistance = this.minSeparation * world.reproductionChance;

                if (this.isFarEnough && this.isCloseEnough) {
                    this.diff = this.location.copy().sub(this.neighboor.location);
                    this.diff.normalize();
                    this.diff.div(Math.pow(this.distance, 2));
                    this.sum.add(this.diff);
                    this.count++;
                }

                if (this.distance <= this.intimateDistance && this.isSameSpecie) {
                    this.bothMature = this.mass >= this.topMass && this.neighboor.mass >= this.topMass;
                    if (this.bothMature) {
                        this.mass /= 2;
                        this.neighboor.mass /= 2;

                        world.spawnCreature( // Spawn a new this of the same specie in the same spot
                            this.location.x,
                            this.location.y,
                            this.species,
                            this.mass / 2 // New borns are 1/4 of the parent's mass
                        );

                        console.log(`A new ${this.species} was born.`);
                    }
                }
            }
        }

        if (!this.count) {
            return this.sum;
        }

        this.sum.div(this.count);
        this.sum.normalize();
        this.sum.sub(this.velocity);
        this.sum.limit(this.maxforce);

        return this.sum;
    }

    /**
     * @method align
     * @return {Vector}
     */
    align() {
        this.sum = new Vector(0, 0);
        this.count = 0;

        for (this.index = 0, this.total = world.creatures.length; this.index < this.total; this.index++) {
            this.neighboor = world.creatures[this.index];
            if (this.neighboor !== this) {
                if (this.neighboor.species === this.species) { // Align to same species
                    this.sum.add(this.neighboor.velocity);
                } else { // Avoid aliens
                    this.alienVelocity = this.neighboor.velocity.copy().div(this.speciesAffinity);
                    this.sum.sub(this.alienVelocity);
                }
                this.count++
            }
        }

        if (this.count > 0)
            this.sum.div(this.count);
        else
            return this.sum; // Exit on empty count

        return this.sum.limit(_.random(0.001, 0.1, true));
    }

    /**
     * @method cohesion
     * @return {Vector}
     */
    cohesion() {
        this.sum = new Vector(0, 0);
        this.count = 0;

        for (this.index = 0, this.total = world.creatures.length; this.index < this.total; this.index++) {
            this.neighboor = world.creatures[this.index];
            this.isNotMe = this.neighboor != this;
            if (this.isNotMe) {
                this.isSameSpecie = this.neighboor.species === this.species;
                if (this.isSameSpecie) { // Coerce only to same species
                    this.sum.add(this.neighboor.location);
                    this.count ++;
                }
            }
        }

        if (this.count > 0)
            this.sum.div(this.count);

        return this.sum;
    }
}
