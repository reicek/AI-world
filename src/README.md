## Modules

<dl>
<dt><a href="#module_Census">Census</a></dt>
<dd></dd>
<dt><a href="#module_Body">Body</a></dt>
<dd></dd>
<dt><a href="#module_Brain">Brain</a></dt>
<dd></dd>
<dt><a href="#module_Creature">Creature</a></dt>
<dd></dd>
<dt><a href="#module_Draw">Draw</a></dt>
<dd></dd>
<dt><a href="#module_eval">eval</a></dt>
<dd></dd>
<dt><a href="#module_simulation">simulation</a></dt>
<dd><p>Current simulation</p>
</dd>
<dt><a href="#module_Vector">Vector</a></dt>
<dd></dd>
<dt><a href="#module_World">World</a></dt>
<dd></dd>
</dl>

## Classes

<dl>
<dt><a href="#Census">Census</a></dt>
<dd><p>Census registry</p>
</dd>
<dt><a href="#Body">Body</a></dt>
<dd><p>Helper methods for creature&#39;s body processes</p>
</dd>
<dt><a href="#Brain">Brain</a></dt>
<dd><p>Creature&#39;s mind</p>
</dd>
<dt><a href="#Creature">Creature</a></dt>
<dd><p>Artificial Intelligence based in perceptron neural networks that lives in a 2D world</p>
</dd>
<dt><a href="#Draw">Draw</a></dt>
<dd><p>Methods to draw creature</p>
</dd>
<dt><a href="#Vector">Vector</a></dt>
<dd><p>2D Matrix position</p>
</dd>
<dt><a href="#World">World</a></dt>
<dd><p>2D environment for creatures</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#simulation">simulation</a> : <code><a href="#World">World</a></code></dt>
<dd><p>World instance to run the simulation</p>
</dd>
</dl>

<a name="module_Census"></a>

## Census
<a name="module_Body"></a>

## Body
<a name="module_Brain"></a>

## Brain
<a name="module_Creature"></a>

## Creature
<a name="module_Draw"></a>

## Draw
<a name="module_eval"></a>

