## Functions

<dl>
<dt><a href="#moveTo">moveTo()</a></dt>
<dd><p>Applies creature&#39;s movement</p>
</dd>
<dt><a href="#applyForce">applyForce()</a></dt>
<dd><p>Applies a vector force to the creature&#39;s momentum=</p>
</dd>
<dt><a href="#draw">draw()</a></dt>
<dd><p>Draws current&#39;s creature position and direction</p>
</dd>
<dt><a href="#update">update()</a></dt>
<dd><p>Update&#39;s creature</p>
</dd>
<dt><a href="#seek">seek(target)</a> ⇒ <code>Vector</code></dt>
<dd><p>Returns the force needed to move towards specific creature</p>
</dd>
<dt><a href="#separate">separate()</a> ⇒ <code>Vector</code></dt>
<dd><p>Makes creature attempt to stay within reasonable distance
Triggers reproduction when creatures touch, depending on world reproduction chance</p>
</dd>
<dt><a href="#normalizeSeparation">normalizeSeparation()</a></dt>
<dd><p>Normalizes creature separation if they are within range</p>
</dd>
<dt><a href="#align">align()</a> ⇒ <code>Vector</code></dt>
<dd><p>Align to other creatures</p>
</dd>
<dt><a href="#addAlignmentTo">addAlignmentTo()</a></dt>
<dd><p>Adds force required to align to another creature</p>
</dd>
<dt><a href="#cohesion">cohesion()</a> ⇒ <code>Vector</code></dt>
<dd><p>Makes creature group with others</p>
</dd>
<dt><a href="#applyCohesion">applyCohesion()</a></dt>
<dd><p>Makes creature attempt to stay close to same species</p>
</dd>
</dl>

<a name="moveTo"></a>

## moveTo()
Applies creature's movement

**Kind**: global function  
<a name="applyForce"></a>

## applyForce()
Applies a vector force to the creature's momentum=

**Kind**: global function  
<a name="draw"></a>

## draw()
Draws current's creature position and direction

**Kind**: global function  
<a name="update"></a>

## update()
Update's creature

**Kind**: global function  
<a name="seek"></a>

## seek(target) ⇒ <code>Vector</code>
Returns the force needed to move towards specific creature

**Kind**: global function  

| Param | Type |
| --- | --- |
| target | <code>Vector</code> | 

<a name="separate"></a>

## separate() ⇒ <code>Vector</code>
Makes creature attempt to stay within reasonable distance
Triggers reproduction when creatures touch, depending on world reproduction chance

**Kind**: global function  
<a name="normalizeSeparation"></a>

## normalizeSeparation()
Normalizes creature separation if they are within range

**Kind**: global function  
<a name="align"></a>

## align() ⇒ <code>Vector</code>
Align to other creatures

**Kind**: global function  
<a name="addAlignmentTo"></a>

## addAlignmentTo()
Adds force required to align to another creature

**Kind**: global function  
<a name="cohesion"></a>

## cohesion() ⇒ <code>Vector</code>
Makes creature group with others

**Kind**: global function  
<a name="applyCohesion"></a>

## applyCohesion()
Makes creature attempt to stay close to same species

**Kind**: global function  
