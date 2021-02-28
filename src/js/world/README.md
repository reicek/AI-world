## Classes

<dl>
<dt><a href="#World">World</a> : <code><a href="#World">World</a></code></dt>
<dd><p>2D environment for creatures</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#World">World</a> : <code>Object</code></dt>
<dd><p>Simulation container</p>
</dd>
</dl>

<a name="World"></a>

## World : [<code>World</code>](#World)
2D environment for creatures

**Kind**: global class  
**Requires**: <code>module:lodash</code>, <code>module:Creature</code>, <code>module:Census</code>  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [id] | <code>string</code> | <code>&quot;&#x27;world&#x27;&quot;</code> | Canvas id |
| [species] | <code>Array.&lt;string&gt;</code> | <code>[&#x27;red&#x27;, &#x27;green&#x27;, &#x27;blue&#x27;]</code> | Available species |


* [World](#World) : [<code>World</code>](#World)
    * [new World([topPopulation])](#new_World_new)
    * [.cycles](#World+cycles)
    * [.learningRate](#World+learningRate)
    * [.id](#World+id)
    * [.creatures](#World+creatures)
    * [.species](#World+species)
    * [.topPopulation](#World+topPopulation)
    * [.census](#World+census)
    * [.initialPopulation](#World+initialPopulation)
    * [.mousePosition](#World+mousePosition)
    * [.launch()](#World+launch)
    * [.initializeCanvas()](#World+initializeCanvas)
    * [.getMousePosition()](#World+getMousePosition)
    * [.initializePopulation()](#World+initializePopulation)
    * [.startListeners()](#World+startListeners)
    * [.increasePopulation(x, y)](#World+increasePopulation)
    * [.decreasePopulation()](#World+decreasePopulation)
    * [.spawnCreature(x, y, species, mass)](#World+spawnCreature)
    * [.removeCreature(creature)](#World+removeCreature)
    * [.drawNextFrame()](#World+drawNextFrame)
    * [.adjustPopulationGrowth()](#World+adjustPopulationGrowth)
    * [.updateCreatures()](#World+updateCreatures)

<a name="new_World_new"></a>

### new World([topPopulation])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [topPopulation] | <code>number</code> | <code>100</code> | World's maximum population |

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

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | New creature's coordinate on the X axis |
| y | <code>number</code> | New creature's coordinate on the Y axis |

<a name="World+decreasePopulation"></a>

### world.decreasePopulation()
Removes oldest (slowest) creature

**Kind**: instance method of [<code>World</code>](#World)  
<a name="World+spawnCreature"></a>

### world.spawnCreature(x, y, species, mass)
Adds a new crature to the simulation

**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | New creature's coordinate on the X axis |
| y | <code>number</code> | New creature's coordinate on the Y axis |
| species | <code>&#x27;red&#x27;</code> \| <code>&#x27;green&#x27;</code> \| <code>&#x27;blue&#x27;</code> |  |
| mass | <code>number</code> | New creature's initial mass |

<a name="World+removeCreature"></a>

### world.removeCreature(creature)
Removes a creature from the simulation

**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type | Description |
| --- | --- | --- |
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
<a name="World"></a>

## World : <code>Object</code>
Simulation container

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cycles | <code>number</code> | Cycles counter |
| learningRate | <code>number</code> | Learning rate for all creatures in this world |
| id | <code>string</code> | Canvas id |
| creatures | <code>Array.&lt;string&gt;</code> | Creatures array |
| species | <code>Array.&lt;string&gt;</code> | Available species |
| topPopulation | <code>number</code> | World's maximum population |
| census | <code>Census</code> | Census instance |
| initialPopulation | <code>number</code> | Initial population |
| mousePosition | <code>\*</code> | Mouse position |


* [World](#World) : <code>Object</code>
    * [new World([topPopulation])](#new_World_new)
    * [.cycles](#World+cycles)
    * [.learningRate](#World+learningRate)
    * [.id](#World+id)
    * [.creatures](#World+creatures)
    * [.species](#World+species)
    * [.topPopulation](#World+topPopulation)
    * [.census](#World+census)
    * [.initialPopulation](#World+initialPopulation)
    * [.mousePosition](#World+mousePosition)
    * [.launch()](#World+launch)
    * [.initializeCanvas()](#World+initializeCanvas)
    * [.getMousePosition()](#World+getMousePosition)
    * [.initializePopulation()](#World+initializePopulation)
    * [.startListeners()](#World+startListeners)
    * [.increasePopulation(x, y)](#World+increasePopulation)
    * [.decreasePopulation()](#World+decreasePopulation)
    * [.spawnCreature(x, y, species, mass)](#World+spawnCreature)
    * [.removeCreature(creature)](#World+removeCreature)
    * [.drawNextFrame()](#World+drawNextFrame)
    * [.adjustPopulationGrowth()](#World+adjustPopulationGrowth)
    * [.updateCreatures()](#World+updateCreatures)

<a name="new_World_new"></a>

### new World([topPopulation])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [topPopulation] | <code>number</code> | <code>100</code> | World's maximum population |

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

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | New creature's coordinate on the X axis |
| y | <code>number</code> | New creature's coordinate on the Y axis |

<a name="World+decreasePopulation"></a>

### world.decreasePopulation()
Removes oldest (slowest) creature

**Kind**: instance method of [<code>World</code>](#World)  
<a name="World+spawnCreature"></a>

### world.spawnCreature(x, y, species, mass)
Adds a new crature to the simulation

**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | New creature's coordinate on the X axis |
| y | <code>number</code> | New creature's coordinate on the Y axis |
| species | <code>&#x27;red&#x27;</code> \| <code>&#x27;green&#x27;</code> \| <code>&#x27;blue&#x27;</code> |  |
| mass | <code>number</code> | New creature's initial mass |

<a name="World+removeCreature"></a>

### world.removeCreature(creature)
Removes a creature from the simulation

**Kind**: instance method of [<code>World</code>](#World)  

| Param | Type | Description |
| --- | --- | --- |
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
