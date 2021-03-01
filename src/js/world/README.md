<a name="module_World 2D environment for creatures"></a>

## World 2D environment for creatures

- [World 2D environment for creatures](#module_World 2D environment for creatures)
  - [module.exports](#exp_module_World 2D environment for creatures--module.exports) ⏏
    - [new module.exports([topPopulation], [id], [species])](#new_module_World 2D environment for creatures--module.exports_new)
    - [.cycles](#module_World 2D environment for creatures--module.exports+cycles)
    - [.learningRate](#module_World 2D environment for creatures--module.exports+learningRate)
    - [.id](#module_World 2D environment for creatures--module.exports+id)
    - [.creatures](#module_World 2D environment for creatures--module.exports+creatures)
    - [.species](#module_World 2D environment for creatures--module.exports+species)
    - [.topPopulation](#module_World 2D environment for creatures--module.exports+topPopulation)
    - [.census](#module_World 2D environment for creatures--module.exports+census)
    - [.initialPopulation](#module_World 2D environment for creatures--module.exports+initialPopulation)
    - [.mousePosition](#module_World 2D environment for creatures--module.exports+mousePosition)
    - [.launch()](#module_World 2D environment for creatures--module.exports+launch)
    - [.initializeCanvas()](#module_World 2D environment for creatures--module.exports+initializeCanvas)
    - [.getMousePosition()](#module_World 2D environment for creatures--module.exports+getMousePosition)
    - [.initializePopulation()](#module_World 2D environment for creatures--module.exports+initializePopulation)
    - [.startListeners()](#module_World 2D environment for creatures--module.exports+startListeners)
    - [.increasePopulation(x, y)](#module_World 2D environment for creatures--module.exports+increasePopulation)
    - [.decreasePopulation()](#module_World 2D environment for creatures--module.exports+decreasePopulation)
    - [.spawnCreature(x, y, species, mass)](#module_World 2D environment for creatures--module.exports+spawnCreature)
    - [.removeCreature(creature)](#module_World 2D environment for creatures--module.exports+removeCreature)
    - [.drawNextFrame()](#module_World 2D environment for creatures--module.exports+drawNextFrame)
    - [.adjustPopulationGrowth()](#module_World 2D environment for creatures--module.exports+adjustPopulationGrowth)
    - [.updateCreatures()](#module_World 2D environment for creatures--module.exports+updateCreatures)

<a name="exp_module_World 2D environment for creatures--module.exports"></a>

### module.exports ⏏

**Kind**: Exported class  
<a name="new_module_World 2D environment for creatures--module.exports_new"></a>

#### new module.exports([topPopulation], [id], [species])

Create World

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

<a name="module_World 2D environment for creatures--module.exports+cycles"></a>

#### module.exports.cycles

Cycles counter

**Kind**: instance property of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+learningRate"></a>

#### module.exports.learningRate

Learning rate for all creatures in this world

**Kind**: instance property of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+id"></a>

#### module.exports.id

Canvas id

**Kind**: instance property of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+creatures"></a>

#### module.exports.creatures

Creatures array

**Kind**: instance property of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+species"></a>

#### module.exports.species

Available species

**Kind**: instance property of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+topPopulation"></a>

#### module.exports.topPopulation

World's maximum population

**Kind**: instance property of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+census"></a>

#### module.exports.census

Census instance

**Kind**: instance property of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+initialPopulation"></a>

#### module.exports.initialPopulation

Initial population

**Kind**: instance property of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+mousePosition"></a>

#### module.exports.mousePosition

Mouse position

**Kind**: instance property of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+launch"></a>

#### module.exports.launch()

Start simulation

**Kind**: instance method of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+initializeCanvas"></a>

#### module.exports.initializeCanvas()

Canvas Setup

**Kind**: instance method of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+getMousePosition"></a>

#### module.exports.getMousePosition()

Store current mouse position

**Kind**: instance method of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+initializePopulation"></a>

#### module.exports.initializePopulation()

Spawn first creatures

**Kind**: instance method of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+startListeners"></a>

#### module.exports.startListeners()

Events listeners

**Kind**: instance method of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+increasePopulation"></a>

#### module.exports.increasePopulation(x, y)

Increases the least populated species

**Kind**: instance method of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)

| Param | Type                | Description                             |
| ----- | ------------------- | --------------------------------------- |
| x     | <code>number</code> | New creature's coordinate on the X axis |
| y     | <code>number</code> | New creature's coordinate on the Y axis |

<a name="module_World 2D environment for creatures--module.exports+decreasePopulation"></a>

#### module.exports.decreasePopulation()

Removes oldest (slowest) creature

**Kind**: instance method of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+spawnCreature"></a>

#### module.exports.spawnCreature(x, y, species, mass)

Adds a new crature to the simulation

**Kind**: instance method of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)

| Param   | Type                                                                                            | Description                             |
| ------- | ----------------------------------------------------------------------------------------------- | --------------------------------------- |
| x       | <code>number</code>                                                                             | New creature's coordinate on the X axis |
| y       | <code>number</code>                                                                             | New creature's coordinate on the Y axis |
| species | <code>&#x27;red&#x27;</code> \| <code>&#x27;green&#x27;</code> \| <code>&#x27;blue&#x27;</code> |                                         |
| mass    | <code>number</code>                                                                             | New creature's initial mass             |

<a name="module_World 2D environment for creatures--module.exports+removeCreature"></a>

#### module.exports.removeCreature(creature)

Removes a creature from the simulation

**Kind**: instance method of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)

| Param    | Type                  | Description      |
| -------- | --------------------- | ---------------- |
| creature | <code>Creature</code> | Target to remove |

<a name="module_World 2D environment for creatures--module.exports+drawNextFrame"></a>

#### module.exports.drawNextFrame()

Adjust population and draws creatures next move

**Kind**: instance method of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+adjustPopulationGrowth"></a>

#### module.exports.adjustPopulationGrowth()

Adjust world population growth to prevent overpopulation or full extintion

**Kind**: instance method of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+updateCreatures"></a>

#### module.exports.updateCreatures()

Draws creatures next move

**Kind**: instance method of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)
