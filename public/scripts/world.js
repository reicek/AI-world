let keepPaths = false; // Toggle keep paths
let fastSimulation = false; // Toggle fast emulation

(function(){
    const TOP_POPULATION = 200;
    const INITIAL_POPULATION = 35;
    let births = 0;
    let deaths = 0;
    let cycles = 0;

    startWorld(INITIAL_POPULATION);

    /**
     * @method startWorld
     * @param  population
     */
    function startWorld(initialCreatures) {
        const canvas = $('#world')[0];
        const ctx = canvas.getContext('2d');

        ctx.canvas.height = $('#universe').height();
        ctx.canvas.width = $('#universe').width();

        const world = {
            creatures: [],
            width: canvas.width,
            height: canvas.height,
            context: ctx,
        };

        world.spawnCreature = (x, y, species, mass) => {
            world.creatures.push(new Creature(world, x, y, species, mass));
            births ++;
            logCensus(world.creatures);
        };

        world.removeCreature = creature => {
            const index = world.creatures.indexOf(creature);
            world.creatures.splice(index, 1);
            deaths ++;
            logCensus(world.creatures);
            console.log(`A ${creature.species} died.`)
        };

        // Populate
        while (initialCreatures--)
            world.spawnCreature(
                _.random(0, world.width),
                _.random(0, world.height)
            );

        births = 0;

        const targetX = creature =>
            creature.cohesion(world.creatures).x / world.width;

        const targetY = creature =>
            creature.cohesion(world.creatures).y / world.height;

        const targetAngle = creature =>
            (creature.align(world.creatures).angle() + Math.PI) / (Math.PI * 2);

        let sinceLastSpawn = 0;

        const draw = () => {
            const creatures = world.creatures;

            if (!keepPaths) {
                ctx.fillStyle = '#212121';
                ctx.fillRect(0, 0, world.width, world.height);
            }

            creatures.forEach(creature => {
                const input = [
                    creature.location.x,
                    creature.location.y,
                    creature.velocity.x,
                    creature.velocity.y
                ];

                creature.moveTo(creature.network.activate(input)); // Think of where to move (align to others)
                creature.draw(); // Moves

                const target = [
                    targetX(creature),
                    targetY(creature),
                    targetAngle(creature)
                ];
                const LEARNING_RATE = 0.15;
                creature.network.propagate(LEARNING_RATE, target); // Learn to move with others
            });

            if (world.creatures.length <= TOP_POPULATION && world.creatures.length > 0){
                cycles ++;

            if (fastSimulation)
                window.setTimeout(draw); // Redraw ASAP
            else
                window.requestAnimationFrame(draw); // Redraw on next frame
            }

            switch (true) { // Population control
                case world.creatures.length > (INITIAL_POPULATION * 1.3): // If overpopulation in progress
                    reproductionChance *=  0.9999; // Reduce reproduction chance
                    break;

                case world.creatures.length < INITIAL_POPULATION * 1.1: // If extintion in progress
                    reproductionChance *=  1.0001// Increase reproduction chance
                    break;

                default:
                    reproductionChance = INITIAL_REPRODUCTION_CHANCE;
                    return;
            }
        };

        $(window).resize(() => { // On screen change, resize world
            canvas.getContext('2d');
            ctx.canvas.height = $('#universe').height();
            ctx.canvas.width = $('#universe').width();

            world.width = canvas.width;
            world.height = canvas.height;
            world.context = ctx;
        });

        logCensus(world.creatures);
        draw(); // Start simulation
    }

    /**
     * Clears the log and shows the census results
     * @method logCensus
     * @param  creatures
     */
    function logCensus(creatures) {
        const census = {
            red: 0,
            green: 0,
            blue: 0
        };

        creatures.forEach(creature => // Do census
            census[creature.species] ++);

        console.clear();
        console.log('%c==================================', 'color: #777');
        console.log(`%c Red   : ${census.red}`, 'color: rgb(255, 100, 100)');
        console.log(`%c Green  : ${census.green}`, 'color: rgb(100, 255, 100)');
        console.log(`%c Blue : ${census.blue}`, ' color: rgb(100, 100, 255)');
        console.log(` Population: ${creatures.length}`);
        console.log(` Reproduction chance ${reproductionChance}`);
        if (births > 0)
            console.log(` Births: ${births}`);
        if (deaths > 0)
            console.log(` Deaths ${deaths}`);
        if (creatures.length >= TOP_POPULATION)
            console.log(`%c Overpopulation after ${cycles} cycles!`, 'color: rgb(255, 150, 150)');
        if (creatures.length === 0)
            console.log(`%c Extintion after ${cycles} cycles!`, 'color: rgb(255, 150, 150)');
        console.log('%c==================================', 'color: #777');
    }
})()
