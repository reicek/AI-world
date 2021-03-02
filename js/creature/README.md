<a name="module_creature"></a>

## creature
Artificial Intelligence based in perceptron neural networks that lives in a 2D world


* [creature](#module_creature)
    * [module.exports](#exp_module_creature--module.exports) ⏏
        * [new module.exports(x, y, species, mass, inputNeurons, hiddenNeurons, outputNeurons)](#new_module_creature--module.exports_new)
        * [.moveTo()](#module_creature--module.exports+moveTo)
        * [.applyForce()](#module_creature--module.exports+applyForce)
        * [.draw()](#module_creature--module.exports+draw)
        * [.update()](#module_creature--module.exports+update)
        * [.seek(target)](#module_creature--module.exports+seek) ⇒ <code>Vector</code>
        * [.separate()](#module_creature--module.exports+separate) ⇒ <code>Vector</code>
        * [.normalizeSeparation()](#module_creature--module.exports+normalizeSeparation)
        * [.align()](#module_creature--module.exports+align) ⇒ <code>Vector</code>
        * [.addAlignmentTo()](#module_creature--module.exports+addAlignmentTo)
        * [.cohesion()](#module_creature--module.exports+cohesion) ⇒ <code>Vector</code>
        * [.applyCohesion()](#module_creature--module.exports+applyCohesion)

<a name="exp_module_creature--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_creature--module.exports_new"></a>

#### new module.exports(x, y, species, mass, inputNeurons, hiddenNeurons, outputNeurons)
Create creature


| Param | Type |
| --- | --- |
| x | <code>\*</code> | 
| y | <code>\*</code> | 
| species | <code>\*</code> | 
| mass | <code>\*</code> | 
| inputNeurons | <code>\*</code> | 
| hiddenNeurons | <code>\*</code> | 
| outputNeurons | <code>\*</code> | 

<a name="module_creature--module.exports+moveTo"></a>

#### module.exports.moveTo()
Applies creature's movement

**Kind**: instance method of [<code>module.exports</code>](#exp_module_creature--module.exports)  
<a name="module_creature--module.exports+applyForce"></a>

#### module.exports.applyForce()
Applies a vector force to the creature's momentum=

**Kind**: instance method of [<code>module.exports</code>](#exp_module_creature--module.exports)  
<a name="module_creature--module.exports+draw"></a>

#### module.exports.draw()
Draws current's creature position and direction

**Kind**: instance method of [<code>module.exports</code>](#exp_module_creature--module.exports)  
<a name="module_creature--module.exports+update"></a>

#### module.exports.update()
Update's creature

**Kind**: instance method of [<code>module.exports</code>](#exp_module_creature--module.exports)  
<a name="module_creature--module.exports+seek"></a>

#### module.exports.seek(target) ⇒ <code>Vector</code>
Returns the force needed to move towards specific creature

**Kind**: instance method of [<code>module.exports</code>](#exp_module_creature--module.exports)  

| Param | Type |
| --- | --- |
| target | <code>Vector</code> | 

<a name="module_creature--module.exports+separate"></a>

#### module.exports.separate() ⇒ <code>Vector</code>
Makes creature attempt to stay within reasonable distance
Triggers reproduction when creatures touch, depending on world reproduction chance

**Kind**: instance method of [<code>module.exports</code>](#exp_module_creature--module.exports)  
<a name="module_creature--module.exports+normalizeSeparation"></a>

#### module.exports.normalizeSeparation()
Normalizes creature separation if they are within range

**Kind**: instance method of [<code>module.exports</code>](#exp_module_creature--module.exports)  
<a name="module_creature--module.exports+align"></a>

#### module.exports.align() ⇒ <code>Vector</code>
Align to other creatures

**Kind**: instance method of [<code>module.exports</code>](#exp_module_creature--module.exports)  
<a name="module_creature--module.exports+addAlignmentTo"></a>

#### module.exports.addAlignmentTo()
Adds force required to align to another creature

**Kind**: instance method of [<code>module.exports</code>](#exp_module_creature--module.exports)  
<a name="module_creature--module.exports+cohesion"></a>

#### module.exports.cohesion() ⇒ <code>Vector</code>
Makes creature group with others

**Kind**: instance method of [<code>module.exports</code>](#exp_module_creature--module.exports)  
<a name="module_creature--module.exports+applyCohesion"></a>

#### module.exports.applyCohesion()
Makes creature attempt to stay close to same species

**Kind**: instance method of [<code>module.exports</code>](#exp_module_creature--module.exports)  
