## Modules

<dl>
<dt><a href="#module_js/census/census">js/census/census</a></dt>
<dd><p>Population registry</p>
</dd>
<dt><a href="#module_js/creature/body/body">js/creature/body/body</a></dt>
<dd><p>Helper methods for creature&#39;s body processes</p>
</dd>
<dt><a href="#module_js/creature/brain/brain">js/creature/brain/brain</a></dt>
<dd><p>Creature&#39;s mind</p>
</dd>
<dt><a href="#module_js/creature/creature">js/creature/creature</a></dt>
<dd><p>Artificial Intelligence based in perceptron neural networks that lives in a 2D world</p>
</dd>
<dt><a href="#module_js/creature/draw/draw">js/creature/draw/draw</a></dt>
<dd><p>Creature draw tools</p>
</dd>
<dt><a href="#module_eval">eval</a></dt>
<dd></dd>
<dt><a href="#module_js/vector/vector">js/vector/vector</a></dt>
<dd><p>2D Matrix position</p>
</dd>
<dt><a href="#module_js/world/world">js/world/world</a></dt>
<dd><p>2D environment for creatures</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#simulation">simulation</a></dt>
<dd><p>Wold simulation instance</p>
</dd>
<dt><a href="#RED_LOG">RED_LOG</a></dt>
<dd><p>Red logs</p>
</dd>
<dt><a href="#GREEN_LOG">GREEN_LOG</a></dt>
<dd><p>GREEN logs</p>
</dd>
<dt><a href="#BLUE_LOG">BLUE_LOG</a></dt>
<dd><p>Green logs</p>
</dd>
<dt><a href="#GRAY_LOG">GRAY_LOG</a></dt>
<dd><p>Gray logs</p>
</dd>
</dl>

<a name="module_js/census/census"></a>

## js/census/census
Population registry


