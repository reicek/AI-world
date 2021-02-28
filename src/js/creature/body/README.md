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
