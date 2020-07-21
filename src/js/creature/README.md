<a name="module_Creature"></a>

## Creature
**Requires**: <code>module:lodash</code>, <code>module:World</code>, <code>module:Vector</code>, <code>module:DrawCreature</code>, <code>module:CreatureBrain</code>, <code>module:CreatureBody</code>  

* [Creature](#module_Creature)
    * [~Creature](#module_Creature..Creature)
        * [.moveTo()](#module_Creature..Creature+moveTo)
        * [.applyForce()](#module_Creature..Creature+applyForce)
        * [.draw()](#module_Creature..Creature+draw)
        * [.update()](#module_Creature..Creature+update)
        * [.seek(target)](#module_Creature..Creature+seek) ⇒ <code>Vector</code>
        * [.separate()](#module_Creature..Creature+separate) ⇒ <code>Vector</code>
        * [.normalizeSeparation()](#module_Creature..Creature+normalizeSeparation)
        * [.align()](#module_Creature..Creature+align) ⇒ <code>Vector</code>
        * [.addAlignmentTo()](#module_Creature..Creature+addAlignmentTo)
        * [.cohesion()](#module_Creature..Creature+cohesion) ⇒ <code>Vector</code>
        * [.applyCohesion()](#module_Creature..Creature+applyCohesion)

<a name="module_Creature..Creature"></a>

### Creature~Creature
Artificial Intelligence based in perceptron neural networks that lives in a 2D world

**Kind**: inner class of [<code>Creature</code>](#module_Creature)  

* [~Creature](#module_Creature..Creature)
    * [.moveTo()](#module_Creature..Creature+moveTo)
    * [.applyForce()](#module_Creature..Creature+applyForce)
    * [.draw()](#module_Creature..Creature+draw)
    * [.update()](#module_Creature..Creature+update)
    * [.seek(target)](#module_Creature..Creature+seek) ⇒ <code>Vector</code>
    * [.separate()](#module_Creature..Creature+separate) ⇒ <code>Vector</code>
    * [.normalizeSeparation()](#module_Creature..Creature+normalizeSeparation)
    * [.align()](#module_Creature..Creature+align) ⇒ <code>Vector</code>
    * [.addAlignmentTo()](#module_Creature..Creature+addAlignmentTo)
    * [.cohesion()](#module_Creature..Creature+cohesion) ⇒ <code>Vector</code>
    * [.applyCohesion()](#module_Creature..Creature+applyCohesion)

<a name="module_Creature..Creature+moveTo"></a>

#### creature.moveTo()
Applies creature's movement

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)  
<a name="module_Creature..Creature+applyForce"></a>

#### creature.applyForce()
Applies a vector force to the creature's momentum=

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)  
<a name="module_Creature..Creature+draw"></a>

#### creature.draw()
Draws current's creature position and direction

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)  
<a name="module_Creature..Creature+update"></a>

#### creature.update()
Update's creature

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)  
<a name="module_Creature..Creature+seek"></a>

#### creature.seek(target) ⇒ <code>Vector</code>
Returns the force needed to move towards specific creature

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)  

| Param | Type |
| --- | --- |
| target | <code>Vector</code> | 

<a name="module_Creature..Creature+separate"></a>

#### creature.separate() ⇒ <code>Vector</code>
Makes creature attempt to stay within reasonable distance
Triggers reproduction when creatures touch, depending on world reproduction chance

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)  
<a name="module_Creature..Creature+normalizeSeparation"></a>

#### creature.normalizeSeparation()
Normalizes creature separation if they are within range

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)  
<a name="module_Creature..Creature+align"></a>

#### creature.align() ⇒ <code>Vector</code>
Align to other creatures

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)  
<a name="module_Creature..Creature+addAlignmentTo"></a>

#### creature.addAlignmentTo()
Adds force required to align to another creature

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)  
<a name="module_Creature..Creature+cohesion"></a>

#### creature.cohesion() ⇒ <code>Vector</code>
Makes creature group with others

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)  
<a name="module_Creature..Creature+applyCohesion"></a>

#### creature.applyCohesion()
Makes creature attempt to stay close to same species

**Kind**: instance method of [<code>Creature</code>](#module_Creature..Creature)  
