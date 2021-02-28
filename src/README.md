## Modules

<dl>
<dt><a href="#module_CreatureBody">CreatureBody</a></dt>
<dd></dd>
<dt><a href="#module_CreatureBrain">CreatureBrain</a></dt>
<dd></dd>
<dt><a href="#module_Creature">Creature</a></dt>
<dd></dd>
<dt><a href="#module_DrawCreature">DrawCreature</a></dt>
<dd></dd>
<dt><a href="#module_eval">eval</a></dt>
<dd></dd>
</dl>

## Classes

<dl>
<dt><a href="#Census">Census</a></dt>
<dd><p>Census registry</p>
</dd>
<dt><a href="#Vector">Vector</a></dt>
<dd><p>2D Matrix position</p>
</dd>
<dt><a href="#World">World</a></dt>
<dd><p>2D environment for creatures</p>
</dd>
</dl>

<a name="module_CreatureBody"></a>

## CreatureBody

**Requires**: <code>module:lodash</code>

- [CreatureBody](#module_CreatureBody)
  - [~CreatureBody](#module_CreatureBody..CreatureBody)
    - [.initializeSpecies()](#module_CreatureBody..CreatureBody.initializeSpecies)
    - [.initializeColor()](#module_CreatureBody..CreatureBody.initializeColor)
    - [.grow()](#module_CreatureBody..CreatureBody.grow)
    - [.age()](#module_CreatureBody..CreatureBody.age)
    - [.adjustSpeed()](#module_CreatureBody..CreatureBody.adjustSpeed)
    - [.boundaries()](#module_CreatureBody..CreatureBody.boundaries)
    - [.attemptReproduction(target, distance)](#module_CreatureBody..CreatureBody.attemptReproduction)

<a name="module_CreatureBody..CreatureBody"></a>

### CreatureBody~CreatureBody

Helper methods for creature's body processes

**Kind**: inner class of [<code>CreatureBody</code>](#module_CreatureBody)

- [~CreatureBody](#module_CreatureBody..CreatureBody)
  - [.initializeSpecies()](#module_CreatureBody..CreatureBody.initializeSpecies)
  - [.initializeColor()](#module_CreatureBody..CreatureBody.initializeColor)
  - [.grow()](#module_CreatureBody..CreatureBody.grow)
  - [.age()](#module_CreatureBody..CreatureBody.age)
  - [.adjustSpeed()](#module_CreatureBody..CreatureBody.adjustSpeed)
  - [.boundaries()](#module_CreatureBody..CreatureBody.boundaries)
  - [.attemptReproduction(target, distance)](#module_CreatureBody..CreatureBody.attemptReproduction)

<a name="module_CreatureBody..CreatureBody.initializeSpecies"></a>

#### CreatureBody.initializeSpecies()

Initializes creature's species

**Kind**: static method of [<code>CreatureBody</code>](#module_CreatureBody..CreatureBody)  
<a name="module_CreatureBody..CreatureBody.initializeColor"></a>

#### CreatureBody.initializeColor()

Initializes creature's color parameters

**Kind**: static method of [<code>CreatureBody</code>](#module_CreatureBody..CreatureBody)  
<a name="module_CreatureBody..CreatureBody.grow"></a>

#### CreatureBody.grow()

Add growth depending on metabolism

**Kind**: static method of [<code>CreatureBody</code>](#module_CreatureBody..CreatureBody)  
<a name="module_CreatureBody..CreatureBody.age"></a>

#### CreatureBody.age()

Aging translates into the creature's max speed reduction
or death (deletion) when none speed is left

**Kind**: static method of [<code>CreatureBody</code>](#module_CreatureBody..CreatureBody)  
<a name="module_CreatureBody..CreatureBody.adjustSpeed"></a>

#### CreatureBody.adjustSpeed()

Adjust velocity to stay close to maxSpeed

**Kind**: static method of [<code>CreatureBody</code>](#module_CreatureBody..CreatureBody)  
<a name="module_CreatureBody..CreatureBody.boundaries"></a>

#### CreatureBody.boundaries()

Prevents creatures from going beyond the edges

**Kind**: static method of [<code>CreatureBody</code>](#module_CreatureBody..CreatureBody)  
<a name="module_CreatureBody..CreatureBody.attemptReproduction"></a>

#### CreatureBody.attemptReproduction(target, distance)

Attempt to reproduce creature

**Kind**: static method of [<code>CreatureBody</code>](#module_CreatureBody..CreatureBody)

| Param    | Type                |
| -------- | ------------------- |
| target   | <code>Object</code> |
| distance | <code>number</code> |

<a name="module_CreatureBrain"></a>

## CreatureBrain

**Requires**: <code>module:synaptic</code>  
**See**: [https://github.com/cazala/synaptic](https://github.com/cazala/synaptic) based on work by @cazala 's Synaptic.

- [CreatureBrain](#module_CreatureBrain)
  - [~CreatureBrain](#module_CreatureBrain..CreatureBrain)
    - [new CreatureBrain()](#new_module_CreatureBrain..CreatureBrain_new)
    - [.think()](#module_CreatureBrain..CreatureBrain+think)
    - [.learn()](#module_CreatureBrain..CreatureBrain+learn)

<a name="module_CreatureBrain..CreatureBrain"></a>

### CreatureBrain~CreatureBrain

Creature's mind

**Kind**: inner class of [<code>CreatureBrain</code>](#module_CreatureBrain)  
**See**

- [https://github.com/cazala/synaptic/wiki/Architect](https://github.com/cazala/synaptic/wiki/Architect)
- [https://github.com/cazala/synaptic/wiki/Networks](https://github.com/cazala/synaptic/wiki/Networks)

* [~CreatureBrain](#module_CreatureBrain..CreatureBrain)
  - [new CreatureBrain()](#new_module_CreatureBrain..CreatureBrain_new)
  - [.think()](#module_CreatureBrain..CreatureBrain+think)
  - [.learn()](#module_CreatureBrain..CreatureBrain+learn)

<a name="new_module_CreatureBrain..CreatureBrain_new"></a>

#### new CreatureBrain()

Creates a new neural network

<a name="module_CreatureBrain..CreatureBrain+think"></a>

#### creatureBrain.think()

Think of where to move from current location

**Kind**: instance method of [<code>CreatureBrain</code>](#module_CreatureBrain..CreatureBrain)  
<a name="module_CreatureBrain..CreatureBrain+learn"></a>

#### creatureBrain.learn()

Learn how to move

**Kind**: instance method of [<code>CreatureBrain</code>](#module_CreatureBrain..CreatureBrain)  
<a name="module_Creature"></a>

## Creature

**Requires**: <code>module:lodash</code>, <code>module:World</code>, <code>module:Vector</code>, [<code>DrawCreature</code>](#module_DrawCreature), [<code>CreatureBrain</code>](#module_CreatureBrain), [<code>CreatureBody</code>](#module_CreatureBody)

- [Creature](#module_Creature)
  - [~Creature](#module_Creature..Creature)
    - [.moveTo()](#module_Creature..Creature+moveTo)
    - [.applyForce()](#module_Creature..Creature+applyForce)
    - [.draw()](#module_Creature..Creature+draw)
    - [.update()](#module_Creature..Creature+update)
    - [.seek(target)](#module_Creature..Creature+seek) ⇒ [<code>Vector</code>](#Vector)
    - [.separate()](#module_Creature..Creature+separate) ⇒ [<code>Vector</code>](#Vector)
    - [.normalizeSeparation()](#module_Creature..Creature+normalizeSeparation)
    - [.align()](#module_Creature..Creature+align) ⇒ [<code>Vector</code>](#Vector)
    - [.addAlignmentTo()](#module_Creature..Creature+addAlignmentTo)
    - [.cohesion()](#module_Creature..Creature+cohesion) ⇒ [<code>Vector</code>](#Vector)
    - [.applyCohesion()](#module_Creature..Creature+applyCohesion)

<a name="module_Creature..Creature"></a>

### Creature~Creature

Artificial Intelligence based in perceptron neural networks that lives in a 2D world

**Kind**: inner class of [<code>Creature</code>](#module_Creature)

- [~Creature](#module_Creature..Creature)
  - [.moveTo()](#module_Creature..Creature+moveTo)
  - [.applyForce()](#module_Creature..Creature+applyForce)
  - [.draw()](#module_Creature..Creature+draw)
  - [.update()](#module_Creature..Creature+update)
  - [.seek(target)](#module_Creature..Creature+seek) ⇒ [<code>Vector</code>](#Vector)
  - [.separate()](#module_Creature..Creature+separate) ⇒ [<code>Vector</code>](#Vector)
  - [.normalizeSeparation()](#module_Creature..Creature+normalizeSeparation)
  - [.align()](#module_Creature..Creature+align) ⇒ [<code>Vector</code>](#Vector)
  - [.addAlignmentTo()](#module_Creature..Creature+addAlignmentTo)
  - [.cohesion()](#module_Creature..Creature+cohesion) ⇒ [<code>Vector</code>](#Vector)
  - [.applyCohesion()](#module_Creature..Creature+applyCohesion)

<a name="module_Creature..Creature+moveTo"></a>

#### creature.moveTo()

Applies creature's movement

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)  
<a name="module_Creature..Creature+applyForce"></a>

#### creature.applyForce()

Applies a vector force to the creature's momentum=

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)  
<a name="module_Creature..Creature+draw"></a>

#### creature.draw()

Draws current's creature position and direction

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)  
<a name="module_Creature..Creature+update"></a>

#### creature.update()

Update's creature

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)  
<a name="module_Creature..Creature+seek"></a>

#### creature.seek(target) ⇒ [<code>Vector</code>](#Vector)

Returns the force needed to move towards specific creature

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)

| Param  | Type                           |
| ------ | ------------------------------ |
| target | [<code>Vector</code>](#Vector) |

<a name="module_Creature..Creature+separate"></a>

#### creature.separate() ⇒ [<code>Vector</code>](#Vector)

Makes creature attempt to stay within reasonable distance
Triggers reproduction when creatures touch, depending on world reproduction chance

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)  
<a name="module_Creature..Creature+normalizeSeparation"></a>

#### creature.normalizeSeparation()

Normalizes creature separation if they are within range

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)  
<a name="module_Creature..Creature+align"></a>

#### creature.align() ⇒ [<code>Vector</code>](#Vector)

Align to other creatures

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)  
<a name="module_Creature..Creature+addAlignmentTo"></a>

#### creature.addAlignmentTo()

Adds force required to align to another creature

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)  
<a name="module_Creature..Creature+cohesion"></a>

#### creature.cohesion() ⇒ [<code>Vector</code>](#Vector)

Makes creature group with others

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)  
<a name="module_Creature..Creature+applyCohesion"></a>

#### creature.applyCohesion()

Makes creature attempt to stay close to same species

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)  
<a name="module_DrawCreature"></a>

## DrawCreature

- [DrawCreature](#module_DrawCreature)
  - [~DrawCreature](#module_DrawCreature..DrawCreature)
    - [.shape()](#module_DrawCreature..DrawCreature.shape)

<a name="module_DrawCreature..DrawCreature"></a>

### DrawCreature~DrawCreature

Methods to draw creature

**Kind**: inner class of [<code>DrawCreature</code>](#module_DrawCreature)  
<a name="module_DrawCreature..DrawCreature.shape"></a>

#### DrawCreature.shape()

Creates creature's shape

**Kind**: static method of [<code>DrawCreature</code>](#module_DrawCreature..DrawCreature)  
<a name="module_eval"></a>

## eval

**See**: [https://github.com/cazala/synaptic](https://github.com/cazala/synaptic) based on work by @cazala 's Synaptic.  
<a name="module_eval..isNode"></a>

### eval~isNode : <code>object</code>

**Kind**: inner namespace of [<code>eval</code>](#module_eval)  
<a name="Census"></a>

## Census

Census registry

**Kind**: global class  
**Requires**: <code>module:lodash</code>, <code>module:jquery</code>

- [Census](#Census)
  - [.red](#Census+red)
  - [.green](#Census+green)
  - [.blue](#Census+blue)
  - [.births](#Census+births)
  - [.deaths](#Census+deaths)
  - [.log(world)](#Census+log)
  - [.update(world)](#Census+update)
  - [.reset()](#Census+reset)
  - [.minority()](#Census+minority)
  - [.mayority()](#Census+mayority)
  - [.list()](#Census+list)

<a name="Census+red"></a>

### census.red

Red population

**Kind**: instance property of [<code>Census</code>](#Census)  
<a name="Census+green"></a>

### census.green

Green population

**Kind**: instance property of [<code>Census</code>](#Census)  
<a name="Census+blue"></a>

### census.blue

Blue population

**Kind**: instance property of [<code>Census</code>](#Census)  
<a name="Census+births"></a>

### census.births

Total births

**Kind**: instance property of [<code>Census</code>](#Census)  
<a name="Census+deaths"></a>

### census.deaths

Total deaths

**Kind**: instance property of [<code>Census</code>](#Census)  
<a name="Census+log"></a>

### census.log(world)

Update census results on log

**Kind**: instance method of [<code>Census</code>](#Census)

| Param | Type                         | Description          |
| ----- | ---------------------------- | -------------------- |
| world | [<code>World</code>](#World) | Simulation reference |

<a name="Census+update"></a>

### census.update(world)

Calculate population by species

**Kind**: instance method of [<code>Census</code>](#Census)

| Param | Type                         | Description          |
| ----- | ---------------------------- | -------------------- |
| world | [<code>World</code>](#World) | Simulation reference |

<a name="Census+reset"></a>

### census.reset()

Reset counts results

**Kind**: instance method of [<code>Census</code>](#Census)  
<a name="Census+minority"></a>

### census.minority()

Least populated species

**Kind**: instance method of [<code>Census</code>](#Census)  
<a name="Census+mayority"></a>

### census.mayority()

Most populated species

**Kind**: instance method of [<code>Census</code>](#Census)  
<a name="Census+list"></a>

### census.list()

Census list

**Kind**: instance method of [<code>Census</code>](#Census)  
<a name="Vector"></a>

## Vector

2D Matrix position

**Kind**: global class  
**Requires**: <code>module:lodash</code>

- [Vector](#Vector)
  - [new Vector([x], [y])](#new_Vector_new)
  - [.x](#Vector+x)
  - [.y](#Vector+y)
  - [.set([x], [y])](#Vector+set) ⇒ [<code>Vector</code>](#Vector)
  - [.random()](#Vector+random) ⇒ [<code>Vector</code>](#Vector)
  - [.add()](#Vector+add) ⇒ [<code>Vector</code>](#Vector)
  - [.sub()](#Vector+sub) ⇒ [<code>Vector</code>](#Vector)
  - [.mul()](#Vector+mul) ⇒ [<code>Vector</code>](#Vector)
  - [.div()](#Vector+div) ⇒ [<code>Vector</code>](#Vector)
  - [.mag()](#Vector+mag) ⇒ <code>number</code>
  - [.normalize()](#Vector+normalize) ⇒ [<code>Vector</code>](#Vector)
  - [.angle()](#Vector+angle) ⇒ <code>number</code>
  - [.setMag()](#Vector+setMag) ⇒ [<code>Vector</code>](#Vector)
  - [.setAngle()](#Vector+setAngle) ⇒ [<code>Vector</code>](#Vector)
  - [.rotate()](#Vector+rotate) ⇒ [<code>Vector</code>](#Vector)
  - [.limit()](#Vector+limit) ⇒ [<code>Vector</code>](#Vector)
  - [.angleBetween()](#Vector+angleBetween) ⇒ <code>number</code>
  - [.dot()](#Vector+dot) ⇒ <code>number</code>
  - [.lerp()](#Vector+lerp) ⇒ [<code>Vector</code>](#Vector)
  - [.dist()](#Vector+dist) ⇒ <code>number</code>
  - [.copy()](#Vector+copy) ⇒ [<code>Vector</code>](#Vector)

<a name="new_Vector_new"></a>

### new Vector([x], [y])

| Param | Type                | Default        | Description      |
| ----- | ------------------- | -------------- | ---------------- |
| [x]   | <code>number</code> | <code>0</code> | X position value |
| [y]   | <code>number</code> | <code>0</code> | Y position value |

**Example**

```js
const x = 1;
const y = 1;
const vector = new Vector(x, y);
```

<a name="Vector+x"></a>

### vector.x

X position value

**Kind**: instance property of [<code>Vector</code>](#Vector)  
<a name="Vector+y"></a>

### vector.y

Y position value

**Kind**: instance property of [<code>Vector</code>](#Vector)  
<a name="Vector+set"></a>

### vector.set([x], [y]) ⇒ [<code>Vector</code>](#Vector)

Set position

**Kind**: instance method of [<code>Vector</code>](#Vector)

| Param | Type                | Default        | Description      |
| ----- | ------------------- | -------------- | ---------------- |
| [x]   | <code>number</code> | <code>0</code> | X position value |
| [y]   | <code>number</code> | <code>0</code> | Y position value |

<a name="Vector+random"></a>

### vector.random() ⇒ [<code>Vector</code>](#Vector)

Set random angle

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+add"></a>

### vector.add() ⇒ [<code>Vector</code>](#Vector)

Add to vector

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+sub"></a>

### vector.sub() ⇒ [<code>Vector</code>](#Vector)

Substract from vector

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+mul"></a>

### vector.mul() ⇒ [<code>Vector</code>](#Vector)

Multiply vector

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+div"></a>

### vector.div() ⇒ [<code>Vector</code>](#Vector)

Divide vector

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+mag"></a>

### vector.mag() ⇒ <code>number</code>

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+normalize"></a>

### vector.normalize() ⇒ [<code>Vector</code>](#Vector)

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+angle"></a>

### vector.angle() ⇒ <code>number</code>

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+setMag"></a>

### vector.setMag() ⇒ [<code>Vector</code>](#Vector)

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+setAngle"></a>

### vector.setAngle() ⇒ [<code>Vector</code>](#Vector)

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+rotate"></a>

### vector.rotate() ⇒ [<code>Vector</code>](#Vector)

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+limit"></a>

### vector.limit() ⇒ [<code>Vector</code>](#Vector)

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+angleBetween"></a>

### vector.angleBetween() ⇒ <code>number</code>

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+dot"></a>

### vector.dot() ⇒ <code>number</code>

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+lerp"></a>

### vector.lerp() ⇒ [<code>Vector</code>](#Vector)

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+dist"></a>

### vector.dist() ⇒ <code>number</code>

Calculates distance between current vector and the target

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+copy"></a>

### vector.copy() ⇒ [<code>Vector</code>](#Vector)

Builds a new vector with the same caractestics as this

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="World"></a>

## World

2D environment for creatures

**Kind**: global class  
**Requires**: <code>module:lodash</code>, [<code>Creature</code>](#module_Creature), <code>module:Census</code>

- [World](#World)
  - [new World([topPopulation], [id], [species])](#new_World_new)
  - [.cycles](#World+cycles)
  - [.learningRate](#World+learningRate)
  - [.id](#World+id)
  - [.creatures](#World+creatures)
  - [.species](#World+species)
  - [.topPopulation](#World+topPopulation)
  - [.census](#World+census)
  - [.initialPopulation](#World+initialPopulation)
  - [.mousePosition](#World+mousePosition)
  - [.launch()](#World+launch)
  - [.initializeCanvas()](#World+initializeCanvas)
  - [.getMousePosition()](#World+getMousePosition)
  - [.initializePopulation()](#World+initializePopulation)
  - [.startListeners()](#World+startListeners)
  - [.increasePopulation(x, y)](#World+increasePopulation)
  - [.decreasePopulation()](#World+decreasePopulation)
  - [.spawnCreature(x, y, species, mass)](#World+spawnCreature)
  - [.removeCreature(creature)](#World+removeCreature)
  - [.drawNextFrame()](#World+drawNextFrame)
  - [.adjustPopulationGrowth()](#World+adjustPopulationGrowth)
  - [.updateCreatures()](#World+updateCreatures)

<a name="new_World_new"></a>

### new World([topPopulation], [id], [species])

| Param           | Type                              | Default                                                             | Description                |
| --------------- | --------------------------------- | ------------------------------------------------------------------- | -------------------------- |
| [topPopulation] | <code>number</code>               | <code>100</code>                                                    | World's maximum population |
| [id]            | <code>string</code>               | <code>&quot;&#x27;world&#x27;&quot;</code>                          | Canvas id                  |
| [species]       | <code>Array.&lt;string&gt;</code> | <code>[&#x27;red&#x27;, &#x27;green&#x27;, &#x27;blue&#x27;]</code> | Available species          |

**Example**

```js
const world = new World();
const customWorld = new World(200, 'customWorld');
```

<a name="World+cycles"></a>

### world.cycles

Cycles counter

**Kind**: instance property of [<code>World</code>](#World)  
<a name="World+learningRate"></a>

### world.learningRate

Learning rate for all creatures in this world

**Kind**: instance property of [<code>World</code>](#World)  
<a name="World+id"></a>

### world.id

Canvas id

**Kind**: instance property of [<code>World</code>](#World)  
<a name="World+creatures"></a>

### world.creatures

Creatures array

**Kind**: instance property of [<code>World</code>](#World)  
<a name="World+species"></a>

### world.species

Available species

**Kind**: instance property of [<code>World</code>](#World)  
<a name="World+topPopulation"></a>

### world.topPopulation

World's maximum population

**Kind**: instance property of [<code>World</code>](#World)  
<a name="World+census"></a>

### world.census

Census instance

**Kind**: instance property of [<code>World</code>](#World)  
<a name="World+initialPopulation"></a>

### world.initialPopulation

Initial population

**Kind**: instance property of [<code>World</code>](#World)  
<a name="World+mousePosition"></a>

### world.mousePosition

Mouse position

**Kind**: instance property of [<code>World</code>](#World)  
<a name="World+launch"></a>

### world.launch()

Start simulation

**Kind**: instance method of [<code>World</code>](#World)  
<a name="World+initializeCanvas"></a>

### world.initializeCanvas()

Canvas Setup

**Kind**: instance method of [<code>World</code>](#World)  
<a name="World+getMousePosition"></a>

### world.getMousePosition()

Update current mouse position

**Kind**: instance method of [<code>World</code>](#World)  
<a name="World+initializePopulation"></a>

### world.initializePopulation()

Spawn first creatures

**Kind**: instance method of [<code>World</code>](#World)  
<a name="World+startListeners"></a>

### world.startListeners()

Events listeners

**Kind**: instance method of [<code>World</code>](#World)  
<a name="World+increasePopulation"></a>

### world.increasePopulation(x, y)

Increases the least populated species

**Kind**: instance method of [<code>World</code>](#World)

| Param | Type                | Description                             |
| ----- | ------------------- | --------------------------------------- |
| x     | <code>number</code> | New creature's coordinate on the X axis |
| y     | <code>number</code> | New creature's coordinate on the Y axis |

<a name="World+decreasePopulation"></a>

### world.decreasePopulation()

Removes oldest (slowest) creature

**Kind**: instance method of [<code>World</code>](#World)  
<a name="World+spawnCreature"></a>

### world.spawnCreature(x, y, species, mass)

Adds a new crature to the simulation

**Kind**: instance method of [<code>World</code>](#World)

| Param   | Type                                                                                            | Description                             |
| ------- | ----------------------------------------------------------------------------------------------- | --------------------------------------- |
| x       | <code>number</code>                                                                             | New creature's coordinate on the X axis |
| y       | <code>number</code>                                                                             | New creature's coordinate on the Y axis |
| species | <code>&#x27;red&#x27;</code> \| <code>&#x27;green&#x27;</code> \| <code>&#x27;blue&#x27;</code> |                                         |
| mass    | <code>number</code>                                                                             | New creature's initial mass             |

<a name="World+removeCreature"></a>

### world.removeCreature(creature)

Removes a creature from the simulation

**Kind**: instance method of [<code>World</code>](#World)

| Param    | Type                  | Description      |
| -------- | --------------------- | ---------------- |
| creature | <code>Creature</code> | Target to remove |

<a name="World+drawNextFrame"></a>

### world.drawNextFrame()

Adjust population and draws creatures next move

**Kind**: instance method of [<code>World</code>](#World)  
<a name="World+adjustPopulationGrowth"></a>

### world.adjustPopulationGrowth()

Adjust world population growth to prevent overpopulation or full extintion

**Kind**: instance method of [<code>World</code>](#World)  
<a name="World+updateCreatures"></a>

### world.updateCreatures()

Draws creatures next move

**Kind**: instance method of [<code>World</code>](#World)