* [js/census/census](#module_js/census/census)
    * [module.exports](#exp_module_js/census/census--module.exports) ⏏
        * [new module.exports()](#new_module_js/census/census--module.exports_new)
        * [.red](#module_js/census/census--module.exports+red)
        * [.green](#module_js/census/census--module.exports+green)
        * [.blue](#module_js/census/census--module.exports+blue)
        * [.births](#module_js/census/census--module.exports+births)
        * [.deaths](#module_js/census/census--module.exports+deaths)
        * [.log()](#module_js/census/census--module.exports+log)
        * [.newDeath()](#module_js/census/census--module.exports+newDeath)
        * [.newBirth()](#module_js/census/census--module.exports+newBirth)
        * [.update()](#module_js/census/census--module.exports+update)
        * [.reset()](#module_js/census/census--module.exports+reset)
        * [.minority()](#module_js/census/census--module.exports+minority)
        * [.mayority()](#module_js/census/census--module.exports+mayority)
        * [.list()](#module_js/census/census--module.exports+list)

<a name="exp_module_js/census/census--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_js/census/census--module.exports_new"></a>

#### new module.exports()
Create sensus

<a name="module_js/census/census--module.exports+red"></a>

#### module.exports.red
Red population

**Kind**: instance property of [<code>module.exports</code>](#exp_module_js/census/census--module.exports)  
<a name="module_js/census/census--module.exports+green"></a>

#### module.exports.green
Green population

**Kind**: instance property of [<code>module.exports</code>](#exp_module_js/census/census--module.exports)  
<a name="module_js/census/census--module.exports+blue"></a>

#### module.exports.blue
Blue population

**Kind**: instance property of [<code>module.exports</code>](#exp_module_js/census/census--module.exports)  
<a name="module_js/census/census--module.exports+births"></a>

#### module.exports.births
Total births

**Kind**: instance property of [<code>module.exports</code>](#exp_module_js/census/census--module.exports)  
<a name="module_js/census/census--module.exports+deaths"></a>

#### module.exports.deaths
Total deaths

**Kind**: instance property of [<code>module.exports</code>](#exp_module_js/census/census--module.exports)  
<a name="module_js/census/census--module.exports+log"></a>

#### module.exports.log()
Update census results on log

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/census/census--module.exports)  
<a name="module_js/census/census--module.exports+newDeath"></a>

#### module.exports.newDeath()
Registers a new death

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/census/census--module.exports)  
<a name="module_js/census/census--module.exports+newBirth"></a>

#### module.exports.newBirth()
Registers a new birth

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/census/census--module.exports)  
<a name="module_js/census/census--module.exports+update"></a>

#### module.exports.update()
Calculate population by species

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/census/census--module.exports)  
<a name="module_js/census/census--module.exports+reset"></a>

#### module.exports.reset()
Reset counts

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/census/census--module.exports)  
<a name="module_js/census/census--module.exports+minority"></a>

#### module.exports.minority()
Least populated species

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/census/census--module.exports)  
<a name="module_js/census/census--module.exports+mayority"></a>

#### module.exports.mayority()
Most populated species

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/census/census--module.exports)  
<a name="module_js/census/census--module.exports+list"></a>

#### module.exports.list()
Census list

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/census/census--module.exports)  
<a name="module_js/creature/body/body"></a>

## js/creature/body/body
Helper methods for creature's body processes

**Requires**: <code>module:lodash</code>, <code>module:jquery</code>  

* [js/creature/body/body](#module_js/creature/body/body)
    * [.initializeSpecies(creature, species)](#module_js/creature/body/body.initializeSpecies)
    * [.initializeColor(creature)](#module_js/creature/body/body.initializeColor)
    * [.grow(creature)](#module_js/creature/body/body.grow)
    * [.age(creature)](#module_js/creature/body/body.age)
    * [.adjustSpeed(creature)](#module_js/creature/body/body.adjustSpeed)
    * [.boundaries(creature)](#module_js/creature/body/body.boundaries)
    * [.attemptReproduction(creature, target, distance)](#module_js/creature/body/body.attemptReproduction)

<a name="module_js/creature/body/body.initializeSpecies"></a>

### js/creature/body/body.initializeSpecies(creature, species)
Initializes creature's species

**Kind**: static method of [<code>js/creature/body/body</code>](#module_js/creature/body/body)  

| Param | Type | Description |
| --- | --- | --- |
| creature | <code>Creature</code> | Creature reference |
| species | <code>&quot;red&quot;</code> \| <code>&quot;green&quot;</code> \| <code>&quot;blue&quot;</code> |  |

<a name="module_js/creature/body/body.initializeColor"></a>

### js/creature/body/body.initializeColor(creature)
Initializes creature's color parameters

**Kind**: static method of [<code>js/creature/body/body</code>](#module_js/creature/body/body)  

| Param | Type | Description |
| --- | --- | --- |
| creature | <code>Creature</code> | Creature reference |

<a name="module_js/creature/body/body.grow"></a>

### js/creature/body/body.grow(creature)
Add growth depending on metabolism

**Kind**: static method of [<code>js/creature/body/body</code>](#module_js/creature/body/body)  

| Param | Type | Description |
| --- | --- | --- |
| creature | <code>Creature</code> | Creature reference |

<a name="module_js/creature/body/body.age"></a>

### js/creature/body/body.age(creature)
Aging translates into the creature's max speed reduction
or death (deletion) when none speed is left

**Kind**: static method of [<code>js/creature/body/body</code>](#module_js/creature/body/body)  

| Param | Type | Description |
| --- | --- | --- |
| creature | <code>Creature</code> | Creature reference |

<a name="module_js/creature/body/body.adjustSpeed"></a>

### js/creature/body/body.adjustSpeed(creature)
Adjust velocity to stay close to maxSpeed

**Kind**: static method of [<code>js/creature/body/body</code>](#module_js/creature/body/body)  

| Param | Type | Description |
| --- | --- | --- |
| creature | <code>Creature</code> | Creature reference |

<a name="module_js/creature/body/body.boundaries"></a>

### js/creature/body/body.boundaries(creature)
Prevents creatures from going beyond the edges

**Kind**: static method of [<code>js/creature/body/body</code>](#module_js/creature/body/body)  

| Param | Type | Description |
| --- | --- | --- |
| creature | <code>Creature</code> | Creature reference |

<a name="module_js/creature/body/body.attemptReproduction"></a>

### js/creature/body/body.attemptReproduction(creature, target, distance)
Attempt to reproduce creature

**Kind**: static method of [<code>js/creature/body/body</code>](#module_js/creature/body/body)  

| Param | Type | Description |
| --- | --- | --- |
| creature | <code>Creature</code> | Creature reference |
| target | <code>Object</code> | Target creature |
| distance | <code>number</code> | Distance between creature and target |

<a name="module_js/creature/brain/brain"></a>

## js/creature/brain/brain
Creature's mind

**Requires**: <code>module:synaptic</code>  
**See**: [https://github.com/cazala/synaptic](https://github.com/cazala/synaptic) based on work by @cazala 's Synaptic.  

* [js/creature/brain/brain](#module_js/creature/brain/brain)
    * [module.exports](#exp_module_js/creature/brain/brain--module.exports) ⏏
        * [new module.exports(inputNeurons, hiddenNeurons, outputNeurons)](#new_module_js/creature/brain/brain--module.exports_new)
        * [.think()](#module_js/creature/brain/brain--module.exports+think)
        * [.learn()](#module_js/creature/brain/brain--module.exports+learn)

<a name="exp_module_js/creature/brain/brain--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
**See**

- [https://github.com/cazala/synaptic/wiki/Architect](https://github.com/cazala/synaptic/wiki/Architect)
- [https://github.com/cazala/synaptic/wiki/Networks](https://github.com/cazala/synaptic/wiki/Networks)

<a name="new_module_js/creature/brain/brain--module.exports_new"></a>

#### new module.exports(inputNeurons, hiddenNeurons, outputNeurons)
Create new neural network


| Param | Type | Default |
| --- | --- | --- |
| inputNeurons | <code>\*</code> | <code>4</code> | 
| hiddenNeurons | <code>\*</code> | <code>6</code> | 
| outputNeurons | <code>\*</code> | <code>3</code> | 

<a name="module_js/creature/brain/brain--module.exports+think"></a>

#### module.exports.think()
Think of where to move from current location

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/creature/brain/brain--module.exports)  
<a name="module_js/creature/brain/brain--module.exports+learn"></a>

#### module.exports.learn()
Learn how to move

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/creature/brain/brain--module.exports)  
<a name="module_js/creature/creature"></a>

## js/creature/creature
Artificial Intelligence based in perceptron neural networks that lives in a 2D world


* [js/creature/creature](#module_js/creature/creature)
    * [module.exports](#exp_module_js/creature/creature--module.exports) ⏏
        * [new module.exports(x, y, species, mass, inputNeurons, hiddenNeurons, outputNeurons)](#new_module_js/creature/creature--module.exports_new)
        * [.moveTo()](#module_js/creature/creature--module.exports+moveTo)
        * [.applyForce()](#module_js/creature/creature--module.exports+applyForce)
        * [.draw()](#module_js/creature/creature--module.exports+draw)
        * [.update()](#module_js/creature/creature--module.exports+update)
        * [.seek(target)](#module_js/creature/creature--module.exports+seek) ⇒ <code>Vector</code>
        * [.separate()](#module_js/creature/creature--module.exports+separate) ⇒ <code>Vector</code>
        * [.normalizeSeparation()](#module_js/creature/creature--module.exports+normalizeSeparation)
        * [.align()](#module_js/creature/creature--module.exports+align) ⇒ <code>Vector</code>
        * [.addAlignmentTo()](#module_js/creature/creature--module.exports+addAlignmentTo)
        * [.cohesion()](#module_js/creature/creature--module.exports+cohesion) ⇒ <code>Vector</code>
        * [.applyCohesion()](#module_js/creature/creature--module.exports+applyCohesion)

<a name="exp_module_js/creature/creature--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_js/creature/creature--module.exports_new"></a>

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

<a name="module_js/creature/creature--module.exports+moveTo"></a>

#### module.exports.moveTo()
Applies creature's movement

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/creature/creature--module.exports)  
<a name="module_js/creature/creature--module.exports+applyForce"></a>

#### module.exports.applyForce()
Applies a vector force to the creature's momentum=

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/creature/creature--module.exports)  
<a name="module_js/creature/creature--module.exports+draw"></a>

#### module.exports.draw()
Draws current's creature position and direction

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/creature/creature--module.exports)  
<a name="module_js/creature/creature--module.exports+update"></a>

#### module.exports.update()
Update's creature

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/creature/creature--module.exports)  
<a name="module_js/creature/creature--module.exports+seek"></a>

#### module.exports.seek(target) ⇒ <code>Vector</code>
Returns the force needed to move towards specific creature

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/creature/creature--module.exports)  

| Param | Type |
| --- | --- |
| target | <code>Vector</code> | 

<a name="module_js/creature/creature--module.exports+separate"></a>

#### module.exports.separate() ⇒ <code>Vector</code>
Makes creature attempt to stay within reasonable distance
Triggers reproduction when creatures touch, depending on world reproduction chance

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/creature/creature--module.exports)  
<a name="module_js/creature/creature--module.exports+normalizeSeparation"></a>

#### module.exports.normalizeSeparation()
Normalizes creature separation if they are within range

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/creature/creature--module.exports)  
<a name="module_js/creature/creature--module.exports+align"></a>

#### module.exports.align() ⇒ <code>Vector</code>
Align to other creatures

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/creature/creature--module.exports)  
<a name="module_js/creature/creature--module.exports+addAlignmentTo"></a>

#### module.exports.addAlignmentTo()
Adds force required to align to another creature

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/creature/creature--module.exports)  
<a name="module_js/creature/creature--module.exports+cohesion"></a>

#### module.exports.cohesion() ⇒ <code>Vector</code>
Makes creature group with others

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/creature/creature--module.exports)  
<a name="module_js/creature/creature--module.exports+applyCohesion"></a>

#### module.exports.applyCohesion()
Makes creature attempt to stay close to same species

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/creature/creature--module.exports)  
<a name="module_js/creature/draw/draw"></a>

## js/creature/draw/draw
Creature draw tools

<a name="module_js/creature/draw/draw.shape"></a>

### js/creature/draw/draw.shape(size, color, location)
Creates creature's shape

**Kind**: static method of [<code>js/creature/draw/draw</code>](#module_js/creature/draw/draw)  

| Param | Type |
| --- | --- |
| size | <code>\*</code> | 
| color | <code>\*</code> | 
| location | <code>\*</code> | 

<a name="module_eval"></a>

## eval
**See**: [https://github.com/cazala/synaptic](https://github.com/cazala/synaptic) based on work by @cazala 's Synaptic.  
<a name="module_eval..isNode"></a>

### eval~isNode : <code>object</code>
**Kind**: inner namespace of [<code>eval</code>](#module_eval)  
<a name="module_js/vector/vector"></a>

## js/vector/vector
2D Matrix position

**Requires**: <code>module:lodash</code>  

* [js/vector/vector](#module_js/vector/vector)
    * [module.exports](#exp_module_js/vector/vector--module.exports) ⏏
        * [new module.exports([x], [y])](#new_module_js/vector/vector--module.exports_new)
        * [.x](#module_js/vector/vector--module.exports+x)
        * [.y](#module_js/vector/vector--module.exports+y)
        * [.set([x], [y])](#module_js/vector/vector--module.exports+set) ⇒ <code>Vector</code>
        * [.random()](#module_js/vector/vector--module.exports+random) ⇒ <code>Vector</code>
        * [.add(vector)](#module_js/vector/vector--module.exports+add) ⇒ <code>Vector</code>
        * [.sub(vector)](#module_js/vector/vector--module.exports+sub) ⇒ <code>Vector</code>
        * [.mul(factor)](#module_js/vector/vector--module.exports+mul) ⇒ <code>Vector</code>
        * [.div(divisor)](#module_js/vector/vector--module.exports+div) ⇒ <code>Vector</code>
        * [.mag()](#module_js/vector/vector--module.exports+mag) ⇒ <code>number</code>
        * [.normalize()](#module_js/vector/vector--module.exports+normalize) ⇒ <code>Vector</code>
        * [.angle()](#module_js/vector/vector--module.exports+angle) ⇒ <code>number</code>
        * [.setMag()](#module_js/vector/vector--module.exports+setMag) ⇒ <code>Vector</code>
        * [.setAngle()](#module_js/vector/vector--module.exports+setAngle) ⇒ <code>Vector</code>
        * [.rotate()](#module_js/vector/vector--module.exports+rotate) ⇒ <code>Vector</code>
        * [.limit()](#module_js/vector/vector--module.exports+limit) ⇒ <code>Vector</code>
        * [.angleBetween()](#module_js/vector/vector--module.exports+angleBetween) ⇒ <code>number</code>
        * [.dot()](#module_js/vector/vector--module.exports+dot) ⇒ <code>number</code>
        * [.lerp()](#module_js/vector/vector--module.exports+lerp) ⇒ <code>Vector</code>
        * [.dist()](#module_js/vector/vector--module.exports+dist) ⇒ <code>number</code>
        * [.copy()](#module_js/vector/vector--module.exports+copy) ⇒ <code>Vector</code>

<a name="exp_module_js/vector/vector--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_js/vector/vector--module.exports_new"></a>

#### new module.exports([x], [y])
Create vector


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [x] | <code>number</code> | <code>0</code> | Initial X position value |
| [y] | <code>number</code> | <code>0</code> | Initial Y position value |

**Example**  
```js
const x = 1;
    const y = 1;
    const vector = new Vector(x, y);
```
<a name="module_js/vector/vector--module.exports+x"></a>

#### module.exports.x
X position value

**Kind**: instance property of [<code>module.exports</code>](#exp_module_js/vector/vector--module.exports)  
<a name="module_js/vector/vector--module.exports+y"></a>

#### module.exports.y
Y position value

**Kind**: instance property of [<code>module.exports</code>](#exp_module_js/vector/vector--module.exports)  
<a name="module_js/vector/vector--module.exports+set"></a>

#### module.exports.set([x], [y]) ⇒ <code>Vector</code>
Set position

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/vector/vector--module.exports)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [x] | <code>number</code> | <code>0</code> | X position value |
| [y] | <code>number</code> | <code>0</code> | Y position value |

<a name="module_js/vector/vector--module.exports+random"></a>

#### module.exports.random() ⇒ <code>Vector</code>
Set random angle

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/vector/vector--module.exports)  
<a name="module_js/vector/vector--module.exports+add"></a>

#### module.exports.add(vector) ⇒ <code>Vector</code>
Add to vector

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/vector/vector--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>Vector</code> | Addend |

<a name="module_js/vector/vector--module.exports+sub"></a>

#### module.exports.sub(vector) ⇒ <code>Vector</code>
Substract from vector

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/vector/vector--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>Vector</code> | Subtrahend |

<a name="module_js/vector/vector--module.exports+mul"></a>

#### module.exports.mul(factor) ⇒ <code>Vector</code>
Multiply vector

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/vector/vector--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| factor | <code>number</code> | Multiplication factor |

<a name="module_js/vector/vector--module.exports+div"></a>

#### module.exports.div(divisor) ⇒ <code>Vector</code>
Divide vector

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/vector/vector--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| divisor | <code>number</code> | Division divisor |

<a name="module_js/vector/vector--module.exports+mag"></a>

#### module.exports.mag() ⇒ <code>number</code>
Vector's magnitude

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/vector/vector--module.exports)  
<a name="module_js/vector/vector--module.exports+normalize"></a>

#### module.exports.normalize() ⇒ <code>Vector</code>
Normalize

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/vector/vector--module.exports)  
<a name="module_js/vector/vector--module.exports+angle"></a>

#### module.exports.angle() ⇒ <code>number</code>
Vector's angle

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/vector/vector--module.exports)  
<a name="module_js/vector/vector--module.exports+setMag"></a>

#### module.exports.setMag() ⇒ <code>Vector</code>
Set magnitude

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/vector/vector--module.exports)  
<a name="module_js/vector/vector--module.exports+setAngle"></a>

#### module.exports.setAngle() ⇒ <code>Vector</code>
Set Angle

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/vector/vector--module.exports)  
<a name="module_js/vector/vector--module.exports+rotate"></a>

#### module.exports.rotate() ⇒ <code>Vector</code>
Rotate vector

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/vector/vector--module.exports)  
<a name="module_js/vector/vector--module.exports+limit"></a>

#### module.exports.limit() ⇒ <code>Vector</code>
Limit magnitude to 1

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/vector/vector--module.exports)  
<a name="module_js/vector/vector--module.exports+angleBetween"></a>

#### module.exports.angleBetween() ⇒ <code>number</code>
**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/vector/vector--module.exports)  
<a name="module_js/vector/vector--module.exports+dot"></a>

#### module.exports.dot() ⇒ <code>number</code>
**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/vector/vector--module.exports)  
<a name="module_js/vector/vector--module.exports+lerp"></a>

#### module.exports.lerp() ⇒ <code>Vector</code>
**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/vector/vector--module.exports)  
<a name="module_js/vector/vector--module.exports+dist"></a>

#### module.exports.dist() ⇒ <code>number</code>
Calculates distance between current vector and the target

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/vector/vector--module.exports)  
<a name="module_js/vector/vector--module.exports+copy"></a>

#### module.exports.copy() ⇒ <code>Vector</code>
Builds a new vector with the same caractestics as this

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/vector/vector--module.exports)  
<a name="module_js/world/world"></a>

## js/world/world
2D environment for creatures


* [js/world/world](#module_js/world/world)
    * [module.exports](#exp_module_js/world/world--module.exports) ⏏
        * [new module.exports([topPopulation], [id], [species])](#new_module_js/world/world--module.exports_new)
        * [.cycles](#module_js/world/world--module.exports+cycles)
        * [.learningRate](#module_js/world/world--module.exports+learningRate)
        * [.id](#module_js/world/world--module.exports+id)
        * [.creatures](#module_js/world/world--module.exports+creatures)
        * [.species](#module_js/world/world--module.exports+species)
        * [.topPopulation](#module_js/world/world--module.exports+topPopulation)
        * [.census](#module_js/world/world--module.exports+census)
        * [.initialPopulation](#module_js/world/world--module.exports+initialPopulation)
        * [.mousePosition](#module_js/world/world--module.exports+mousePosition)
        * [.launch()](#module_js/world/world--module.exports+launch)
        * [.initializeCanvas()](#module_js/world/world--module.exports+initializeCanvas)
        * [.getMousePosition()](#module_js/world/world--module.exports+getMousePosition)
        * [.initializePopulation()](#module_js/world/world--module.exports+initializePopulation)
        * [.startListeners()](#module_js/world/world--module.exports+startListeners)
        * [.increasePopulation(x, y)](#module_js/world/world--module.exports+increasePopulation)
        * [.decreasePopulation()](#module_js/world/world--module.exports+decreasePopulation)
        * [.spawnCreature(x, y, species, mass)](#module_js/world/world--module.exports+spawnCreature)
        * [.removeCreature(creature)](#module_js/world/world--module.exports+removeCreature)
        * [.drawNextFrame()](#module_js/world/world--module.exports+drawNextFrame)
        * [.adjustPopulationGrowth()](#module_js/world/world--module.exports+adjustPopulationGrowth)
        * [.updateCreatures()](#module_js/world/world--module.exports+updateCreatures)

<a name="exp_module_js/world/world--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_js/world/world--module.exports_new"></a>

#### new module.exports([topPopulation], [id], [species])
Create World


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [topPopulation] | <code>number</code> | <code>100</code> | World's maximum population |
| [id] | <code>string</code> | <code>&quot;&#x27;world&#x27;&quot;</code> | Canvas id |
| [species] | <code>Array.&lt;string&gt;</code> | <code>[&#x27;red&#x27;, &#x27;green&#x27;, &#x27;blue&#x27;]</code> | Available species |

**Example**  
```js
const world = new World();
    const customWorld = new World(200, 'customWorld');
```
<a name="module_js/world/world--module.exports+cycles"></a>

#### module.exports.cycles
Cycles counter

**Kind**: instance property of [<code>module.exports</code>](#exp_module_js/world/world--module.exports)  
<a name="module_js/world/world--module.exports+learningRate"></a>

#### module.exports.learningRate
Learning rate for all creatures in this world

**Kind**: instance property of [<code>module.exports</code>](#exp_module_js/world/world--module.exports)  
<a name="module_js/world/world--module.exports+id"></a>

#### module.exports.id
Canvas id

**Kind**: instance property of [<code>module.exports</code>](#exp_module_js/world/world--module.exports)  
<a name="module_js/world/world--module.exports+creatures"></a>

#### module.exports.creatures
Creatures array

**Kind**: instance property of [<code>module.exports</code>](#exp_module_js/world/world--module.exports)  
<a name="module_js/world/world--module.exports+species"></a>

#### module.exports.species
Available species

**Kind**: instance property of [<code>module.exports</code>](#exp_module_js/world/world--module.exports)  
<a name="module_js/world/world--module.exports+topPopulation"></a>

#### module.exports.topPopulation
World's maximum population

**Kind**: instance property of [<code>module.exports</code>](#exp_module_js/world/world--module.exports)  
<a name="module_js/world/world--module.exports+census"></a>

#### module.exports.census
Census instance

**Kind**: instance property of [<code>module.exports</code>](#exp_module_js/world/world--module.exports)  
<a name="module_js/world/world--module.exports+initialPopulation"></a>

#### module.exports.initialPopulation
Initial population

**Kind**: instance property of [<code>module.exports</code>](#exp_module_js/world/world--module.exports)  
<a name="module_js/world/world--module.exports+mousePosition"></a>

#### module.exports.mousePosition
Mouse position

**Kind**: instance property of [<code>module.exports</code>](#exp_module_js/world/world--module.exports)  
<a name="module_js/world/world--module.exports+launch"></a>

#### module.exports.launch()
Start simulation

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/world/world--module.exports)  
<a name="module_js/world/world--module.exports+initializeCanvas"></a>

#### module.exports.initializeCanvas()
Canvas Setup

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/world/world--module.exports)  
<a name="module_js/world/world--module.exports+getMousePosition"></a>

#### module.exports.getMousePosition()
Store current mouse position

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/world/world--module.exports)  
<a name="module_js/world/world--module.exports+initializePopulation"></a>

#### module.exports.initializePopulation()
Spawn first creatures

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/world/world--module.exports)  
<a name="module_js/world/world--module.exports+startListeners"></a>

#### module.exports.startListeners()
Events listeners

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/world/world--module.exports)  
<a name="module_js/world/world--module.exports+increasePopulation"></a>

#### module.exports.increasePopulation(x, y)
Increases the least populated species

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/world/world--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | New creature's coordinate on the X axis |
| y | <code>number</code> | New creature's coordinate on the Y axis |

<a name="module_js/world/world--module.exports+decreasePopulation"></a>

#### module.exports.decreasePopulation()
Removes oldest (slowest) creature

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/world/world--module.exports)  
<a name="module_js/world/world--module.exports+spawnCreature"></a>

#### module.exports.spawnCreature(x, y, species, mass)
Adds a new crature to the simulation

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/world/world--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | New creature's coordinate on the X axis |
| y | <code>number</code> | New creature's coordinate on the Y axis |
| species | <code>&#x27;red&#x27;</code> \| <code>&#x27;green&#x27;</code> \| <code>&#x27;blue&#x27;</code> |  |
| mass | <code>number</code> | New creature's initial mass |

<a name="module_js/world/world--module.exports+removeCreature"></a>

#### module.exports.removeCreature(creature)
Removes a creature from the simulation

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/world/world--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| creature | <code>Creature</code> | Target to remove |

<a name="module_js/world/world--module.exports+drawNextFrame"></a>

#### module.exports.drawNextFrame()
Adjust population and draws creatures next move

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/world/world--module.exports)  
<a name="module_js/world/world--module.exports+adjustPopulationGrowth"></a>

#### module.exports.adjustPopulationGrowth()
Adjust world population growth to prevent overpopulation or full extintion

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/world/world--module.exports)  
<a name="module_js/world/world--module.exports+updateCreatures"></a>

#### module.exports.updateCreatures()
Draws creatures next move

**Kind**: instance method of [<code>module.exports</code>](#exp_module_js/world/world--module.exports)  
<a name="simulation"></a>

## simulation
Wold simulation instance

**Kind**: global constant  
<a name="RED_LOG"></a>

## RED\_LOG
Red logs

**Kind**: global constant  
<a name="GREEN_LOG"></a>

## GREEN\_LOG
GREEN logs

**Kind**: global constant  
<a name="BLUE_LOG"></a>

## BLUE\_LOG
Green logs

**Kind**: global constant  
<a name="GRAY_LOG"></a>

## GRAY\_LOG
Gray logs

**Kind**: global constant  
