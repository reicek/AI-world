const { Architect } = synaptic;
const INITIAL_REPRODUCTION_CHANCE = 2;

let metabolism = 0.0005; // Bigger means shorter life
let metabolismAgingRatio = 1.2; // Bigger means longer life
let reproductionChance = INITIAL_REPRODUCTION_CHANCE;
let speciesAffinity = 20; // Higher makes creature pay less attention to other species

/**
 * @class Creature
 */
function Creature (
    world,
    x,
    y,
    species = false,
    mass = false
) {
    const creature = this;

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
    creature.network = new Architect.Perceptron(
        networkLayers.input,
        networkLayers.hidden,
        networkLayers.output
    );

    creature.mass = !!mass ? mass : _.random(MIN_MASS, MAX_MASS, true);
    creature.maxspeed = _.random(MIN_SPEED / creature.mass, MAX_SPEED / creature.mass, true);
    creature.maxforce = _.random(0.3 * (creature.mass / 2), 0.4 * (creature.mass / 2), true);
    creature.length = creature.mass * 2;
    creature.base = creature.length / 3;
    creature.HALF_PI = Math.PI / 2;
    creature.TWO_PI = Math.PI * 2;
    creature.location = new Vector(x, y);
    creature.velocity = new Vector(0, 0);
    creature.acceleration = new Vector(0, 0);

    creature.colors = {
        red: _.random(MIN_COLOR, MAX_COLOR),
        green: _.random(MIN_COLOR, MAX_COLOR),
        blue: _.random(MIN_COLOR, MAX_COLOR)
    };

    const maxColor = _.max([creature.colors.red, creature.colors.green, creature.colors.blue]);

    creature.species = !!species ? species :
        creature.colors.red === maxColor ? 'red' :
        creature.colors.green === maxColor ? 'green' :
        'blue';

    creature.colors = {
        red: creature.species === 'red' ? creature.colors.red : MIN_COLOR,
        green: creature.species === 'green' ? creature.colors.green : MIN_COLOR,
        blue: creature.species === 'blue' ? creature.colors.blue : MIN_COLOR
    };

    creature.color = `rgb(${creature.colors.red}, ${creature.colors.green}, ${creature.colors.blue})`;

    creature.moveTo = networkOutput => {
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
        const angle = (decision.angle * creature.TWO_PI) - Math.PI;
        const separation = creature.separate(world.creatures);
        const alignment = creature.align(world.creatures).setAngle(angle);
        const cohesion = creature.seek(target);

        force.add(separation); // Apply force to reduce separation
        force.add(cohesion);   // Apply force to increase cohesion
        force.add(alignment);  // Apply force to better align to peers
        force.limit(creature.maxforce);

        creature.applyForce(force);
    };

    creature.draw = () => {
        creature.update();

        const ctx = world.context;
        const angle = creature.velocity.angle();

        x1 = creature.location.x + Math.cos(angle) * creature.base * 3;
        y1 = creature.location.y + Math.sin(angle) * creature.base * 3;

        x2 = creature.location.x + Math.cos(angle + creature.HALF_PI) * creature.base;
        y2 = creature.location.y + Math.sin(angle + creature.HALF_PI) * creature.base;

        x3 = creature.location.x + Math.cos(angle - creature.HALF_PI) * creature.base;
        y3 = creature.location.y + Math.sin(angle - creature.HALF_PI) * creature.base;

        ctx.lineWidth = 0.7;
        ctx.fillStyle = creature.color;
        ctx.strokeStyle = creature.color;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.stroke();
        ctx.fill();
    };

    creature.update = () => {
        if (creature.mass < TOP_MASS){ // Grow
            creature.mass += _.random(metabolism, metabolism * 2, true);
            creature.maxspeed = _.random(MIN_SPEED / creature.mass, MAX_SPEED / creature.mass, true);
            creature.maxforce = _.random(0.3 * (creature.mass / 2), 0.4 * (creature.mass / 2), true);
            creature.length = creature.mass * 2;
            creature.base = creature.length / 3;
        }

        if (creature.maxspeed > 0) { // Aging
            const deterioration = metabolism / metabolismAgingRatio;
            creature.maxspeed -= _.random(deterioration, deterioration * 2);

            if (creature.maxspeed < 0.2) { // Highlight older creatures
                creature.colors.red = creature.species === 'red' ? MIN_COLOR : 0;
                creature.colors.green = creature.species === 'green' ? MIN_COLOR : 0;
                creature.colors.blue = creature.species === 'blue' ? MIN_COLOR : 0;
                creature.color = `rgb(${creature.colors.red}, ${creature.colors.green}, ${creature.colors.blue})`;
            }
        } else { // Death
            world.removeCreature(creature);
        }

        creature.boundaries();
        creature.velocity.add(creature.acceleration);
        creature.velocity.limit(creature.maxspeed);

        if (creature.velocity.mag() > creature.maxspeed)
            creature.velocity.setMag(creature.velocity.mag() * 0.9);

        if (creature.velocity.mag() < creature.maxspeed)
            creature.velocity.setMag(creature.velocity.mag() * 1.01);

        creature.location.add(creature.velocity);
        creature.acceleration.mul(0);
    };

    creature.applyForce = force =>
        creature.acceleration.add(force);

    creature.boundaries = () => {
        switch (true) {
            case creature.location.x < MARGIN:
                creature.applyForce(new Vector(creature.velocity.mag(), 0));
                break;

            case creature.location.x > (world.width - MARGIN):
                creature.applyForce(new Vector(-creature.velocity.mag(), 0));
                break;

            case creature.location.y < MARGIN:
                creature.applyForce(new Vector(0, creature.velocity.mag()));
                break;

            case creature.location.y > (world.height - MARGIN):
                creature.applyForce(new Vector(0, -creature.velocity.mag()));
                break;

            default:
                return;
        }
    };

    creature.seek = target => target.copy()
        .sub(creature.location)
        .sub(creature.velocity)
        .limit(_.random(0.1, 0.01, true));

    creature.separate = neighboors => {
        const sum = new Vector(0, 0);
        const minSeparation = creature.mass * 1.2;
        const maxSeparation = _.random(minSeparation * 2, minSeparation * 3);

        let count = 0;

        neighboors.forEach(neighboor => {
            const isNotMe = neighboor != creature;

            if (isNotMe) {
                const distance = creature.location.dist(neighboor.location);
                const isFarEnough = distance < maxSeparation;
                const isCloseEnough = distance > minSeparation;
                const isSameSpecie = creature.species === neighboor.species;
                const intimateDistance = minSeparation * reproductionChance;

                if (isFarEnough && isCloseEnough) {
                    const diff = creature.location.copy().sub(neighboor.location);

                    diff.normalize();
                    diff.div(Math.pow(distance, 2));
                    sum.add(diff);
                    count++;
                }
                if (distance <= intimateDistance && isSameSpecie) {
                    const bothMature = creature.mass >= TOP_MASS && neighboor.mass >= TOP_MASS;
                    if (bothMature) {
                        creature.mass /= 2;
                        neighboor.mass /= 2;

                        world.spawnCreature( // Spawn a new creature of the same specie in the same spot
                            creature.location.x,
                            creature.location.y,
                            creature.species,
                            creature.mass / 2 // New borns are 1/4 of the parent's mass
                        );

                        console.log(`A new ${creature.species} was born.`);
                    }
                }
            }
        });

        if (!count)
            return sum;

        sum.div(count);
        sum.normalize();
        sum.sub(creature.velocity);
        sum.limit(creature.maxforce);

        return sum;
    };

    creature.align = neighboors => {
        const sum = new Vector(0, 0);
        let count = 0;

        neighboors.forEach(neighboor => {
            if (neighboor !== creature) {
                if (neighboor.species === creature.species) { // Align to same species
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

    creature.cohesion = neighboors => {
        const sum = new Vector(0, 0);
        let count = 0;

        neighboors.forEach(neighboor => {
            const isNotMe = neighboor != creature;
            if (isNotMe) {
                const isSameSpecie = neighboor.species === creature.species;
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
