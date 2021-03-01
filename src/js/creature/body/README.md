<a name="module_body"></a>

## body
Helper methods for creature's body processes

**Requires**: <code>module:lodash</code>, <code>module:jquery</code>  

* [body](#module_body)
    * [.initializeSpecies(creature, species)](#module_body.initializeSpecies)
    * [.initializeColor()](#module_body.initializeColor)
    * [.grow()](#module_body.grow)
    * [.age()](#module_body.age)
    * [.adjustSpeed()](#module_body.adjustSpeed)
    * [.boundaries()](#module_body.boundaries)
    * [.attemptReproduction(target, distance)](#module_body.attemptReproduction)

<a name="module_body.initializeSpecies"></a>

### body.initializeSpecies(creature, species)
Initializes creature's species

**Kind**: static method of [<code>body</code>](#module_body)  

| Param | Type |
| --- | --- |
| creature | <code>\*</code> | 
| species | <code>\*</code> | 

<a name="module_body.initializeColor"></a>

### body.initializeColor()
Initializes creature's color parameters

**Kind**: static method of [<code>body</code>](#module_body)  
<a name="module_body.grow"></a>

### body.grow()
Add growth depending on metabolism

**Kind**: static method of [<code>body</code>](#module_body)  
<a name="module_body.age"></a>

### body.age()
Aging translates into the creature's max speed reduction
or death (deletion) when none speed is left

**Kind**: static method of [<code>body</code>](#module_body)  
<a name="module_body.adjustSpeed"></a>

### body.adjustSpeed()
Adjust velocity to stay close to maxSpeed

**Kind**: static method of [<code>body</code>](#module_body)  
<a name="module_body.boundaries"></a>

### body.boundaries()
Prevents creatures from going beyond the edges

**Kind**: static method of [<code>body</code>](#module_body)  
<a name="module_body.attemptReproduction"></a>

### body.attemptReproduction(target, distance)
Attempt to reproduce creature

**Kind**: static method of [<code>body</code>](#module_body)  

| Param | Type |
| --- | --- |
| target | <code>Object</code> | 
| distance | <code>number</code> | 

