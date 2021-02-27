## Modules

<dl>
<dt><a href="#module_Census">Census</a></dt>
<dd></dd>
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
<dt><a href="#module_Vector">Vector</a></dt>
<dd></dd>
<dt><a href="#module_World">World</a></dt>
<dd></dd>
</dl>

<a name="module_Census"></a>

## Census
**Requires**: <code>module:lodash</code>  

* [Census](#module_Census)
    * [~Census](#module_Census..Census) : <code>Object</code>
        * [.log()](#module_Census..Census+log)
        * [.update()](#module_Census..Census+update)
        * [.reset()](#module_Census..Census+reset)
        * [.minority()](#module_Census..Census+minority)
        * [.mayority()](#module_Census..Census+mayority)
        * [.list()](#module_Census..Census+list)

<a name="module_Census..Census"></a>

### Census~Census : <code>Object</code>
Population by species

**Kind**: inner typedef of [<code>Census</code>](#module_Census)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| red | <code>number</code> | Red population |
| green | <code>number</code> | Green population |
| blue | <code>number</code> | Blue population |


* [~Census](#module_Census..Census) : <code>Object</code>
    * [.log()](#module_Census..Census+log)
    * [.update()](#module_Census..Census+update)
    * [.reset()](#module_Census..Census+reset)
    * [.minority()](#module_Census..Census+minority)
    * [.mayority()](#module_Census..Census+mayority)
    * [.list()](#module_Census..Census+list)

<a name="module_Census..Census+log"></a>

#### census.log()
Clears the log and shows the census results

**Kind**: instance method of [<code>Census</code>](#module_Census..Census)  
<a name="module_Census..Census+update"></a>

#### census.update()
Calculates population by species

**Kind**: instance method of [<code>Census</code>](#module_Census..Census)  
<a name="module_Census..Census+reset"></a>

#### census.reset()
Return counts results to inital state

**Kind**: instance method of [<code>Census</code>](#module_Census..Census)  
<a name="module_Census..Census+minority"></a>

#### census.minority()
Returns the least populated species

**Kind**: instance method of [<code>Census</code>](#module_Census..Census)  
<a name="module_Census..Census+mayority"></a>

#### census.mayority()
Returns the most populated species

**Kind**: instance method of [<code>Census</code>](#module_Census..Census)  
<a name="module_Census..Census+list"></a>

#### census.list()
Census list

**Kind**: instance method of [<code>Census</code>](#module_Census..Census)  
<a name="module_CreatureBody"></a>

## CreatureBody
**Requires**: <code>module:lodash</code>  

* [CreatureBody](#module_CreatureBody)
    * [~CreatureBody](#module_CreatureBody..CreatureBody)
        * [.initializeSpecies()](#module_CreatureBody..CreatureBody.initializeSpecies)
        * [.initializeColor()](#module_CreatureBody..CreatureBody.initializeColor)
        * [.grow()](#module_CreatureBody..CreatureBody.grow)
        * [.age()](#module_CreatureBody..CreatureBody.age)
        * [.adjustSpeed()](#module_CreatureBody..CreatureBody.adjustSpeed)
        * [.boundaries()](#module_CreatureBody..CreatureBody.boundaries)
        * [.attemptReproduction(target, distance)](#module_CreatureBody..CreatureBody.attemptReproduction)

<a name="module_CreatureBody..CreatureBody"></a>

### CreatureBody~CreatureBody
Helper methods for creature's body processes

**Kind**: inner class of [<code>CreatureBody</code>](#module_CreatureBody)  

* [~CreatureBody](#module_CreatureBody..CreatureBody)
    * [.initializeSpecies()](#module_CreatureBody..CreatureBody.initializeSpecies)
    * [.initializeColor()](#module_CreatureBody..CreatureBody.initializeColor)
    * [.grow()](#module_CreatureBody..CreatureBody.grow)
    * [.age()](#module_CreatureBody..CreatureBody.age)
    * [.adjustSpeed()](#module_CreatureBody..CreatureBody.adjustSpeed)
    * [.boundaries()](#module_CreatureBody..CreatureBody.boundaries)
    * [.attemptReproduction(target, distance)](#module_CreatureBody..CreatureBody.attemptReproduction)

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
Aging translates into the creature's max speed reductionor death (deletion) when none speed is left

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

| Param | Type |
| --- | --- |
| target | <code>Object</code> | 
| distance | <code>number</code> | 

<a name="module_CreatureBrain"></a>

## CreatureBrain
**Requires**: <code>module:synaptic</code>  
**See**: [https://github.com/cazala/synaptic](https://github.com/cazala/synaptic) based on work by @cazala 's Synaptic.  

* [CreatureBrain](#module_CreatureBrain)
    * [~CreatureBrain](#module_CreatureBrain..CreatureBrain)
        * [new CreatureBrain()](#new_module_CreatureBrain..CreatureBrain_new)
        * [.think()](#module_CreatureBrain..CreatureBrain+think)
        * [.learn()](#module_CreatureBrain..CreatureBrain+learn)

<a name="module_CreatureBrain..CreatureBrain"></a>

### CreatureBrain~CreatureBrain
Creature's mind

**Kind**: inner class of [<code>CreatureBrain</code>](#module_CreatureBrain)  
**See**

- [https://github.com/cazala/synaptic/wiki/Architect](https://github.com/cazala/synaptic/wiki/Architect)
- [https://github.com/cazala/synaptic/wiki/Networks](https://github.com/cazala/synaptic/wiki/Networks)


* [~CreatureBrain](#module_CreatureBrain..CreatureBrain)
    * [new CreatureBrain()](#new_module_CreatureBrain..CreatureBrain_new)
    * [.think()](#module_CreatureBrain..CreatureBrain+think)
    * [.learn()](#module_CreatureBrain..CreatureBrain+learn)

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
**Requires**: <code>module:lodash</code>, [<code>World</code>](#module_World), [<code>Vector</code>](#module_Vector), [<code>DrawCreature</code>](#module_DrawCreature), [<code>CreatureBrain</code>](#module_CreatureBrain), [<code>CreatureBody</code>](#module_CreatureBody)  

* [Creature](#module_Creature)
    * [~Creature](#module_Creature..Creature)
        * [.moveTo()](#module_Creature..Creature+moveTo)
        * [.applyForce()](#module_Creature..Creature+applyForce)
        * [.draw()](#module_Creature..Creature+draw)
        * [.update()](#module_Creature..Creature+update)
        * [.seek(target)](#module_Creature..Creature+seek) ⇒ <code>Vector</code>
        * [.separate()](#module_Creature..Creature+separate) ⇒ <code>Vector</code>
        * [.normalizeSeparation()](#module_Creature..Creature+normalizeSeparation)
        * [.align()](#module_Creature..Creature+align) ⇒ <code>Vector</code>
        * [.addAlignmentTo()](#module_Creature..Creature+addAlignmentTo)
        * [.cohesion()](#module_Creature..Creature+cohesion) ⇒ <code>Vector</code>
        * [.applyCohesion()](#module_Creature..Creature+applyCohesion)

<a name="module_Creature..Creature"></a>

### Creature~Creature
Artificial Intelligence based in perceptron neural networks that lives in a 2D world

**Kind**: inner class of [<code>Creature</code>](#module_Creature)  

* [~Creature](#module_Creature..Creature)
    * [.moveTo()](#module_Creature..Creature+moveTo)
    * [.applyForce()](#module_Creature..Creature+applyForce)
    * [.draw()](#module_Creature..Creature+draw)
    * [.update()](#module_Creature..Creature+update)
    * [.seek(target)](#module_Creature..Creature+seek) ⇒ <code>Vector</code>
    * [.separate()](#module_Creature..Creature+separate) ⇒ <code>Vector</code>
    * [.normalizeSeparation()](#module_Creature..Creature+normalizeSeparation)
    * [.align()](#module_Creature..Creature+align) ⇒ <code>Vector</code>
    * [.addAlignmentTo()](#module_Creature..Creature+addAlignmentTo)
    * [.cohesion()](#module_Creature..Creature+cohesion) ⇒ <code>Vector</code>
    * [.applyCohesion()](#module_Creature..Creature+applyCohesion)

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

#### creature.seek(target) ⇒ <code>Vector</code>
Returns the force needed to move towards specific creature

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)  

| Param | Type |
| --- | --- |
| target | <code>Vector</code> | 

<a name="module_Creature..Creature+separate"></a>

#### creature.separate() ⇒ <code>Vector</code>
Makes creature attempt to stay within reasonable distanceTriggers reproduction when creatures touch, depending on world reproduction chance

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)  
<a name="module_Creature..Creature+normalizeSeparation"></a>

#### creature.normalizeSeparation()
Normalizes creature separation if they are within range

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)  
<a name="module_Creature..Creature+align"></a>

#### creature.align() ⇒ <code>Vector</code>
Align to other creatures

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)  
<a name="module_Creature..Creature+addAlignmentTo"></a>

#### creature.addAlignmentTo()
Adds force required to align to another creature

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)  
<a name="module_Creature..Creature+cohesion"></a>

#### creature.cohesion() ⇒ <code>Vector</code>
Makes creature group with others

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)  
<a name="module_Creature..Creature+applyCohesion"></a>

#### creature.applyCohesion()
Makes creature attempt to stay close to same species

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)  
<a name="module_DrawCreature"></a>

## DrawCreature

* [DrawCreature](#module_DrawCreature)
    * [~DrawCreature](#module_DrawCreature..DrawCreature)
        * [.shape()](#module_DrawCreature..DrawCreature.shape)

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
<a name="module_Vector"></a>

## Vector
**Requires**: <code>module:lodash</code>  
**See**: [https://github.com/cazala/synaptic](https://github.com/cazala/synaptic) based on work by @cazala 's Synaptic.  

* [Vector](#module_Vector)
    * [~Vector](#module_Vector..Vector)
        * [new Vector([x], [y])](#new_module_Vector..Vector_new)
        * [.set([x], [y])](#module_Vector..Vector+set) ⇒ <code>Vector</code>
        * [.random()](#module_Vector..Vector+random) ⇒ <code>Vector</code>
        * [.add()](#module_Vector..Vector+add) ⇒ <code>Vector</code>
        * [.sub()](#module_Vector..Vector+sub) ⇒ <code>Vector</code>
        * [.mul()](#module_Vector..Vector+mul) ⇒ <code>Vector</code>
        * [.div()](#module_Vector..Vector+div) ⇒ <code>Vector</code>
        * [.mag()](#module_Vector..Vector+mag) ⇒ <code>number</code>
        * [.normalize()](#module_Vector..Vector+normalize) ⇒ <code>Vector</code>
        * [.angle()](#module_Vector..Vector+angle) ⇒ <code>number</code>
        * [.setMag()](#module_Vector..Vector+setMag) ⇒ <code>Vector</code>
        * [.setAngle()](#module_Vector..Vector+setAngle) ⇒ <code>Vector</code>
        * [.rotate()](#module_Vector..Vector+rotate) ⇒ <code>Vector</code>
        * [.limit()](#module_Vector..Vector+limit) ⇒ <code>Vector</code>
        * [.angleBetween()](#module_Vector..Vector+angleBetween) ⇒ <code>number</code>
        * [.dot()](#module_Vector..Vector+dot) ⇒ <code>number</code>
        * [.lerp()](#module_Vector..Vector+lerp) ⇒ <code>Vector</code>
        * [.dist()](#module_Vector..Vector+dist) ⇒ <code>number</code>
        * [.copy()](#module_Vector..Vector+copy) ⇒ <code>Vector</code>

<a name="module_Vector..Vector"></a>

### Vector~Vector
2D Matrix position

**Kind**: inner class of [<code>Vector</code>](#module_Vector)  

* [~Vector](#module_Vector..Vector)
    * [new Vector([x], [y])](#new_module_Vector..Vector_new)
    * [.set([x], [y])](#module_Vector..Vector+set) ⇒ <code>Vector</code>
    * [.random()](#module_Vector..Vector+random) ⇒ <code>Vector</code>
    * [.add()](#module_Vector..Vector+add) ⇒ <code>Vector</code>
    * [.sub()](#module_Vector..Vector+sub) ⇒ <code>Vector</code>
    * [.mul()](#module_Vector..Vector+mul) ⇒ <code>Vector</code>
    * [.div()](#module_Vector..Vector+div) ⇒ <code>Vector</code>
    * [.mag()](#module_Vector..Vector+mag) ⇒ <code>number</code>
    * [.normalize()](#module_Vector..Vector+normalize) ⇒ <code>Vector</code>
    * [.angle()](#module_Vector..Vector+angle) ⇒ <code>number</code>
    * [.setMag()](#module_Vector..Vector+setMag) ⇒ <code>Vector</code>
    * [.setAngle()](#module_Vector..Vector+setAngle) ⇒ <code>Vector</code>
    * [.rotate()](#module_Vector..Vector+rotate) ⇒ <code>Vector</code>
    * [.limit()](#module_Vector..Vector+limit) ⇒ <code>Vector</code>
    * [.angleBetween()](#module_Vector..Vector+angleBetween) ⇒ <code>number</code>
    * [.dot()](#module_Vector..Vector+dot) ⇒ <code>number</code>
    * [.lerp()](#module_Vector..Vector+lerp) ⇒ <code>Vector</code>
    * [.dist()](#module_Vector..Vector+dist) ⇒ <code>number</code>
    * [.copy()](#module_Vector..Vector+copy) ⇒ <code>Vector</code>

<a name="new_module_Vector..Vector_new"></a>

#### new Vector([x], [y])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [x] | <code>number</code> | <code>0</code> | X value |
| [y] | <code>number</code> | <code>0</code> | Y value |

**Example**  
```js
const x = 1;    const y = 1;    const vector = new Vector(x, y);
```
<a name="module_Vector..Vector+set"></a>

#### vector.set([x], [y]) ⇒ <code>Vector</code>
**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [x] | <code>number</code> | <code>0</code> | X value |
| [y] | <code>number</code> | <code>0</code> | Y value |

<a name="module_Vector..Vector+random"></a>

#### vector.random() ⇒ <code>Vector</code>
**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+add"></a>

#### vector.add() ⇒ <code>Vector</code>
**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+sub"></a>

#### vector.sub() ⇒ <code>Vector</code>
**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+mul"></a>

#### vector.mul() ⇒ <code>Vector</code>
**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+div"></a>

#### vector.div() ⇒ <code>Vector</code>
**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+mag"></a>

#### vector.mag() ⇒ <code>number</code>
**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+normalize"></a>

#### vector.normalize() ⇒ <code>Vector</code>
**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+angle"></a>

#### vector.angle() ⇒ <code>number</code>
**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+setMag"></a>

#### vector.setMag() ⇒ <code>Vector</code>
**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+setAngle"></a>

#### vector.setAngle() ⇒ <code>Vector</code>
**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+rotate"></a>

#### vector.rotate() ⇒ <code>Vector</code>
**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+limit"></a>

#### vector.limit() ⇒ <code>Vector</code>
**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+angleBetween"></a>

#### vector.angleBetween() ⇒ <code>number</code>
**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+dot"></a>

#### vector.dot() ⇒ <code>number</code>
**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+lerp"></a>

#### vector.lerp() ⇒ <code>Vector</code>
**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+dist"></a>

#### vector.dist() ⇒ <code>number</code>
Calculates distance between current vector and the target

**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+copy"></a>

#### vector.copy() ⇒ <code>Vector</code>
Builds a new vector with the same caractestics as this

**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_World"></a>

## World
**Requires**: <code>module:lodash</code>, [<code>Creature</code>](#module_Creature), [<code>Census</code>](#module_Census)  

* [World](#module_World)
    * [~World](#module_World..World)
        * [.launch()](#module_World..World+launch)
        * [.initializeCanvas()](#module_World..World+initializeCanvas)
        * [.getMousePosition()](#module_World..World+getMousePosition)
        * [.initializePopulation()](#module_World..World+initializePopulation)
        * [.startListeners()](#module_World..World+startListeners)
        * [.increasePopulation([x], [y], [species])](#module_World..World+increasePopulation)
        * [.decreasePopulation()](#module_World..World+decreasePopulation) ⇒ <code>number</code>
        * [.spawnCreature([x], [y], [species], [mass])](#module_World..World+spawnCreature)
        * [.removeCreature(creature)](#module_World..World+removeCreature)
        * [.drawNextFrame()](#module_World..World+drawNextFrame)
        * [.adjustPopulationGrowth()](#module_World..World+adjustPopulationGrowth)
        * [.updateCreatures()](#module_World..World+updateCreatures)

<a name="module_World..World"></a>

### World~World
2D environment for creatures

**Kind**: inner class of [<code>World</code>](#module_World)  

* [~World](#module_World..World)
    * [.launch()](#module_World..World+launch)
    * [.initializeCanvas()](#module_World..World+initializeCanvas)
    * [.getMousePosition()](#module_World..World+getMousePosition)
    * [.initializePopulation()](#module_World..World+initializePopulation)
    * [.startListeners()](#module_World..World+startListeners)
    * [.increasePopulation([x], [y], [species])](#module_World..World+increasePopulation)
    * [.decreasePopulation()](#module_World..World+decreasePopulation) ⇒ <code>number</code>
    * [.spawnCreature([x], [y], [species], [mass])](#module_World..World+spawnCreature)
    * [.removeCreature(creature)](#module_World..World+removeCreature)
    * [.drawNextFrame()](#module_World..World+drawNextFrame)
    * [.adjustPopulationGrowth()](#module_World..World+adjustPopulationGrowth)
    * [.updateCreatures()](#module_World..World+updateCreatures)

<a name="module_World..World+launch"></a>

#### world.launch()
Start simulation

**Kind**: instance method of [<code>World</code>](#module_World..World)  
<a name="module_World..World+initializeCanvas"></a>

#### world.initializeCanvas()
Canvas Setup

**Kind**: instance method of [<code>World</code>](#module_World..World)  
<a name="module_World..World+getMousePosition"></a>

#### world.getMousePosition()
Stores current mouse position

**Kind**: instance method of [<code>World</code>](#module_World..World)  
<a name="module_World..World+initializePopulation"></a>

#### world.initializePopulation()
Spawn first creatures

**Kind**: instance method of [<code>World</code>](#module_World..World)  
<a name="module_World..World+startListeners"></a>

#### world.startListeners()
Events listeners

**Kind**: instance method of [<code>World</code>](#module_World..World)  
<a name="module_World..World+increasePopulation"></a>

#### world.increasePopulation([x], [y], [species])
Increases the least populated species if none is specified

**Kind**: instance method of [<code>World</code>](#module_World..World)  

| Param | Type | Description |
| --- | --- | --- |
| [x] | <code>number</code> | New creature's coordinate on the X axis |
| [y] | <code>number</code> | New creature's coordinate on the Y axis |
| [species] | <code>string</code> | New creature's species |

<a name="module_World..World+decreasePopulation"></a>

#### world.decreasePopulation() ⇒ <code>number</code>
Removes oldest (slowest) creature

**Kind**: instance method of [<code>World</code>](#module_World..World)  
<a name="module_World..World+spawnCreature"></a>

#### world.spawnCreature([x], [y], [species], [mass])
Adds a new crature to the simulation

**Kind**: instance method of [<code>World</code>](#module_World..World)  

| Param | Type |
| --- | --- |
| [x] | <code>number</code> | 
| [y] | <code>number</code> | 
| [species] | <code>string</code> | 
| [mass] | <code>number</code> | 

<a name="module_World..World+removeCreature"></a>

#### world.removeCreature(creature)
Removes a creature from the simulation

**Kind**: instance method of [<code>World</code>](#module_World..World)  

| Param | Type |
| --- | --- |
| creature | <code>Object</code> | 

<a name="module_World..World+drawNextFrame"></a>

#### world.drawNextFrame()
Adjust population and draws creatures next move

**Kind**: instance method of [<code>World</code>](#module_World..World)  
<a name="module_World..World+adjustPopulationGrowth"></a>

#### world.adjustPopulationGrowth()
Adjust world population growth to prevent overpopulation or full extintion

**Kind**: instance method of [<code>World</code>](#module_World..World)  
<a name="module_World..World+updateCreatures"></a>

#### world.updateCreatures()
Draws creatures next move

**Kind**: instance method of [<code>World</code>](#module_World..World)  
