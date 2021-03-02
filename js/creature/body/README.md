<a name="module_body"></a>

## body
Helper methods for creature's body processes

**Requires**: <code>module:lodash</code>, <code>module:jquery</code>  

* [body](#module_body)
    * [.initializeSpecies(creature, species)](#module_body.initializeSpecies)
    * [.initializeColor(creature)](#module_body.initializeColor)
    * [.grow(creature)](#module_body.grow)
    * [.age(creature)](#module_body.age)
    * [.adjustSpeed(creature)](#module_body.adjustSpeed)
    * [.boundaries(creature)](#module_body.boundaries)
    * [.attemptReproduction(creature, target, distance)](#module_body.attemptReproduction)

<a name="module_body.initializeSpecies"></a>

### body.initializeSpecies(creature, species)
Initializes creature's species

**Kind**: static method of [<code>body</code>](#module_body)  

| Param | Type | Description |
| --- | --- | --- |
| creature | <code>Creature</code> | Creature reference |
| species | <code>&quot;red&quot;</code> \| <code>&quot;green&quot;</code> \| <code>&quot;blue&quot;</code> |  |

<a name="module_body.initializeColor"></a>

### body.initializeColor(creature)
Initializes creature's color parameters

**Kind**: static method of [<code>body</code>](#module_body)  

| Param | Type | Description |
| --- | --- | --- |
| creature | <code>Creature</code> | Creature reference |

<a name="module_body.grow"></a>

### body.grow(creature)
Add growth depending on metabolism

**Kind**: static method of [<code>body</code>](#module_body)  

| Param | Type | Description |
| --- | --- | --- |
| creature | <code>Creature</code> | Creature reference |

<a name="module_body.age"></a>

### body.age(creature)
Aging translates into the creature's max speed reduction
or death (deletion) when none speed is left

**Kind**: static method of [<code>body</code>](#module_body)  

| Param | Type | Description |
| --- | --- | --- |
| creature | <code>Creature</code> | Creature reference |

<a name="module_body.adjustSpeed"></a>

### body.adjustSpeed(creature)
Adjust velocity to stay close to maxSpeed

**Kind**: static method of [<code>body</code>](#module_body)  

| Param | Type | Description |
| --- | --- | --- |
| creature | <code>Creature</code> | Creature reference |

<a name="module_body.boundaries"></a>

### body.boundaries(creature)
Prevents creatures from going beyond the edges

**Kind**: static method of [<code>body</code>](#module_body)  

| Param | Type | Description |
| --- | --- | --- |
| creature | <code>Creature</code> | Creature reference |

<a name="module_body.attemptReproduction"></a>

### body.attemptReproduction(creature, target, distance)
Attempt to reproduce creature

**Kind**: static method of [<code>body</code>](#module_body)  

| Param | Type | Description |
| --- | --- | --- |
| creature | <code>Creature</code> | Creature reference |
| target | <code>Object</code> | Target creature |
| distance | <code>number</code> | Distance between creature and target |

