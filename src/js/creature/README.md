## Modules

<dl>
<dt><a href="#module_Creature">Creature</a></dt>
<dd></dd>
</dl>

## Classes

<dl>
<dt><a href="#Creature">Creature</a></dt>
<dd><p>Artificial Intelligence based in perceptron neural networks that lives in a 2D world</p>
</dd>
</dl>

<a name="module_Creature"></a>

## Creature
<a name="Creature"></a>

## Creature
Artificial Intelligence based in perceptron neural networks that lives in a 2D world

**Kind**: global class  
**Requires**: <code>module:simulation</code>, <code>module:Vector</code>, <code>module:Brain</code>, <code>module:Draw</code>, <code>module:Body</code>  

* [Creature](#Creature)
    * [.moveTo()](#Creature+moveTo)
    * [.applyForce()](#Creature+applyForce)
    * [.draw()](#Creature+draw)
    * [.update()](#Creature+update)
    * [.seek(target)](#Creature+seek) ⇒ <code>Vector</code>
    * [.separate()](#Creature+separate) ⇒ <code>Vector</code>
    * [.normalizeSeparation()](#Creature+normalizeSeparation)
    * [.align()](#Creature+align) ⇒ <code>Vector</code>
    * [.addAlignmentTo()](#Creature+addAlignmentTo)
    * [.cohesion()](#Creature+cohesion) ⇒ <code>Vector</code>
    * [.applyCohesion()](#Creature+applyCohesion)

<a name="Creature+moveTo"></a>

### creature.moveTo()
Applies creature's movement

**Kind**: instance method of [<code>Creature</code>](#Creature)  
<a name="Creature+applyForce"></a>

### creature.applyForce()
Applies a vector force to the creature's momentum=

**Kind**: instance method of [<code>Creature</code>](#Creature)  
<a name="Creature+draw"></a>

### creature.draw()
Draws current's creature position and direction

**Kind**: instance method of [<code>Creature</code>](#Creature)  
<a name="Creature+update"></a>

### creature.update()
Update's creature

**Kind**: instance method of [<code>Creature</code>](#Creature)  
<a name="Creature+seek"></a>

### creature.seek(target) ⇒ <code>Vector</code>
Returns the force needed to move towards specific creature

**Kind**: instance method of [<code>Creature</code>](#Creature)  

| Param | Type |
| --- | --- |
| target | <code>Vector</code> | 

<a name="Creature+separate"></a>

### creature.separate() ⇒ <code>Vector</code>
Makes creature attempt to stay within reasonable distance
Triggers reproduction when creatures touch, depending on world reproduction chance

**Kind**: instance method of [<code>Creature</code>](#Creature)  
<a name="Creature+normalizeSeparation"></a>

### creature.normalizeSeparation()
Normalizes creature separation if they are within range

**Kind**: instance method of [<code>Creature</code>](#Creature)  
<a name="Creature+align"></a>

### creature.align() ⇒ <code>Vector</code>
Align to other creatures

**Kind**: instance method of [<code>Creature</code>](#Creature)  
<a name="Creature+addAlignmentTo"></a>

### creature.addAlignmentTo()
Adds force required to align to another creature

**Kind**: instance method of [<code>Creature</code>](#Creature)  
<a name="Creature+cohesion"></a>

### creature.cohesion() ⇒ <code>Vector</code>
Makes creature group with others

**Kind**: instance method of [<code>Creature</code>](#Creature)  
<a name="Creature+applyCohesion"></a>

### creature.applyCohesion()
Makes creature attempt to stay close to same species

**Kind**: instance method of [<code>Creature</code>](#Creature)  
