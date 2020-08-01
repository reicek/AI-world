<a name="Body"></a>

## Body
Helper methods for creature's body processes

**Kind**: global class  
**Requires**: <code>module:lodash</code>, <code>module:jquery</code>  

* [Body](#Body)
    * [.initializeSpecies()](#Body.initializeSpecies)
    * [.initializeColor()](#Body.initializeColor)
    * [.grow()](#Body.grow)
    * [.age()](#Body.age)
    * [.adjustSpeed()](#Body.adjustSpeed)
    * [.boundaries()](#Body.boundaries)
    * [.attemptReproduction(target, distance)](#Body.attemptReproduction)

<a name="Body.initializeSpecies"></a>

### Body.initializeSpecies()
Initializes creature's species

**Kind**: static method of [<code>Body</code>](#Body)  
<a name="Body.initializeColor"></a>

### Body.initializeColor()
Initializes creature's color parameters

**Kind**: static method of [<code>Body</code>](#Body)  
<a name="Body.grow"></a>

### Body.grow()
Add growth depending on metabolism

**Kind**: static method of [<code>Body</code>](#Body)  
<a name="Body.age"></a>

### Body.age()
Aging translates into the creature's max speed reduction
or death (deletion) when none speed is left

**Kind**: static method of [<code>Body</code>](#Body)  
<a name="Body.adjustSpeed"></a>

### Body.adjustSpeed()
Adjust velocity to stay close to maxSpeed

**Kind**: static method of [<code>Body</code>](#Body)  
<a name="Body.boundaries"></a>

### Body.boundaries()
Prevents creatures from going beyond the edges

**Kind**: static method of [<code>Body</code>](#Body)  
<a name="Body.attemptReproduction"></a>

### Body.attemptReproduction(target, distance)
Attempt to reproduce creature

**Kind**: static method of [<code>Body</code>](#Body)  

| Param | Type |
| --- | --- |
| target | <code>Object</code> | 
| distance | <code>number</code> | 

