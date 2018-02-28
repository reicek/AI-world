/**
 * @module World
 */
/**
 * @class World
 */
class World {
    constructor(
        initialPopulation = 10,
        topPopulation = 100,
        reproductionChance = 2,
        id = 'world',
        pathOpacity = 0.1
    ) {
        this.reproductionChance = reproductionChance;
        this.initialReproductionChange = reproductionChance;
        this.initialPopulation = initialPopulation;
        this.initialPopulation_copy = initialPopulation;
        this.topPopulation = topPopulation;
        this.id = id;
        this.canvas = $(`#${id}`)[0];;
        this.ctx = this.canvas.getContext('2d', { alpha: false });
        this.ctx.canvas.height = $(`#${id}`).height();
        this.ctx.canvas.width = $(`#${id}`).width();
        this.births = 0;
        this.deaths = 0;
        this.cycles = 0;
        this.creatures = [];
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.learningRate = 0.15;
        this.pathOpacity = pathOpacity;
    }

    /**
     * @method launch
     * @public
     */
    launch() {
        while (this.initialPopulation_copy--) {
            this.spawnCreature(
                _.random(0, this.width),
                _.random(0, this.height)
            );
        }
        this.logCensus();

        delete this.initialPopulation_copy;

        $(`#${this.id}`).click(e => { // Add new creature to the less populated species on left click
            this.leastPopulated = _.minBy([
                {
                    species: 'red',
                    population: this.censusResults.red
                },
                {
                    species: 'green',
                    population: this.censusResults.green
                },
                {
                    species: 'blue',
                    population: this.censusResults.blue
                }
            ], 'population');

            this.spawnCreature(e.clientX, e.clientY, this.leastPopulated.species);
            this.initialPopulation++;
        });

        $(`#${this.id}`).contextmenu(e => { // Remove oldest creature on right click
            if (!this.oldestCreature) {
                this.oldestCreature = _.head(this.creatures);;
            }
            this.creatures.forEach(creature => {
                if (creature.maxspeed < this.oldestCreature.maxspeed) {
                    this.oldestCreature = creature;
                }
            });
            this.removeCreature(this.oldestCreature);
            this.initialPopulation--;

            return false;
        });

        return this.draw();
    }

    /**
     * @method spawnCreature
     * @public
     */
    spawnCreature(
        x,
        y,
        species,
        mass
    ) {
        this.creatures.push(new Creature(x, y, species, mass));
        this.births ++;

        return this.logCensus('birth', species);
    }

    /**
     * @method removeCreature
     * @param {Object} creature
     * @public
     */
    removeCreature(creature) {
        const index = this.creatures.indexOf(creature);
        this.creatures.splice(index, 1);
        this.deaths ++;

        return this.logCensus('death', creature.species);
    }

    /**
     * Clears the log and shows the census results
     * @method logCensus
     * @param {string} [eventName] - birth | death
     * @param {string} [species]
     * @public
     */
    logCensus(
        eventName,
        species
    ) {
        const census = this.getCensus();

        console.clear();
        console.log('%c==================================', 'color: #777');
        console.log(`%c Red   : ${census.red}`, 'color: rgb(255, 100, 100)');
        console.log(`%c Green  : ${census.green}`, 'color: rgb(100, 255, 100)');
        console.log(`%c Blue : ${census.blue}`, ' color: rgb(100, 100, 255)');
        console.log(` Population: ${this.creatures.length}`);
        console.log(` Reproduction chance ${this.reproductionChance}`);
        if (this.births > 0) {
            console.log(` Births: ${this.births}`);
        }
        if (this.deaths > 0) {
            console.log(` Deaths ${this.deaths}`);
        }
        if (this.creatures.length >= this.topPopulation) {
            console.log(`%c Overpopulation after ${this.cycles} cycles!`, 'color: rgb(255, 150, 150)');
        }
        if (this.creatures.length === 0) {
            console.log(`%c Extintion after ${this.cycles} cycles!`, 'color: rgb(255, 150, 150)');
        }
        console.log('%c==================================', 'color: #777');
    }

    /**
     * Returns the current population by species
     * @method _getCensus
     * @extends logCensus
     * @return {Census}
     */
    /**
     * @typedef  {Object} Census - Population by species
     * @property {number} red    - Red population
     * @property {number} green  - Green population
     * @property {number} blue   - Blue population
     */
    getCensus() {
        this.censusResults = {
            red: 0,
            green: 0,
            blue: 0
        };

        this.creatures.forEach(creature =>
            this.censusResults[creature.species] ++);

        return this.censusResults;
    }

    draw() {
        this.cycles ++;

        this.ctx.fillStyle = `rgba(0, 0, 0, ${this.pathOpacity})`;
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.creatures.map(creature => {
            const input = [
                creature.location.x,
                creature.location.y,
                creature.velocity.x,
                creature.velocity.y
            ];

            creature.moveTo(creature.network.activate(input)); // Think of where to move (align to others)
            creature.draw(); // Moves

            const target = [
                creature.cohesion(this.creatures).x / this.width, // X target
                creature.cohesion(this).y / this.height, // Y target
                (creature.align(this.creatures).angle() + Math.PI) / (Math.PI * 2) // Target angle
            ];

            creature.network.propagate(this.learningRate, target); // Learn to move with others
        });

        switch (true) { // Population control
            case this.creatures.length > (this.initialPopulation * 1.3): // If overpopulation in progress
                this.reproductionChance *=  0.9999; // Reduce reproduction chance
                break;

            case this.creatures.length < this.initialPopulation * 1.1: // If extintion in progress
                this.reproductionChance *=  1.0001// Increase reproduction chance
                break;

            default:
                this.reproductionChance = this.initialReproductionChange;;
                break;
        }

        requestAnimationFrame(() => {
            this.draw();
        });
    }
}

const world = new World();
world.launch();
