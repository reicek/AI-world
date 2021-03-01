<a name="module_Body Helper methods for creatures body processes"></a>

## Body Helper methods for creatures body processes

**Requires**: <code>module:lodash</code>, <code>module:jquery</code>

- [Body Helper methods for creatures body processes](#module_Body Helper methods for creatures body processes)
  - [.initializeSpecies(creature, species)](#module_Body Helper methods for creatures body processes.initializeSpecies)
  - [.initializeColor()](#module_Body Helper methods for creatures body processes.initializeColor)
  - [.grow()](#module_Body Helper methods for creatures body processes.grow)
  - [.age()](#module_Body Helper methods for creatures body processes.age)
  - [.adjustSpeed()](#module_Body Helper methods for creatures body processes.adjustSpeed)
  - [.boundaries()](#module_Body Helper methods for creatures body processes.boundaries)
  - [.attemptReproduction(target, distance)](#module_Body Helper methods for creatures body processes.attemptReproduction)

<a name="module_Body Helper methods for creatures body processes.initializeSpecies"></a>

### Body Helper methods for creatures body processes.initializeSpecies(creature, species)

Initializes creature's species

**Kind**: static method of [<code>Body Helper methods for creatures body processes</code>](#module_Body Helper methods for creatures body processes)

| Param    | Type            |
| -------- | --------------- |
| creature | <code>\*</code> |
| species  | <code>\*</code> |

<a name="module_Body Helper methods for creatures body processes.initializeColor"></a>

### Body Helper methods for creatures body processes.initializeColor()

Initializes creature's color parameters

**Kind**: static method of [<code>Body Helper methods for creatures body processes</code>](#module_Body Helper methods for creatures body processes)  
<a name="module_Body Helper methods for creatures body processes.grow"></a>

### Body Helper methods for creatures body processes.grow()

Add growth depending on metabolism

**Kind**: static method of [<code>Body Helper methods for creatures body processes</code>](#module_Body Helper methods for creatures body processes)  
<a name="module_Body Helper methods for creatures body processes.age"></a>

### Body Helper methods for creatures body processes.age()

Aging translates into the creature's max speed reduction
or death (deletion) when none speed is left

**Kind**: static method of [<code>Body Helper methods for creatures body processes</code>](#module_Body Helper methods for creatures body processes)  
<a name="module_Body Helper methods for creatures body processes.adjustSpeed"></a>

### Body Helper methods for creatures body processes.adjustSpeed()

Adjust velocity to stay close to maxSpeed

**Kind**: static method of [<code>Body Helper methods for creatures body processes</code>](#module_Body Helper methods for creatures body processes)  
<a name="module_Body Helper methods for creatures body processes.boundaries"></a>

### Body Helper methods for creatures body processes.boundaries()

Prevents creatures from going beyond the edges

**Kind**: static method of [<code>Body Helper methods for creatures body processes</code>](#module_Body Helper methods for creatures body processes)  
<a name="module_Body Helper methods for creatures body processes.attemptReproduction"></a>

### Body Helper methods for creatures body processes.attemptReproduction(target, distance)

Attempt to reproduce creature

**Kind**: static method of [<code>Body Helper methods for creatures body processes</code>](#module_Body Helper methods for creatures body processes)

| Param    | Type                |
| -------- | ------------------- |
| target   | <code>Object</code> |
| distance | <code>number</code> |
