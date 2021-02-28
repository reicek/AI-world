## Modules

<dl>
<dt><a href="#module_eval">eval</a></dt>
<dd></dd>
</dl>

## Constants

<dl>
<dt><a href="#world">world</a></dt>
<dd><p>Wold simulation instance</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#log">log(world)</a></dt>
<dd><p>Update census results on log</p>
</dd>
<dt><a href="#newDeath">newDeath()</a></dt>
<dd><p>Register new death</p>
</dd>
<dt><a href="#newBirth">newBirth()</a></dt>
<dd><p>Register new birth</p>
</dd>
<dt><a href="#update">update()</a></dt>
<dd><p>Calculate population by species</p>
</dd>
<dt><a href="#reset">reset()</a></dt>
<dd><p>Reset counts results</p>
</dd>
<dt><a href="#minority">minority()</a></dt>
<dd><p>Least populated species</p>
</dd>
<dt><a href="#mayority">mayority()</a></dt>
<dd><p>Most populated species</p>
</dd>
<dt><a href="#list">list()</a></dt>
<dd><p>Census list</p>
</dd>
<dt><a href="#initializeSpecies">initializeSpecies()</a></dt>
<dd><p>Initializes creature&#39;s species</p>
</dd>
<dt><a href="#initializeColor">initializeColor()</a></dt>
<dd><p>Initializes creature&#39;s color parameters</p>
</dd>
<dt><a href="#grow">grow()</a></dt>
<dd><p>Add growth depending on metabolism</p>
</dd>
<dt><a href="#age">age()</a></dt>
<dd><p>Aging translates into the creature&#39;s max speed reduction
or death (deletion) when none speed is left</p>
</dd>
<dt><a href="#adjustSpeed">adjustSpeed()</a></dt>
<dd><p>Adjust velocity to stay close to maxSpeed</p>
</dd>
<dt><a href="#boundaries">boundaries()</a></dt>
<dd><p>Prevents creatures from going beyond the edges</p>
</dd>
<dt><a href="#attemptReproduction">attemptReproduction(target, distance)</a></dt>
<dd><p>Attempt to reproduce creature</p>
</dd>
<dt><a href="#think">think()</a></dt>
<dd><p>Think of where to move from current location</p>
</dd>
<dt><a href="#learn">learn()</a></dt>
<dd><p>Learn how to move</p>
</dd>
<dt><a href="#moveTo">moveTo()</a></dt>
<dd><p>Applies creature&#39;s movement</p>
</dd>
<dt><a href="#applyForce">applyForce()</a></dt>
<dd><p>Applies a vector force to the creature&#39;s momentum=</p>
</dd>
<dt><a href="#draw">draw()</a></dt>
<dd><p>Draws current&#39;s creature position and direction</p>
</dd>
<dt><a href="#update">update()</a></dt>
<dd><p>Update&#39;s creature</p>
</dd>
<dt><a href="#seek">seek(target)</a> ⇒ <code>Vector</code></dt>
<dd><p>Returns the force needed to move towards specific creature</p>
</dd>
<dt><a href="#separate">separate()</a> ⇒ <code>Vector</code></dt>
<dd><p>Makes creature attempt to stay within reasonable distance
Triggers reproduction when creatures touch, depending on world reproduction chance</p>
</dd>
<dt><a href="#normalizeSeparation">normalizeSeparation()</a></dt>
<dd><p>Normalizes creature separation if they are within range</p>
</dd>
<dt><a href="#align">align()</a> ⇒ <code>Vector</code></dt>
<dd><p>Align to other creatures</p>
</dd>
<dt><a href="#addAlignmentTo">addAlignmentTo()</a></dt>
<dd><p>Adds force required to align to another creature</p>
</dd>
<dt><a href="#cohesion">cohesion()</a> ⇒ <code>Vector</code></dt>
<dd><p>Makes creature group with others</p>
</dd>
<dt><a href="#applyCohesion">applyCohesion()</a></dt>
<dd><p>Makes creature attempt to stay close to same species</p>
</dd>
<dt><a href="#shape">shape()</a></dt>
<dd><p>Creates creature&#39;s shape</p>
</dd>
<dt><a href="#set">set([x], [y])</a> ⇒ <code>Vector</code></dt>
<dd></dd>
<dt><a href="#random">random()</a> ⇒ <code>Vector</code></dt>
<dd></dd>
<dt><a href="#add">add()</a> ⇒ <code>Vector</code></dt>
<dd></dd>
<dt><a href="#sub">sub()</a> ⇒ <code>Vector</code></dt>
<dd></dd>
<dt><a href="#mul">mul()</a> ⇒ <code>Vector</code></dt>
<dd></dd>
<dt><a href="#div">div()</a> ⇒ <code>Vector</code></dt>
<dd></dd>
<dt><a href="#mag">mag()</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#normalize">normalize()</a> ⇒ <code>Vector</code></dt>
<dd></dd>
<dt><a href="#angle">angle()</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#setMag">setMag()</a> ⇒ <code>Vector</code></dt>
<dd></dd>
<dt><a href="#setAngle">setAngle()</a> ⇒ <code>Vector</code></dt>
<dd></dd>
<dt><a href="#rotate">rotate()</a> ⇒ <code>Vector</code></dt>
<dd></dd>
<dt><a href="#limit">limit()</a> ⇒ <code>Vector</code></dt>
<dd></dd>
<dt><a href="#angleBetween">angleBetween()</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#dot">dot()</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#lerp">lerp()</a> ⇒ <code>Vector</code></dt>
<dd></dd>
<dt><a href="#dist">dist()</a> ⇒ <code>number</code></dt>
<dd><p>Calculates distance between current vector and the target</p>
</dd>
<dt><a href="#copy">copy()</a> ⇒ <code>Vector</code></dt>
<dd><p>Builds a new vector with the same caractestics as this</p>
</dd>
<dt><a href="#launch">launch()</a></dt>
<dd><p>Start simulation</p>
</dd>
<dt><a href="#initializeCanvas">initializeCanvas()</a></dt>
<dd><p>Canvas Setup</p>
</dd>
<dt><a href="#getMousePosition">getMousePosition()</a></dt>
<dd><p>Stores current mouse position</p>
</dd>
<dt><a href="#initializePopulation">initializePopulation()</a></dt>
<dd><p>Spawn first creatures</p>
</dd>
<dt><a href="#startListeners">startListeners()</a></dt>
<dd><p>Events listeners</p>
</dd>
<dt><a href="#increasePopulation">increasePopulation([x], [y], [species])</a></dt>
<dd><p>Increases the least populated species if none is specified</p>
</dd>
<dt><a href="#decreasePopulation">decreasePopulation()</a> ⇒ <code>number</code></dt>
<dd><p>Removes oldest (slowest) creature</p>
</dd>
<dt><a href="#spawnCreature">spawnCreature([x], [y], [species], [mass])</a></dt>
<dd><p>Adds a new crature to the simulation</p>
</dd>
<dt><a href="#removeCreature">removeCreature(creature)</a></dt>
<dd><p>Removes a creature from the simulation</p>
</dd>
<dt><a href="#drawNextFrame">drawNextFrame()</a></dt>
<dd><p>Adjust population and draws creatures next move</p>
</dd>
<dt><a href="#adjustPopulationGrowth">adjustPopulationGrowth()</a></dt>
<dd><p>Adjust world population growth to prevent overpopulation or full extintion</p>
</dd>
<dt><a href="#updateCreatures">updateCreatures()</a></dt>
<dd><p>Draws creatures next move</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Census">Census</a> : <code>Object</code></dt>
<dd><p>Population by species</p>
</dd>
</dl>

