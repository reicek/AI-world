'use strict';
/**
 * @module World
 * @see {@link https://github.com/cazala/synaptic} based on work by @cazala 's Synaptic.
 */
/**
 * @class World
 */
class World {
    constructor(
        initialPopulation = 10,
        topPopulation = 200,
        reproductionChance = 2,
        id = 'world',
        pathOpacity = 0.1
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
     * @method launch
     * @return {draw}
     */
    launch() {
        this._i = this.initialPopulation;
        while (this._i --) {
            this.spawnCreature(
                _.random(0, this.width),
                _.random(0, this.height)
            );
        }

        $(`button.add, #${this.id}`).click(e => // Add new creature to the less populated species on left click
            this.increasePopulation(e.clientX, e.clientY));

        $(`button.remove`).click(() =>
            this.decreasePopulation());

        $(`#${this.id}`).contextmenu(() => { // Remove oldest creature on right click
            this.decreasePopulation();

            return false; // Dont show context menu on right click
        });

        $(window).resize(() => { // Update canvas size on screen change
            this.ctx = this.canvas.getContext('2d', { alpha: false });
            this.ctx.canvas.height = $(`#${this.id}`).height();
            this.ctx.canvas.width = $(`#${this.id}`).width();
            this.width = this.canvas.width;
            this.height = this.canvas.height;
        });

        return this.draw();
    }

    /**
     * Increases the least populated species if none is specified
     * @method increasePopulation
     * @param [x]
     * @param [y]
     * @param {string} [species]
     * @return {logCensus}
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
     * @method increasePopulation
     * @return {logCensus}
     */
    decreasePopulation() {
        this.removeCreature(_.minBy(this.creatures, 'maxspeed'));

        return this.initialPopulation--; // Permanently decrease the ideal population
    }

    /**
     * @method spawnCreature
     * @param [x]
     * @param [y]
     * @param {string} [species]
     * @param {number}[mass]
     * @return {logCensus}
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
     * @return {logCensus}
     */
    removeCreature(creature) {
        this._index = this.creatures.indexOf(creature);
        this.creatures.splice(this._index, 1);
        this.deaths ++;

        return this.logCensus('death', creature.species);
    }

    /**
     * Clears the log and shows the census results
     * @method logCensus
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
    updateCensus() {
        this.census = {
            red: 0,
            green: 0,
            blue: 0
        };

        for (this._index = this.creatures.length - 1; this._index >= 0; this._index--)
            this.census[this.creatures[this._index].species] ++;

        return this.census;
    }

    /**
     * @method draw
     */
    draw() {
        this.cycles ++;

        this.ctx.fillStyle = `rgba(0, 0, 0, ${this.pathOpacity})`;
        this.ctx.fillRect(0, 0, this.width, this.height);

        switch (true) { // Population control
            case this.creatures.length > (this.initialPopulation * 1.3): // If overpopulation in progress
                this.reproductionChance *=  0.9999; // Reduce reproduction chance
                break;

            case this.creatures.length < this.initialPopulation * 1.1: // If extintion in progress
                this.reproductionChance *=  1.0001; // Increase reproduction chance
                break;

            default:
                this.reproductionChance = this.initialReproductionChange;
                break;
        }

        try {
            for (this._index = this.creatures.length - 1; this._index >= 0; this._index--) {
                this._input = [
                    this.creatures[this._index].location.x,
                    this.creatures[this._index].location.y,
                    this.creatures[this._index].velocity.x,
                    this.creatures[this._index].velocity.y
                ];

                this.creatures[this._index].moveTo(this.creatures[this._index]
                    .network.activate(this._input)); // Think of where to move (align to others)

                this.creatures[this._index].draw(); // Move

                this._creatureCohesion = this.creatures[this._index].cohesion();

                this.target = [
                    this._creatureCohesion.x / this.width, // X target
                    this._creatureCohesion.y / this.height, // Y target
                    (this.creatures[this._index].align().angle() + Math.PI) / (Math.PI * 2) // Target angle
                ];

                this.creatures[this._index].network.propagate(this.learningRate, this.target); // Learn to move with others
            }
        } catch(error) {
            return requestAnimationFrame(() =>
                this.draw());
        }

        return requestAnimationFrame(() =>
            this.draw());
    }
}
