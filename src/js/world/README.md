## Functions

<dl>
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