<a name="module_eval"></a>

## eval

**See**: [https://github.com/cazala/synaptic](https://github.com/cazala/synaptic) based on work by @cazala 's Synaptic.  
<a name="module_eval..isNode"></a>

### eval~isNode : <code>object</code>

**Kind**: inner namespace of [<code>eval</code>](#module_eval)  
<a name="world"></a>

## world

Wold simulation instance

**Kind**: global constant  
<a name="log"></a>

## log(world)

Update census results on log

**Kind**: global function

| Param | Type               | Description          |
| ----- | ------------------ | -------------------- |
| world | <code>World</code> | Simulation reference |

<a name="newDeath"></a>

## newDeath()

Register new death

**Kind**: global function  
<a name="newBirth"></a>

## newBirth()

Register new birth

**Kind**: global function  
<a name="update"></a>

## update()

Calculate population by species

**Kind**: global function  
<a name="reset"></a>

## reset()

Reset counts results

**Kind**: global function  
<a name="minority"></a>

## minority()

Least populated species

**Kind**: global function  
<a name="mayority"></a>

## mayority()

Most populated species

**Kind**: global function  
<a name="list"></a>

## list()

Census list

**Kind**: global function  
<a name="initializeSpecies"></a>

## initializeSpecies()

Initializes creature's species

**Kind**: global function  
<a name="initializeColor"></a>

## initializeColor()

Initializes creature's color parameters

**Kind**: global function  
<a name="grow"></a>

## grow()

Add growth depending on metabolism

**Kind**: global function  
<a name="age"></a>

## age()

Aging translates into the creature's max speed reduction
or death (deletion) when none speed is left

**Kind**: global function  
<a name="adjustSpeed"></a>

## adjustSpeed()

Adjust velocity to stay close to maxSpeed

**Kind**: global function  
<a name="boundaries"></a>

## boundaries()

Prevents creatures from going beyond the edges

**Kind**: global function  
<a name="attemptReproduction"></a>

## attemptReproduction(target, distance)

Attempt to reproduce creature

**Kind**: global function

| Param    | Type                |
| -------- | ------------------- |
| target   | <code>Object</code> |
| distance | <code>number</code> |

<a name="think"></a>

## think()

Think of where to move from current location

**Kind**: global function  
<a name="learn"></a>

## learn()

Learn how to move

**Kind**: global function  
<a name="moveTo"></a>

## moveTo()

Applies creature's movement

**Kind**: global function  
<a name="applyForce"></a>

## applyForce()

Applies a vector force to the creature's momentum=

**Kind**: global function  
<a name="draw"></a>

## draw()

Draws current's creature position and direction

**Kind**: global function  
<a name="update"></a>

## update()

Update's creature

**Kind**: global function  
<a name="seek"></a>

## seek(target) ⇒ <code>Vector</code>

Returns the force needed to move towards specific creature

**Kind**: global function

| Param  | Type                |
| ------ | ------------------- |
| target | <code>Vector</code> |

<a name="separate"></a>

## separate() ⇒ <code>Vector</code>

Makes creature attempt to stay within reasonable distance
Triggers reproduction when creatures touch, depending on world reproduction chance

**Kind**: global function  
<a name="normalizeSeparation"></a>

## normalizeSeparation()

Normalizes creature separation if they are within range

**Kind**: global function  
<a name="align"></a>

## align() ⇒ <code>Vector</code>

Align to other creatures

**Kind**: global function  
<a name="addAlignmentTo"></a>

## addAlignmentTo()

Adds force required to align to another creature

**Kind**: global function  
<a name="cohesion"></a>

## cohesion() ⇒ <code>Vector</code>

Makes creature group with others

**Kind**: global function  
<a name="applyCohesion"></a>

## applyCohesion()

Makes creature attempt to stay close to same species

**Kind**: global function  
<a name="shape"></a>

## shape()

Creates creature's shape

**Kind**: global function  
<a name="set"></a>

## set([x], [y]) ⇒ <code>Vector</code>

**Kind**: global function

| Param | Type                | Default        | Description |
| ----- | ------------------- | -------------- | ----------- |
| [x]   | <code>number</code> | <code>0</code> | X value     |
| [y]   | <code>number</code> | <code>0</code> | Y value     |

<a name="random"></a>

## random() ⇒ <code>Vector</code>

**Kind**: global function  
<a name="add"></a>

## add() ⇒ <code>Vector</code>

**Kind**: global function  
<a name="sub"></a>

## sub() ⇒ <code>Vector</code>

**Kind**: global function  
<a name="mul"></a>

## mul() ⇒ <code>Vector</code>

**Kind**: global function  
<a name="div"></a>

## div() ⇒ <code>Vector</code>

**Kind**: global function  
<a name="mag"></a>

## mag() ⇒ <code>number</code>

**Kind**: global function  
<a name="normalize"></a>

## normalize() ⇒ <code>Vector</code>

**Kind**: global function  
<a name="angle"></a>

## angle() ⇒ <code>number</code>

**Kind**: global function  
<a name="setMag"></a>

## setMag() ⇒ <code>Vector</code>

**Kind**: global function  
<a name="setAngle"></a>

## setAngle() ⇒ <code>Vector</code>

**Kind**: global function  
<a name="rotate"></a>

## rotate() ⇒ <code>Vector</code>

**Kind**: global function  
<a name="limit"></a>

## limit() ⇒ <code>Vector</code>

**Kind**: global function  
<a name="angleBetween"></a>

## angleBetween() ⇒ <code>number</code>

**Kind**: global function  
<a name="dot"></a>

## dot() ⇒ <code>number</code>

**Kind**: global function  
<a name="lerp"></a>

## lerp() ⇒ <code>Vector</code>

**Kind**: global function  
<a name="dist"></a>

## dist() ⇒ <code>number</code>

Calculates distance between current vector and the target

**Kind**: global function  
<a name="copy"></a>

## copy() ⇒ <code>Vector</code>

Builds a new vector with the same caractestics as this

**Kind**: global function  
<a name="launch"></a>

## launch()

Start simulation

**Kind**: global function  
<a name="initializeCanvas"></a>

## initializeCanvas()

Canvas Setup

**Kind**: global function  
<a name="getMousePosition"></a>

## getMousePosition()

Stores current mouse position

**Kind**: global function  
<a name="initializePopulation"></a>

## initializePopulation()

Spawn first creatures

**Kind**: global function  
<a name="startListeners"></a>

## startListeners()

Events listeners

**Kind**: global function  
<a name="increasePopulation"></a>

## increasePopulation([x], [y], [species])

Increases the least populated species if none is specified

**Kind**: global function

| Param     | Type                | Description                             |
| --------- | ------------------- | --------------------------------------- |
| [x]       | <code>number</code> | New creature's coordinate on the X axis |
| [y]       | <code>number</code> | New creature's coordinate on the Y axis |
| [species] | <code>string</code> | New creature's species                  |

<a name="decreasePopulation"></a>

## decreasePopulation() ⇒ <code>number</code>

Removes oldest (slowest) creature

**Kind**: global function  
<a name="spawnCreature"></a>

## spawnCreature([x], [y], [species], [mass])

Adds a new crature to the simulation

**Kind**: global function

| Param     | Type                |
| --------- | ------------------- |
| [x]       | <code>number</code> |
| [y]       | <code>number</code> |
| [species] | <code>string</code> |
| [mass]    | <code>number</code> |

<a name="removeCreature"></a>

## removeCreature(creature)

Removes a creature from the simulation

**Kind**: global function

| Param    | Type                |
| -------- | ------------------- |
| creature | <code>Object</code> |

<a name="drawNextFrame"></a>

## drawNextFrame()

Adjust population and draws creatures next move

**Kind**: global function  
<a name="adjustPopulationGrowth"></a>

## adjustPopulationGrowth()

Adjust world population growth to prevent overpopulation or full extintion

**Kind**: global function  
<a name="updateCreatures"></a>

## updateCreatures()

Draws creatures next move

**Kind**: global function  
<a name="Census"></a>

## Census : <code>Object</code>

Population by species

**Kind**: global typedef  
**Properties**

| Name   | Type                | Description      |
| ------ | ------------------- | ---------------- |
| red    | <code>number</code> | Red population   |
| green  | <code>number</code> | Green population |
| blue   | <code>number</code> | Blue population  |
| births | <code>number</code> | Total births     |
| deaths | <code>number</code> | Total deaths     |
