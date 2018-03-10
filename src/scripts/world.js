'use strict';
/**
 * @module World
 * @requires lodash
 * @requires Creature
 * @see {@link https://github.com/cazala/synaptic} based on work by @cazala 's Synaptic.
 */
/**
 * 2D environment for creatures
 */
class World {
    constructor(
        initialPopulation = 15,
        topPopulation = 200,
        reproductionChance = 2,
        id = 'world',
        pathOpacity = 0.5
    ) {
        this.reproductionChance = reproductionChance;
        this.initialReproductionChange = reproductionChance;
        this.initialPopulation = initialPopulation;
        this.topPopulation = topPopulation;
        this.id = id;
        this.canvas = $(`#${id}`)[0];
        this.ctx = this.canvas.getContext('2d', { alpha: false });
        this.ctx.canvas.height = $(`#${id}`).height();
        this.ctx.canvas.width = $(`#${id}`).width();
        this.ctx.lineWidth = 2;
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
     * Start simulation
     */
    launch() {
        this._i = this.initialPopulation;
        while (this._i --)
            this.spawnCreature(_.random(0, this.width), _.random(0, this.height));

        $(`button.add, #${this.id}`).click(e => // Add new creature to the less populated species on left click
            this.increasePopulation(e.clientX, e.clientY));

        $(`button.remove`).click(() =>
            this.decreasePopulation());

        $(`#${this.id}`).contextmenu(() => { // Remove oldest creature on right click
            this.decreasePopulation();

            return false; // Don't show context menu on right click
        });

        $(window).resize(() => { // Update canvas size on screen change
            this.ctx = this.canvas.getContext('2d', { alpha: false });
            this.ctx.canvas.height = $(`#${this.id}`).height();
            this.ctx.canvas.width = $(`#${this.id}`).width();
            this.width = this.canvas.width;
            this.height = this.canvas.height;
        });

        return this.drawNextFrame();
    }

    /**
     * Increases the least populated species if none is specified
     * @param {number} [x]
     * @param {number} [y]
     * @param {string} [species]
     */
    increasePopulation(
        x,
        y,
        species
    ) {
        this.leastPopulated = !!species ? species : _.minBy(
            [
                {
                    species: 'red',
                    population: this.census.red
                },
                {
                    species: 'green',
                    population: this.census.green
                },
                {
                    species: 'blue',
                    population: this.census.blue
                }
            ],
            'population'
        );

        this.spawnCreature(x, y, this.leastPopulated.species);

        return this.initialPopulation++; // Permanently increase the ideal population
    }

    /**
     * Removes oldest (slowest) creature
     * @return {number}
     */
    decreasePopulation() {
        this.removeCreature(_.minBy(this.creatures, 'maxSpeed'));

        return this.initialPopulation--; // Permanently decrease the ideal population
    }

    /**
	 * Adds a new crature to the simulation
     * @param {number} [x]
     * @param {number} [y]
     * @param {string} [species]
     * @param {number}[mass]
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
	 * Removes a creature from the simulation
     * @param {Object} creature
     */
    removeCreature(creature) {
        this._index = this.creatures.indexOf(creature);
        this.creatures.splice(this._index, 1);
        this.deaths ++;

        return this.logCensus('death', creature.species);
    }

    /**
     * Clears the log and shows the census results
     * @param {string} [eventName] - birth | death
     * @param {string} [species]
     */
    logCensus(
        eventName,
        species
    ) {
        this.updateCensus();
        $('#population').text(this.creatures.length);

        console.clear();
        console.log('%c==================================', 'color: #777');
        console.log(`%c Red   : ${this.census.red}`, 'color: rgb(255, 100, 100)');
        console.log(`%c Green  : ${this.census.green}`, 'color: rgb(100, 255, 100)');
        console.log(`%c Blue : ${this.census.blue}`, ' color: rgb(100, 100, 255)');
        console.log(` Population: ${this.creatures.length}`);
        console.log(` Reproduction chance ${this.reproductionChance}`);
        if (this.births > 0)
            console.log(` Births: ${this.births}`);
        if (this.deaths > 0)
            console.log(` Deaths ${this.deaths}`);
        if (this.creatures.length >= this.topPopulation)
            console.log(`%c Overpopulation after ${this.cycles} cycles!`, 'color: rgb(255, 150, 150)');
        if (this.creatures.length === 0)
            console.log(`%c Extintion after ${this.cycles} cycles!`, 'color: rgb(255, 150, 150)');
        console.log('%c==================================', 'color: #777');
    }

    /**
     * Returns the current population by species
     * @extends logCensus
     * @return {Census}
     */
    /**
     * @typedef  {Object} Census - Population by species
     * @property {number} red    - Red population
     * @property {number} green  - Green population
     * @property {number} blue   - Blue population
     */
    updateCensus() {
        this.census = {
            red: 0,
            green: 0,
            blue: 0
        };

        this._index = this.creatures.length;
        while (this._index--)
            this.census[this.creatures[this._index].species] ++;

        return this.census;
    }

    /**
     * Adjust population and draws creatures next move
     */
    drawNextFrame() {
        this.cycles ++;

        this.ctx.fillStyle = `rgba(0, 0, 0, ${this.pathOpacity})`;
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.adjustPopulationGrowth();

        return this.updateCreatures();
    }

    /**
     * Adjust world population growth to prevent overpopulation or full extintion
     */
    adjustPopulationGrowth() {
        switch (true) { // Population control
            case this.creatures.length > this.initialPopulation * 1.3: // If overpopulation in progress
                this.reproductionChance *=  0.999; // Reduce reproduction chance
                break;

            case this.creatures.length < this.initialPopulation * 0.8: // If extintion in progress
                this.reproductionChance *=  1.001; // Increase reproduction chance
                break;

            default:
                this.reproductionChance = this.initialReproductionChange;
                break;
        }

        return this.reproductionChance;
    }

    /**
     * Draws creatures next move
     */
    updateCreatures() {
        try {
            this._index = this.creatures.length;
            while (this._index--) {
                this.creatures[this._index].moveTo(this.creatures[this._index]
                    .network.activate([ // Think of where to move from current location (align to others)
                        this.creatures[this._index].location.x,
                        this.creatures[this._index].location.y,
                        this.creatures[this._index].velocity.x,
                        this.creatures[this._index].velocity.y
                    ]));

                this.creatures[this._index].draw(); // Move creature

                this._creatureCohesion = this.creatures[this._index].cohesion();

                this.creatures[this._index].network.propagate(this.learningRate, [
                    this._creatureCohesion.x / this.width, // X target
                    this._creatureCohesion.y / this.height, // Y target
                    (this.creatures[this._index].align().angle() + Math.PI) / (Math.PI * 2) // Target angle
                ]); // Learn to move with others
            }

            return requestAnimationFrame(() =>
                this.drawNextFrame());
        } catch(err) {
            return requestAnimationFrame(() =>
                this.drawNextFrame());
        }
    }
}