## eval
**See**: [https://github.com/cazala/synaptic](https://github.com/cazala/synaptic) based on work by @cazala 's Synaptic.  
<a name="module_eval..isNode"></a>

### eval~isNode : <code>object</code>
**Kind**: inner namespace of [<code>eval</code>](#module_eval)  
<a name="module_simulation"></a>

## simulation
Current simulation

**Requires**: [<code>World</code>](#module_World)  
<a name="module_Vector"></a>

## Vector
<a name="module_World"></a>

## World
<a name="Census"></a>

## Census
Census registry

**Kind**: global class  
**Requires**: <code>module:lodash</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| red | <code>number</code> | Red population |
| green | <code>number</code> | Green population |
| blue | <code>number</code> | Blue population |
| births | <code>number</code> | Total births |
| deaths | <code>number</code> | Total deaths |
| logColor | <code>string</code> | Log color for this species |


* [Census](#Census)
    * [.log()](#Census+log)
    * [.logPopulation(species)](#Census+logPopulation)
    * [.getSpeciesColor(species)](#Census+getSpeciesColor)
    * [.newDeath()](#Census+newDeath)
    * [.newBirth()](#Census+newBirth)
    * [.update()](#Census+update)
    * [.reset()](#Census+reset)
    * [.minority()](#Census+minority)
    * [.mayority()](#Census+mayority)
    * [.list()](#Census+list)

<a name="Census+log"></a>

### census.log()
Clears the log and shows the census results

**Kind**: instance method of [<code>Census</code>](#Census)  
<a name="Census+logPopulation"></a>

### census.logPopulation(species)
Show current population and reproduction chance of a species

**Kind**: instance method of [<code>Census</code>](#Census)  

| Param | Type | Description |
| --- | --- | --- |
| species | <code>string</code> | Target species |

**Example**  
```js
this.logPopulation('red');
```
<a name="Census+getSpeciesColor"></a>

### census.getSpeciesColor(species)
Returns RGB color for a particular species

**Kind**: instance method of [<code>Census</code>](#Census)  

| Param | Type | Description |
| --- | --- | --- |
| species | <code>string</code> | Target species |

**Example**  
```js
this.getSpeciesColor('red');
```
<a name="Census+newDeath"></a>

### census.newDeath()
Increase deaths count

**Kind**: instance method of [<code>Census</code>](#Census)  
<a name="Census+newBirth"></a>

### census.newBirth()
Increase births count

**Kind**: instance method of [<code>Census</code>](#Census)  
<a name="Census+update"></a>

### census.update()
Calculates population by species

**Kind**: instance method of [<code>Census</code>](#Census)  
<a name="Census+reset"></a>

### census.reset()
Return counts results to inital state

**Kind**: instance method of [<code>Census</code>](#Census)  
<a name="Census+minority"></a>

### census.minority()
Returns the least populated species

**Kind**: instance method of [<code>Census</code>](#Census)  
<a name="Census+mayority"></a>

### census.mayority()
Returns the most populated species

**Kind**: instance method of [<code>Census</code>](#Census)  
<a name="Census+list"></a>

### census.list()
Census list

**Kind**: instance method of [<code>Census</code>](#Census)  
<a name="Body"></a>

## Body
Helper methods for creature's body processes

**Kind**: global class  
**Requires**: <code>module:lodash</code>, <code>module:jquery</code>  

* [Body](#Body)
    * [.initializeSpecies()](#Body.initializeSpecies)
    * [.initializeColor()](#Body.initializeColor)
    * [.grow()](#Body.grow)
    * [.age()](#Body.age)
    * [.adjustSpeed()](#Body.adjustSpeed)
    * [.boundaries()](#Body.boundaries)
    * [.attemptReproduction(target, distance)](#Body.attemptReproduction)

<a name="Body.initializeSpecies"></a>

### Body.initializeSpecies()
Initializes creature's species

**Kind**: static method of [<code>Body</code>](#Body)  
<a name="Body.initializeColor"></a>

### Body.initializeColor()
Initializes creature's color parameters

**Kind**: static method of [<code>Body</code>](#Body)  
<a name="Body.grow"></a>

### Body.grow()
Add growth depending on metabolism

**Kind**: static method of [<code>Body</code>](#Body)  
<a name="Body.age"></a>

### Body.age()
Aging translates into the creature's max speed reduction
or death (deletion) when none speed is left

**Kind**: static method of [<code>Body</code>](#Body)  
<a name="Body.adjustSpeed"></a>

### Body.adjustSpeed()
Adjust velocity to stay close to maxSpeed

**Kind**: static method of [<code>Body</code>](#Body)  
<a name="Body.boundaries"></a>

### Body.boundaries()
Prevents creatures from going beyond the edges

**Kind**: static method of [<code>Body</code>](#Body)  
<a name="Body.attemptReproduction"></a>

### Body.attemptReproduction(target, distance)
Attempt to reproduce creature

**Kind**: static method of [<code>Body</code>](#Body)  

| Param | Type |
| --- | --- |
| target | <code>Object</code> | 
| distance | <code>number</code> | 

<a name="Brain"></a>

## Brain
Creature's mind

**Kind**: global class  
**Requires**: <code>module:synaptic</code>  
**See**

- [https://github.com/cazala/synaptic/wiki/Architect](https://github.com/cazala/synaptic/wiki/Architect)
- [https://github.com/cazala/synaptic/wiki/Networks](https://github.com/cazala/synaptic/wiki/Networks)


* [Brain](#Brain)
    * [new Brain()](#new_Brain_new)
    * [.think()](#Brain+think)
    * [.learn()](#Brain+learn)

<a name="new_Brain_new"></a>

### new Brain()
Creates a new neural network

<a name="Brain+think"></a>

### brain.think()
Think of where to move from current location

**Kind**: instance method of [<code>Brain</code>](#Brain)  
<a name="Brain+learn"></a>

### brain.learn()
Learn how to move

**Kind**: instance method of [<code>Brain</code>](#Brain)  
<a name="Creature"></a>

## Creature
Artificial Intelligence based in perceptron neural networks that lives in a 2D world

**Kind**: global class  
**Requires**: [<code>simulation</code>](#module_simulation), [<code>Vector</code>](#module_Vector), [<code>Brain</code>](#module_Brain), [<code>Draw</code>](#module_Draw), [<code>Body</code>](#module_Body)  

* [Creature](#Creature)
    * [.moveTo()](#Creature+moveTo)
    * [.applyForce()](#Creature+applyForce)
    * [.draw()](#Creature+draw)
    * [.update()](#Creature+update)
    * [.seek(target)](#Creature+seek) ⇒ [<code>Vector</code>](#Vector)
    * [.separate()](#Creature+separate) ⇒ [<code>Vector</code>](#Vector)
    * [.normalizeSeparation()](#Creature+normalizeSeparation)
    * [.align()](#Creature+align) ⇒ [<code>Vector</code>](#Vector)
    * [.addAlignmentTo()](#Creature+addAlignmentTo)
    * [.cohesion()](#Creature+cohesion) ⇒ [<code>Vector</code>](#Vector)
    * [.applyCohesion()](#Creature+applyCohesion)

<a name="Creature+moveTo"></a>

### creature.moveTo()
Applies creature's movement

**Kind**: instance method of [<code>Creature</code>](#Creature)  
<a name="Creature+applyForce"></a>

### creature.applyForce()
Applies a vector force to the creature's momentum=

**Kind**: instance method of [<code>Creature</code>](#Creature)  
<a name="Creature+draw"></a>

### creature.draw()
Draws current's creature position and direction

**Kind**: instance method of [<code>Creature</code>](#Creature)  
<a name="Creature+update"></a>

### creature.update()
Update's creature

**Kind**: instance method of [<code>Creature</code>](#Creature)  
<a name="Creature+seek"></a>

### creature.seek(target) ⇒ [<code>Vector</code>](#Vector)
Returns the force needed to move towards specific creature

**Kind**: instance method of [<code>Creature</code>](#Creature)  

| Param | Type |
| --- | --- |
| target | [<code>Vector</code>](#Vector) | 

<a name="Creature+separate"></a>

### creature.separate() ⇒ [<code>Vector</code>](#Vector)
Makes creature attempt to stay within reasonable distance
Triggers reproduction when creatures touch, depending on world reproduction chance

**Kind**: instance method of [<code>Creature</code>](#Creature)  
<a name="Creature+normalizeSeparation"></a>

### creature.normalizeSeparation()
Normalizes creature separation if they are within range

**Kind**: instance method of [<code>Creature</code>](#Creature)  
<a name="Creature+align"></a>

### creature.align() ⇒ [<code>Vector</code>](#Vector)
Align to other creatures

**Kind**: instance method of [<code>Creature</code>](#Creature)  
<a name="Creature+addAlignmentTo"></a>

### creature.addAlignmentTo()
Adds force required to align to another creature

**Kind**: instance method of [<code>Creature</code>](#Creature)  
<a name="Creature+cohesion"></a>

### creature.cohesion() ⇒ [<code>Vector</code>](#Vector)
Makes creature group with others

**Kind**: instance method of [<code>Creature</code>](#Creature)  
<a name="Creature+applyCohesion"></a>

### creature.applyCohesion()
Makes creature attempt to stay close to same species

**Kind**: instance method of [<code>Creature</code>](#Creature)  
<a name="Draw"></a>

## Draw
Methods to draw creature

**Kind**: global class  
<a name="Draw.shape"></a>

### Draw.shape()
Creates creature's shape

**Kind**: static method of [<code>Draw</code>](#Draw)  
<a name="Vector"></a>

## Vector
2D Matrix position

**Kind**: global class  
**Requires**: <code>module:lodash</code>  
**See**: [https://github.com/cazala/synaptic](https://github.com/cazala/synaptic) based on work by @cazala 's Synaptic.  

* [Vector](#Vector)
    * [new Vector([x], [y])](#new_Vector_new)
    * [.x](#Vector+x)
    * [.y](#Vector+y)
    * [.set([x], [y])](#Vector+set) ⇒ [<code>Vector</code>](#Vector)
    * [.random()](#Vector+random) ⇒ [<code>Vector</code>](#Vector)
    * [.add()](#Vector+add) ⇒ [<code>Vector</code>](#Vector)
    * [.sub()](#Vector+sub) ⇒ [<code>Vector</code>](#Vector)
    * [.mul()](#Vector+mul) ⇒ [<code>Vector</code>](#Vector)
    * [.div()](#Vector+div) ⇒ [<code>Vector</code>](#Vector)
    * [.mag()](#Vector+mag) ⇒ <code>number</code>
    * [.normalize()](#Vector+normalize) ⇒ [<code>Vector</code>](#Vector)
    * [.angle()](#Vector+angle) ⇒ <code>number</code>
    * [.setMag()](#Vector+setMag) ⇒ [<code>Vector</code>](#Vector)
    * [.setAngle()](#Vector+setAngle) ⇒ [<code>Vector</code>](#Vector)
    * [.rotate()](#Vector+rotate) ⇒ [<code>Vector</code>](#Vector)
    * [.limit()](#Vector+limit) ⇒ [<code>Vector</code>](#Vector)
    * [.angleBetween()](#Vector+angleBetween) ⇒ <code>number</code>
    * [.dot()](#Vector+dot) ⇒ <code>number</code>
    * [.lerp()](#Vector+lerp) ⇒ [<code>Vector</code>](#Vector)
    * [.dist()](#Vector+dist) ⇒ <code>number</code>
    * [.copy()](#Vector+copy) ⇒ [<code>Vector</code>](#Vector)

<a name="new_Vector_new"></a>

### new Vector([x], [y])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [x] | <code>number</code> | <code>0</code> | X value |
| [y] | <code>number</code> | <code>0</code> | Y value |

**Example**  
```js
const x = 1;
    const y = 1;
    const vector = new Vector(x, y);
```
<a name="Vector+x"></a>

### vector.x
X value

**Kind**: instance property of [<code>Vector</code>](#Vector)  
<a name="Vector+y"></a>

### vector.y
Y value

**Kind**: instance property of [<code>Vector</code>](#Vector)  
<a name="Vector+set"></a>

### vector.set([x], [y]) ⇒ [<code>Vector</code>](#Vector)
**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [x] | <code>number</code> | <code>0</code> | X value |
| [y] | <code>number</code> | <code>0</code> | Y value |

<a name="Vector+random"></a>

### vector.random() ⇒ [<code>Vector</code>](#Vector)
**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+add"></a>

### vector.add() ⇒ [<code>Vector</code>](#Vector)
**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+sub"></a>

### vector.sub() ⇒ [<code>Vector</code>](#Vector)
**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+mul"></a>

### vector.mul() ⇒ [<code>Vector</code>](#Vector)
**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+div"></a>

### vector.div() ⇒ [<code>Vector</code>](#Vector)
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
**Requires**: [<code>Creature</code>](#module_Creature), [<code>Census</code>](#module_Census), [<code>Vector</code>](#module_Vector), <code>module:lodash</code>, <code>module:jquery</code>  

* [World](#World)
    * [.launch()](#World+launch)
    * [.initializeCanvas()](#World+initializeCanvas)
    * [.getMousePosition()](#World+getMousePosition)
    * [.initializePopulation()](#World+initializePopulation)
    * [.startListeners()](#World+startListeners)
    * [.increasePopulation([x], [y], [species])](#World+increasePopulation)
    * [.decreasePopulation()](#World+decreasePopulation) ⇒ <code>number</code>
    * [.spawnCreature([x], [y], [species], [mass])](#World+spawnCreature)
    * [.removeCreature(creature)](#World+removeCreature)
    * [.drawNextFrame()](#World+drawNextFrame)
    * [.adjustPopulationGrowth()](#World+adjustPopulationGrowth)
    * [.updateCreatures()](#World+updateCreatures)

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
Stores current mouse position

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

### world.increasePopulation([x], [y], [species])
Increases the least populated species if none is specified

**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type | Description |
| --- | --- | --- |
| [x] | <code>number</code> | New creature's coordinate on the X axis |
| [y] | <code>number</code> | New creature's coordinate on the Y axis |
| [species] | <code>string</code> | New creature's species |

<a name="World+decreasePopulation"></a>

### world.decreasePopulation() ⇒ <code>number</code>
Removes oldest (slowest) creature

**Kind**: instance method of [<code>World</code>](#World)  
<a name="World+spawnCreature"></a>

### world.spawnCreature([x], [y], [species], [mass])
Adds a new crature to the simulation

**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type |
| --- | --- |
| [x] | <code>number</code> | 
| [y] | <code>number</code> | 
| [species] | <code>string</code> | 
| [mass] | <code>number</code> | 

<a name="World+removeCreature"></a>

### world.removeCreature(creature)
Removes a creature from the simulation

**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type |
| --- | --- |
| creature | <code>Object</code> | 

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
<a name="simulation"></a>

## simulation : [<code>World</code>](#World)
World instance to run the simulation

**Kind**: global constant  
