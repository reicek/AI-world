const { Architect } = synaptic;

let metabolism = 0.0005; // Bigger means shorter life
let metabolismAgingRatio = 1.2; // Bigger means longer life
let speciesAffinity = 20; // Higher makes creature pay less attention to other species

/**
 * @class Creature
 */
function Creature (
    x,
    y,
    species = false,
    mass = false
) {
    const INPUT_LAYER = 4; // Ideally 4
    const HIDDEN_LAYER = 6;
    const OUTPUT_LAYER = 3; // Must be 3
    const MIN_COLOR = 100;
    const MAX_COLOR = 255;
    const MIN_MASS = 1;
    const MAX_MASS = 1.1;
    const TOP_MASS = 2;
    const MIN_SPEED = 3;
    const MAX_SPEED = 4;
    const MARGIN = 5; // Minimum separation from walls

    const networkLayers = {
        input: INPUT_LAYER,
        hidden: HIDDEN_LAYER,
        hidden: HIDDEN_LAYER,
        output: OUTPUT_LAYER
    };

    /**
     * Perceptron architecture allows to create multilayer perceptrons (feed-forward neural networks).
     * They consist of a sequence of layers, each fully connected to the next one.
     * @see {@link https://github.com/cazala/synaptic/wiki/Architect}
     * @see {@link https://github.com/cazala/synaptic/wiki/Networks}
     */
    this.network = new Architect.Perceptron(
        networkLayers.input,
        networkLayers.hidden,
        networkLayers.output
    );

    this.mass = !!mass ? mass : _.random(MIN_MASS, MAX_MASS, true);
    this.maxspeed = _.random(MIN_SPEED / this.mass, MAX_SPEED / this.mass, true);
    this.maxforce = _.random(0.3 * (this.mass / 2), 0.4 * (this.mass / 2), true);
    this.length = this.mass * 2;
    this.base = this.length / 3;
    this.HALF_PI = Math.PI / 2;
    this.TWO_PI = Math.PI * 2;
    this.location = new Vector(x, y);
    this.velocity = new Vector(0, 0);
    this.acceleration = new Vector(0, 0);

    this.colors = {
        red: _.random(MIN_COLOR, MAX_COLOR),
        green: _.random(MIN_COLOR, MAX_COLOR),
        blue: _.random(MIN_COLOR, MAX_COLOR)
    };

    const maxColor = _.max([this.colors.red, this.colors.green, this.colors.blue]);

    this.species = !!species ? species :
        this.colors.red === maxColor ? 'red' :
        this.colors.green === maxColor ? 'green' :
        'blue';

    this.colors = {
        red: this.species === 'red' ? this.colors.red : MIN_COLOR,
        green: this.species === 'green' ? this.colors.green : MIN_COLOR,
        blue: this.species === 'blue' ? this.colors.blue : MIN_COLOR
    };

    this.color = `rgb(${this.colors.red}, ${this.colors.green}, ${this.colors.blue})`;

    this.moveTo = networkOutput => {
        const decision = {
            x: networkOutput[0],
            y: networkOutput[1],
            angle: networkOutput[2]
        };
        const target = new Vector(
            decision.x * world.width,
            decision.y * world.height
        );
        const force = new Vector(0, 0);
        const angle = (decision.angle * this.TWO_PI) - Math.PI;
        const separation = this.separate();
        const alignment = this.align().setAngle(angle);
        const cohesion = this.seek(target);

        force.add(separation); // Apply force to reduce separation
        force.add(cohesion);   // Apply force to increase cohesion
        force.add(alignment);  // Apply force to better align to peers
        force.limit(this.maxforce);

        this.applyForce(force);
    };

    this.draw = () => {
        this.update();

        const angle = this.velocity.angle();

        x1 = this.location.x + Math.cos(angle) * this.base * 3;
        y1 = this.location.y + Math.sin(angle) * this.base * 3;

        x2 = this.location.x + Math.cos(angle + this.HALF_PI) * this.base;
        y2 = this.location.y + Math.sin(angle + this.HALF_PI) * this.base;

        x3 = this.location.x + Math.cos(angle - this.HALF_PI) * this.base;
        y3 = this.location.y + Math.sin(angle - this.HALF_PI) * this.base;

        world.ctx.lineWidth = 0.7;
        world.ctx.fillStyle = this.color;
        world.ctx.strokeStyle = this.color;
        world.ctx.beginPath();
        world.ctx.moveTo(x1, y1);
        world.ctx.lineTo(x2, y2);
        world.ctx.lineTo(x3, y3);
        world.ctx.stroke();
        world.ctx.fill();
    };

    this.update = () => {
        if (this.mass < TOP_MASS){ // Grow
            this.mass += _.random(metabolism, metabolism * 2, true);
            this.maxspeed = _.random(MIN_SPEED / this.mass, MAX_SPEED / this.mass, true);
            this.maxforce = _.random(0.3 * (this.mass / 2), 0.4 * (this.mass / 2), true);
            this.length = this.mass * 2;
            this.base = this.length / 3;
        }

        if (this.maxspeed > 0) { // Aging
            const deterioration = metabolism / metabolismAgingRatio;
            this.maxspeed -= _.random(deterioration, deterioration * 2);

            if (this.maxspeed < 0.2) { // Highlight older thiss
                this.colors.red = this.species === 'red' ? MIN_COLOR : 0;
                this.colors.green = this.species === 'green' ? MIN_COLOR : 0;
                this.colors.blue = this.species === 'blue' ? MIN_COLOR : 0;
                this.color = `rgb(${this.colors.red}, ${this.colors.green}, ${this.colors.blue})`;
            }
        } else { // Death
            world.removeCreature(this);
        }

        this.boundaries();
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxspeed);

        if (this.velocity.mag() > this.maxspeed)
            this.velocity.setMag(this.velocity.mag() * 0.9);

        if (this.velocity.mag() < this.maxspeed)
            this.velocity.setMag(this.velocity.mag() * 1.01);

        this.location.add(this.velocity);
        this.acceleration.mul(0);
    };

    this.applyForce = force =>
        this.acceleration.add(force);

    this.boundaries = () => {
        switch (true) {
            case this.location.x < MARGIN:
                this.applyForce(new Vector(this.velocity.mag(), 0));
                break;

            case this.location.x > (world.width - MARGIN):
                this.applyForce(new Vector(-this.velocity.mag(), 0));
                break;

            case this.location.y < MARGIN:
                this.applyForce(new Vector(0, this.velocity.mag()));
                break;

            case this.location.y > (world.height - MARGIN):
                this.applyForce(new Vector(0, -this.velocity.mag()));
                break;

            default:
                return;
        }
    };

    this.seek = target => target.copy()
        .sub(this.location)
        .sub(this.velocity)
        .limit(_.random(0.1, 0.01, true));

    this.separate = () => {
        const sum = new Vector(0, 0);
        const minSeparation = this.mass * 1.2;
        const maxSeparation = _.random(minSeparation * 2, minSeparation * 3);

        let count = 0;

        world.creatures.forEach(neighboor => {
            const isNotMe = neighboor != this;

            if (isNotMe) {
                const distance = this.location.dist(neighboor.location);
                const isFarEnough = distance < maxSeparation;
                const isCloseEnough = distance > minSeparation;
                const isSameSpecie = this.species === neighboor.species;
                const intimateDistance = minSeparation * world.reproductionChance;

                if (isFarEnough && isCloseEnough) {
                    const diff = this.location.copy().sub(neighboor.location);

                    diff.normalize();
                    diff.div(Math.pow(distance, 2));
                    sum.add(diff);
                    count++;
                }
                if (distance <= intimateDistance && isSameSpecie) {
                    const bothMature = this.mass >= TOP_MASS && neighboor.mass >= TOP_MASS;
                    if (bothMature) {
                        this.mass /= 2;
                        neighboor.mass /= 2;

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
        });

        if (!count)
            return sum;

        sum.div(count);
        sum.normalize();
        sum.sub(this.velocity);
        sum.limit(this.maxforce);

        return sum;
    };

    this.align = () => {
        const sum = new Vector(0, 0);
        let count = 0;

        world.creatures.forEach(neighboor => {
            if (neighboor !== this) {
                if (neighboor.species === this.species) { // Align to same species
                    sum.add(neighboor.velocity);
                } else { // Avoid aliens
                    const alienVelocity = neighboor.velocity.copy().div(speciesAffinity);
                    sum.sub(alienVelocity);
                }
                count++
            }
        });

        if (count > 0)
            sum.div(count);
        else
            return sum; // Exit on empty count

        return sum.limit(_.random(0.001, 0.1, true));
    };

    this.cohesion = () => {
        const sum = new Vector(0, 0);
        let count = 0;

        world.creatures.forEach(neighboor => {
            const isNotMe = neighboor != this;
            if (isNotMe) {
                const isSameSpecie = neighboor.species === this.species;
                if (isSameSpecie) { // Coerce only to same species
                    sum.add(neighboor.location);
                    count ++;
                }
            }
        });

        if (count > 0)
            sum.div(count);

        return sum;
    }
}
