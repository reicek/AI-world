<a name="World"></a>

## World
2D environment for creatures

**Kind**: global class  
**Requires**: <code>module:Creature</code>, <code>module:Census</code>, <code>module:Vector</code>, <code>module:lodash</code>, <code>module:jquery</code>  

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
