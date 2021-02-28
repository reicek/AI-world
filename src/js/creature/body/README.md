## Functions

<dl>
<dt><a href="#initializeSpecies">initializeSpecies()</a></dt>
<dd><p>Initializes creature&#39;s species</p>
</dd>
<dt><a href="#initializeColor">initializeColor()</a></dt>
<dd><p>Initializes creature&#39;s color parameters</p>
</dd>
<dt><a href="#grow">grow()</a></dt>
<dd><p>Add growth depending on metabolism</p>
</dd>
<dt><a href="#age">age()</a></dt>
<dd><p>Aging translates into the creature&#39;s max speed reduction
or death (deletion) when none speed is left</p>
</dd>
<dt><a href="#adjustSpeed">adjustSpeed()</a></dt>
<dd><p>Adjust velocity to stay close to maxSpeed</p>
</dd>
<dt><a href="#boundaries">boundaries()</a></dt>
<dd><p>Prevents creatures from going beyond the edges</p>
</dd>
<dt><a href="#attemptReproduction">attemptReproduction(target, distance)</a></dt>
<dd><p>Attempt to reproduce creature</p>
</dd>
</dl>

<a name="initializeSpecies"></a>

## initializeSpecies()

Initializes creature's species

**Kind**: global function  
<a name="initializeColor"></a>

## initializeColor()

Initializes creature's color parameters

**Kind**: global function  
<a name="grow"></a>

## grow()

Add growth depending on metabolism

**Kind**: global function  
<a name="age"></a>

## age()

Aging translates into the creature's max speed reduction
or death (deletion) when none speed is left

**Kind**: global function  
<a name="adjustSpeed"></a>

## adjustSpeed()

Adjust velocity to stay close to maxSpeed

**Kind**: global function  
<a name="boundaries"></a>

## boundaries()

Prevents creatures from going beyond the edges

**Kind**: global function  
<a name="attemptReproduction"></a>

## attemptReproduction(target, distance)

Attempt to reproduce creature

**Kind**: global function

| Param    | Type                |
| -------- | ------------------- |
| target   | <code>Object</code> |
| distance | <code>number</code> |
