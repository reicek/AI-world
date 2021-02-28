<a name="module_World"></a>

## World

**Requires**: <code>module:lodash</code>, <code>module:Creature</code>, <code>module:Census</code>

- [World](#module_World)
  - [~World](#module_World..World)
    - [.launch()](#module_World..World+launch)
    - [.initializeCanvas()](#module_World..World+initializeCanvas)
    - [.getMousePosition()](#module_World..World+getMousePosition)
    - [.initializePopulation()](#module_World..World+initializePopulation)
    - [.startListeners()](#module_World..World+startListeners)
    - [.increasePopulation([x], [y], [species])](#module_World..World+increasePopulation)
    - [.decreasePopulation()](#module_World..World+decreasePopulation) ⇒ <code>number</code>
    - [.spawnCreature([x], [y], [species], [mass])](#module_World..World+spawnCreature)
    - [.removeCreature(creature)](#module_World..World+removeCreature)
    - [.drawNextFrame()](#module_World..World+drawNextFrame)
    - [.adjustPopulationGrowth()](#module_World..World+adjustPopulationGrowth)
    - [.updateCreatures()](#module_World..World+updateCreatures)

<a name="module_World..World"></a>

### World~World

2D environment for creatures

**Kind**: inner class of [<code>World</code>](#module_World)

- [~World](#module_World..World)
  - [.launch()](#module_World..World+launch)
  - [.initializeCanvas()](#module_World..World+initializeCanvas)
  - [.getMousePosition()](#module_World..World+getMousePosition)
  - [.initializePopulation()](#module_World..World+initializePopulation)
  - [.startListeners()](#module_World..World+startListeners)
  - [.increasePopulation([x], [y], [species])](#module_World..World+increasePopulation)
  - [.decreasePopulation()](#module_World..World+decreasePopulation) ⇒ <code>number</code>
  - [.spawnCreature([x], [y], [species], [mass])](#module_World..World+spawnCreature)
  - [.removeCreature(creature)](#module_World..World+removeCreature)
  - [.drawNextFrame()](#module_World..World+drawNextFrame)
  - [.adjustPopulationGrowth()](#module_World..World+adjustPopulationGrowth)
  - [.updateCreatures()](#module_World..World+updateCreatures)

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

| Param     | Type                | Description                             |
| --------- | ------------------- | --------------------------------------- |
| [x]       | <code>number</code> | New creature's coordinate on the X axis |
| [y]       | <code>number</code> | New creature's coordinate on the Y axis |
| [species] | <code>string</code> | New creature's species                  |

<a name="module_World..World+decreasePopulation"></a>

#### world.decreasePopulation() ⇒ <code>number</code>

Removes oldest (slowest) creature

**Kind**: instance method of [<code>World</code>](#module_World..World)  
<a name="module_World..World+spawnCreature"></a>

#### world.spawnCreature([x], [y], [species], [mass])

Adds a new crature to the simulation

**Kind**: instance method of [<code>World</code>](#module_World..World)

| Param     | Type                |
| --------- | ------------------- |
| [x]       | <code>number</code> |
| [y]       | <code>number</code> |
| [species] | <code>string</code> |
| [mass]    | <code>number</code> |

<a name="module_World..World+removeCreature"></a>

#### world.removeCreature(creature)

Removes a creature from the simulation

**Kind**: instance method of [<code>World</code>](#module_World..World)

| Param    | Type                |
| -------- | ------------------- |
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
