## Modules

<dl>
<dt><a href="#module_Census Population registry">Census Population registry</a></dt>
<dd></dd>
<dt><a href="#module_Body Helper methods for creatures body processes">Body Helper methods for creatures body processes</a></dt>
<dd></dd>
<dt><a href="#module_Brain Creatures mind">Brain Creatures mind</a></dt>
<dd></dd>
<dt><a href="#module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world">Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world</a></dt>
<dd></dd>
<dt><a href="#module_Draw Creature draw tools">Draw Creature draw tools</a></dt>
<dd></dd>
<dt><a href="#module_eval">eval</a></dt>
<dd></dd>
<dt><a href="#module_Vector 2D Matrix position">Vector 2D Matrix position</a></dt>
<dd></dd>
<dt><a href="#module_World 2D environment for creatures">World 2D environment for creatures</a></dt>
<dd></dd>
</dl>

## Constants

<dl>
<dt><a href="#simulation">simulation</a></dt>
<dd><p>Wold simulation instance</p>
</dd>
</dl>

<a name="module_Census Population registry"></a>

## Census Population registry

- [Census Population registry](#module_Census Population registry)
  - [module.exports](#exp_module_Census Population registry--module.exports) ⏏
    - [new module.exports()](#new_module_Census Population registry--module.exports_new)
    - [.red](#module_Census Population registry--module.exports+red)
    - [.green](#module_Census Population registry--module.exports+green)
    - [.blue](#module_Census Population registry--module.exports+blue)
    - [.births](#module_Census Population registry--module.exports+births)
    - [.deaths](#module_Census Population registry--module.exports+deaths)
    - [.log()](#module_Census Population registry--module.exports+log)
    - [.newDeath()](#module_Census Population registry--module.exports+newDeath)
    - [.newBirth()](#module_Census Population registry--module.exports+newBirth)
    - [.update()](#module_Census Population registry--module.exports+update)
    - [.reset()](#module_Census Population registry--module.exports+reset)
    - [.minority()](#module_Census Population registry--module.exports+minority)
    - [.mayority()](#module_Census Population registry--module.exports+mayority)
    - [.list()](#module_Census Population registry--module.exports+list)

<a name="exp_module_Census Population registry--module.exports"></a>

### module.exports ⏏

**Kind**: Exported class  
<a name="new_module_Census Population registry--module.exports_new"></a>

#### new module.exports()

Create sensus

<a name="module_Census Population registry--module.exports+red"></a>

#### module.exports.red

Red population

**Kind**: instance property of [<code>module.exports</code>](#exp_module_Census Population registry--module.exports)  
<a name="module_Census Population registry--module.exports+green"></a>

#### module.exports.green

Green population

**Kind**: instance property of [<code>module.exports</code>](#exp_module_Census Population registry--module.exports)  
<a name="module_Census Population registry--module.exports+blue"></a>

#### module.exports.blue

Blue population

**Kind**: instance property of [<code>module.exports</code>](#exp_module_Census Population registry--module.exports)  
<a name="module_Census Population registry--module.exports+births"></a>

#### module.exports.births

Total births

**Kind**: instance property of [<code>module.exports</code>](#exp_module_Census Population registry--module.exports)  
<a name="module_Census Population registry--module.exports+deaths"></a>

#### module.exports.deaths

Total deaths

**Kind**: instance property of [<code>module.exports</code>](#exp_module_Census Population registry--module.exports)  
<a name="module_Census Population registry--module.exports+log"></a>

#### module.exports.log()

Update census results on log

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Census Population registry--module.exports)  
<a name="module_Census Population registry--module.exports+newDeath"></a>

#### module.exports.newDeath()

Registers a new death

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Census Population registry--module.exports)  
<a name="module_Census Population registry--module.exports+newBirth"></a>

#### module.exports.newBirth()

Registers a new birth

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Census Population registry--module.exports)  
<a name="module_Census Population registry--module.exports+update"></a>

#### module.exports.update()

Calculate population by species

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Census Population registry--module.exports)  
<a name="module_Census Population registry--module.exports+reset"></a>

#### module.exports.reset()

Reset counts

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Census Population registry--module.exports)  
<a name="module_Census Population registry--module.exports+minority"></a>

#### module.exports.minority()

Least populated species

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Census Population registry--module.exports)  
<a name="module_Census Population registry--module.exports+mayority"></a>

#### module.exports.mayority()

Most populated species

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Census Population registry--module.exports)  
<a name="module_Census Population registry--module.exports+list"></a>

#### module.exports.list()

Census list

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Census Population registry--module.exports)  
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

<a name="module_Brain Creatures mind"></a>

## Brain Creatures mind

**Requires**: <code>module:synaptic</code>  
**See**: [https://github.com/cazala/synaptic](https://github.com/cazala/synaptic) based on work by @cazala 's Synaptic.

- [Brain Creatures mind](#module_Brain Creatures mind)
  - [module.exports](#exp_module_Brain Creatures mind--module.exports) ⏏
    - [new module.exports(inputNeurons, hiddenNeurons, outputNeurons)](#new_module_Brain Creatures mind--module.exports_new)
    - [.think()](#module_Brain Creatures mind--module.exports+think)
    - [.learn()](#module_Brain Creatures mind--module.exports+learn)

<a name="exp_module_Brain Creatures mind--module.exports"></a>

### module.exports ⏏

**Kind**: Exported class  
**See**

- [https://github.com/cazala/synaptic/wiki/Architect](https://github.com/cazala/synaptic/wiki/Architect)
- [https://github.com/cazala/synaptic/wiki/Networks](https://github.com/cazala/synaptic/wiki/Networks)

<a name="new_module_Brain Creatures mind--module.exports_new"></a>

#### new module.exports(inputNeurons, hiddenNeurons, outputNeurons)

Create new neural network

| Param         | Type            | Default        |
| ------------- | --------------- | -------------- |
| inputNeurons  | <code>\*</code> | <code>4</code> |
| hiddenNeurons | <code>\*</code> | <code>6</code> |
| outputNeurons | <code>\*</code> | <code>3</code> |

<a name="module_Brain Creatures mind--module.exports+think"></a>

#### module.exports.think()

Think of where to move from current location

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Brain Creatures mind--module.exports)  
<a name="module_Brain Creatures mind--module.exports+learn"></a>

#### module.exports.learn()

Learn how to move

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Brain Creatures mind--module.exports)  
<a name="module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world"></a>

## Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world

- [Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world](#module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world)
  - [module.exports](#exp_module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports) ⏏
    - [new module.exports(x, y, species, mass, inputNeurons, hiddenNeurons, outputNeurons)](#new_module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports_new)
    - [.moveTo()](#module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports+moveTo)
    - [.applyForce()](#module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports+applyForce)
    - [.draw()](#module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports+draw)
    - [.update()](#module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports+update)
    - [.seek(target)](#module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports+seek) ⇒ <code>Vector</code>
    - [.separate()](#module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports+separate) ⇒ <code>Vector</code>
    - [.normalizeSeparation()](#module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports+normalizeSeparation)
    - [.align()](#module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports+align) ⇒ <code>Vector</code>
    - [.addAlignmentTo()](#module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports+addAlignmentTo)
    - [.cohesion()](#module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports+cohesion) ⇒ <code>Vector</code>
    - [.applyCohesion()](#module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports+applyCohesion)

<a name="exp_module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports"></a>

### module.exports ⏏

**Kind**: Exported class  
<a name="new_module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports_new"></a>

#### new module.exports(x, y, species, mass, inputNeurons, hiddenNeurons, outputNeurons)

Create creature

| Param         | Type            |
| ------------- | --------------- |
| x             | <code>\*</code> |
| y             | <code>\*</code> |
| species       | <code>\*</code> |
| mass          | <code>\*</code> |
| inputNeurons  | <code>\*</code> |
| hiddenNeurons | <code>\*</code> |
| outputNeurons | <code>\*</code> |

<a name="module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports+moveTo"></a>

#### module.exports.moveTo()

Applies creature's movement

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports)  
<a name="module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports+applyForce"></a>

#### module.exports.applyForce()

Applies a vector force to the creature's momentum=

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports)  
<a name="module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports+draw"></a>

#### module.exports.draw()

Draws current's creature position and direction

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports)  
<a name="module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports+update"></a>

#### module.exports.update()

Update's creature

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports)  
<a name="module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports+seek"></a>

#### module.exports.seek(target) ⇒ <code>Vector</code>

Returns the force needed to move towards specific creature

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports)

| Param  | Type                |
| ------ | ------------------- |
| target | <code>Vector</code> |

<a name="module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports+separate"></a>

#### module.exports.separate() ⇒ <code>Vector</code>

Makes creature attempt to stay within reasonable distance
Triggers reproduction when creatures touch, depending on world reproduction chance

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports)  
<a name="module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports+normalizeSeparation"></a>

#### module.exports.normalizeSeparation()

Normalizes creature separation if they are within range

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports)  
<a name="module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports+align"></a>

#### module.exports.align() ⇒ <code>Vector</code>

Align to other creatures

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports)  
<a name="module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports+addAlignmentTo"></a>

#### module.exports.addAlignmentTo()

Adds force required to align to another creature

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports)  
<a name="module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports+cohesion"></a>

#### module.exports.cohesion() ⇒ <code>Vector</code>

Makes creature group with others

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports)  
<a name="module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports+applyCohesion"></a>

#### module.exports.applyCohesion()

Makes creature attempt to stay close to same species

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Creature Artificial Intelligence based in perceptron neural networks that lives in a 2D world--module.exports)  
<a name="module_Draw Creature draw tools"></a>

## Draw Creature draw tools

<a name="module_Draw Creature draw tools.shape"></a>

### Draw Creature draw tools.shape(size, color, location)

Creates creature's shape

**Kind**: static method of [<code>Draw Creature draw tools</code>](#module_Draw Creature draw tools)

| Param    | Type            |
| -------- | --------------- |
| size     | <code>\*</code> |
| color    | <code>\*</code> |
| location | <code>\*</code> |

<a name="module_eval"></a>

## eval

**See**: [https://github.com/cazala/synaptic](https://github.com/cazala/synaptic) based on work by @cazala 's Synaptic.  
<a name="module_eval..isNode"></a>

### eval~isNode : <code>object</code>

**Kind**: inner namespace of [<code>eval</code>](#module_eval)  
<a name="module_Vector 2D Matrix position"></a>

## Vector 2D Matrix position

**Requires**: <code>module:lodash</code>

- [Vector 2D Matrix position](#module_Vector 2D Matrix position)
  - [module.exports](#exp_module_Vector 2D Matrix position--module.exports) ⏏
    - [new module.exports([x], [y])](#new_module_Vector 2D Matrix position--module.exports_new)
    - [.x](#module_Vector 2D Matrix position--module.exports+x)
    - [.y](#module_Vector 2D Matrix position--module.exports+y)
    - [.set([x], [y])](#module_Vector 2D Matrix position--module.exports+set) ⇒ <code>Vector</code>
    - [.random()](#module_Vector 2D Matrix position--module.exports+random) ⇒ <code>Vector</code>
    - [.add()](#module_Vector 2D Matrix position--module.exports+add) ⇒ <code>Vector</code>
    - [.sub()](#module_Vector 2D Matrix position--module.exports+sub) ⇒ <code>Vector</code>
    - [.mul()](#module_Vector 2D Matrix position--module.exports+mul) ⇒ <code>Vector</code>
    - [.div()](#module_Vector 2D Matrix position--module.exports+div) ⇒ <code>Vector</code>
    - [.mag()](#module_Vector 2D Matrix position--module.exports+mag) ⇒ <code>number</code>
    - [.normalize()](#module_Vector 2D Matrix position--module.exports+normalize) ⇒ <code>Vector</code>
    - [.angle()](#module_Vector 2D Matrix position--module.exports+angle) ⇒ <code>number</code>
    - [.setMag()](#module_Vector 2D Matrix position--module.exports+setMag) ⇒ <code>Vector</code>
    - [.setAngle()](#module_Vector 2D Matrix position--module.exports+setAngle) ⇒ <code>Vector</code>
    - [.rotate()](#module_Vector 2D Matrix position--module.exports+rotate) ⇒ <code>Vector</code>
    - [.limit()](#module_Vector 2D Matrix position--module.exports+limit) ⇒ <code>Vector</code>
    - [.angleBetween()](#module_Vector 2D Matrix position--module.exports+angleBetween) ⇒ <code>number</code>
    - [.dot()](#module_Vector 2D Matrix position--module.exports+dot) ⇒ <code>number</code>
    - [.lerp()](#module_Vector 2D Matrix position--module.exports+lerp) ⇒ <code>Vector</code>
    - [.dist()](#module_Vector 2D Matrix position--module.exports+dist) ⇒ <code>number</code>
    - [.copy()](#module_Vector 2D Matrix position--module.exports+copy) ⇒ <code>Vector</code>

<a name="exp_module_Vector 2D Matrix position--module.exports"></a>

### module.exports ⏏

**Kind**: Exported class  
<a name="new_module_Vector 2D Matrix position--module.exports_new"></a>

#### new module.exports([x], [y])

Create vector

| Param | Type                | Default        | Description      |
| ----- | ------------------- | -------------- | ---------------- |
| [x]   | <code>number</code> | <code>0</code> | X position value |
| [y]   | <code>number</code> | <code>0</code> | Y position value |

**Example**

```js
const x = 1;
const y = 1;
const vector = new Vector(x, y);
```

<a name="module_Vector 2D Matrix position--module.exports+x"></a>

#### module.exports.x

X position value

**Kind**: instance property of [<code>module.exports</code>](#exp_module_Vector 2D Matrix position--module.exports)  
<a name="module_Vector 2D Matrix position--module.exports+y"></a>

#### module.exports.y

Y position value

**Kind**: instance property of [<code>module.exports</code>](#exp_module_Vector 2D Matrix position--module.exports)  
<a name="module_Vector 2D Matrix position--module.exports+set"></a>

#### module.exports.set([x], [y]) ⇒ <code>Vector</code>

Set position

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Vector 2D Matrix position--module.exports)

| Param | Type                | Default        | Description      |
| ----- | ------------------- | -------------- | ---------------- |
| [x]   | <code>number</code> | <code>0</code> | X position value |
| [y]   | <code>number</code> | <code>0</code> | Y position value |

<a name="module_Vector 2D Matrix position--module.exports+random"></a>

#### module.exports.random() ⇒ <code>Vector</code>

Set random angle

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Vector 2D Matrix position--module.exports)  
<a name="module_Vector 2D Matrix position--module.exports+add"></a>

#### module.exports.add() ⇒ <code>Vector</code>

Add to vector

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Vector 2D Matrix position--module.exports)  
<a name="module_Vector 2D Matrix position--module.exports+sub"></a>

#### module.exports.sub() ⇒ <code>Vector</code>

Substract from vector

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Vector 2D Matrix position--module.exports)  
<a name="module_Vector 2D Matrix position--module.exports+mul"></a>

#### module.exports.mul() ⇒ <code>Vector</code>

Multiply vector

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Vector 2D Matrix position--module.exports)  
<a name="module_Vector 2D Matrix position--module.exports+div"></a>

#### module.exports.div() ⇒ <code>Vector</code>

Divide vector

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Vector 2D Matrix position--module.exports)  
<a name="module_Vector 2D Matrix position--module.exports+mag"></a>

#### module.exports.mag() ⇒ <code>number</code>

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Vector 2D Matrix position--module.exports)  
<a name="module_Vector 2D Matrix position--module.exports+normalize"></a>

#### module.exports.normalize() ⇒ <code>Vector</code>

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Vector 2D Matrix position--module.exports)  
<a name="module_Vector 2D Matrix position--module.exports+angle"></a>

#### module.exports.angle() ⇒ <code>number</code>

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Vector 2D Matrix position--module.exports)  
<a name="module_Vector 2D Matrix position--module.exports+setMag"></a>

#### module.exports.setMag() ⇒ <code>Vector</code>

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Vector 2D Matrix position--module.exports)  
<a name="module_Vector 2D Matrix position--module.exports+setAngle"></a>

#### module.exports.setAngle() ⇒ <code>Vector</code>

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Vector 2D Matrix position--module.exports)  
<a name="module_Vector 2D Matrix position--module.exports+rotate"></a>

#### module.exports.rotate() ⇒ <code>Vector</code>

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Vector 2D Matrix position--module.exports)  
<a name="module_Vector 2D Matrix position--module.exports+limit"></a>

#### module.exports.limit() ⇒ <code>Vector</code>

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Vector 2D Matrix position--module.exports)  
<a name="module_Vector 2D Matrix position--module.exports+angleBetween"></a>

#### module.exports.angleBetween() ⇒ <code>number</code>

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Vector 2D Matrix position--module.exports)  
<a name="module_Vector 2D Matrix position--module.exports+dot"></a>

#### module.exports.dot() ⇒ <code>number</code>

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Vector 2D Matrix position--module.exports)  
<a name="module_Vector 2D Matrix position--module.exports+lerp"></a>

#### module.exports.lerp() ⇒ <code>Vector</code>

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Vector 2D Matrix position--module.exports)  
<a name="module_Vector 2D Matrix position--module.exports+dist"></a>

#### module.exports.dist() ⇒ <code>number</code>

Calculates distance between current vector and the target

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Vector 2D Matrix position--module.exports)  
<a name="module_Vector 2D Matrix position--module.exports+copy"></a>

#### module.exports.copy() ⇒ <code>Vector</code>

Builds a new vector with the same caractestics as this

**Kind**: instance method of [<code>module.exports</code>](#exp_module_Vector 2D Matrix position--module.exports)  
<a name="module_World 2D environment for creatures"></a>

## World 2D environment for creatures

- [World 2D environment for creatures](#module_World 2D environment for creatures)
  - [module.exports](#exp_module_World 2D environment for creatures--module.exports) ⏏
    - [new module.exports([topPopulation], [id], [species])](#new_module_World 2D environment for creatures--module.exports_new)
    - [.cycles](#module_World 2D environment for creatures--module.exports+cycles)
    - [.learningRate](#module_World 2D environment for creatures--module.exports+learningRate)
    - [.id](#module_World 2D environment for creatures--module.exports+id)
    - [.creatures](#module_World 2D environment for creatures--module.exports+creatures)
    - [.species](#module_World 2D environment for creatures--module.exports+species)
    - [.topPopulation](#module_World 2D environment for creatures--module.exports+topPopulation)
    - [.census](#module_World 2D environment for creatures--module.exports+census)
    - [.initialPopulation](#module_World 2D environment for creatures--module.exports+initialPopulation)
    - [.mousePosition](#module_World 2D environment for creatures--module.exports+mousePosition)
    - [.launch()](#module_World 2D environment for creatures--module.exports+launch)
    - [.initializeCanvas()](#module_World 2D environment for creatures--module.exports+initializeCanvas)
    - [.getMousePosition()](#module_World 2D environment for creatures--module.exports+getMousePosition)
    - [.initializePopulation()](#module_World 2D environment for creatures--module.exports+initializePopulation)
    - [.startListeners()](#module_World 2D environment for creatures--module.exports+startListeners)
    - [.increasePopulation(x, y)](#module_World 2D environment for creatures--module.exports+increasePopulation)
    - [.decreasePopulation()](#module_World 2D environment for creatures--module.exports+decreasePopulation)
    - [.spawnCreature(x, y, species, mass)](#module_World 2D environment for creatures--module.exports+spawnCreature)
    - [.removeCreature(creature)](#module_World 2D environment for creatures--module.exports+removeCreature)
    - [.drawNextFrame()](#module_World 2D environment for creatures--module.exports+drawNextFrame)
    - [.adjustPopulationGrowth()](#module_World 2D environment for creatures--module.exports+adjustPopulationGrowth)
    - [.updateCreatures()](#module_World 2D environment for creatures--module.exports+updateCreatures)

<a name="exp_module_World 2D environment for creatures--module.exports"></a>

### module.exports ⏏

**Kind**: Exported class  
<a name="new_module_World 2D environment for creatures--module.exports_new"></a>

#### new module.exports([topPopulation], [id], [species])

Create World

| Param           | Type                              | Default                                                             | Description                |
| --------------- | --------------------------------- | ------------------------------------------------------------------- | -------------------------- |
| [topPopulation] | <code>number</code>               | <code>100</code>                                                    | World's maximum population |
| [id]            | <code>string</code>               | <code>&quot;&#x27;world&#x27;&quot;</code>                          | Canvas id                  |
| [species]       | <code>Array.&lt;string&gt;</code> | <code>[&#x27;red&#x27;, &#x27;green&#x27;, &#x27;blue&#x27;]</code> | Available species          |

**Example**

```js
const world = new World();
const customWorld = new World(200, 'customWorld');
```

<a name="module_World 2D environment for creatures--module.exports+cycles"></a>

#### module.exports.cycles

Cycles counter

**Kind**: instance property of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+learningRate"></a>

#### module.exports.learningRate

Learning rate for all creatures in this world

**Kind**: instance property of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+id"></a>

#### module.exports.id

Canvas id

**Kind**: instance property of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+creatures"></a>

#### module.exports.creatures

Creatures array

**Kind**: instance property of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+species"></a>

#### module.exports.species

Available species

**Kind**: instance property of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+topPopulation"></a>

#### module.exports.topPopulation

World's maximum population

**Kind**: instance property of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+census"></a>

#### module.exports.census

Census instance

**Kind**: instance property of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+initialPopulation"></a>

#### module.exports.initialPopulation

Initial population

**Kind**: instance property of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+mousePosition"></a>

#### module.exports.mousePosition

Mouse position

**Kind**: instance property of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+launch"></a>

#### module.exports.launch()

Start simulation

**Kind**: instance method of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+initializeCanvas"></a>

#### module.exports.initializeCanvas()

Canvas Setup

**Kind**: instance method of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+getMousePosition"></a>

#### module.exports.getMousePosition()

Store current mouse position

**Kind**: instance method of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+initializePopulation"></a>

#### module.exports.initializePopulation()

Spawn first creatures

**Kind**: instance method of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+startListeners"></a>

#### module.exports.startListeners()

Events listeners

**Kind**: instance method of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+increasePopulation"></a>

#### module.exports.increasePopulation(x, y)

Increases the least populated species

**Kind**: instance method of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)

| Param | Type                | Description                             |
| ----- | ------------------- | --------------------------------------- |
| x     | <code>number</code> | New creature's coordinate on the X axis |
| y     | <code>number</code> | New creature's coordinate on the Y axis |

<a name="module_World 2D environment for creatures--module.exports+decreasePopulation"></a>

#### module.exports.decreasePopulation()

Removes oldest (slowest) creature

**Kind**: instance method of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+spawnCreature"></a>

#### module.exports.spawnCreature(x, y, species, mass)

Adds a new crature to the simulation

**Kind**: instance method of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)

| Param   | Type                                                                                            | Description                             |
| ------- | ----------------------------------------------------------------------------------------------- | --------------------------------------- |
| x       | <code>number</code>                                                                             | New creature's coordinate on the X axis |
| y       | <code>number</code>                                                                             | New creature's coordinate on the Y axis |
| species | <code>&#x27;red&#x27;</code> \| <code>&#x27;green&#x27;</code> \| <code>&#x27;blue&#x27;</code> |                                         |
| mass    | <code>number</code>                                                                             | New creature's initial mass             |

<a name="module_World 2D environment for creatures--module.exports+removeCreature"></a>

#### module.exports.removeCreature(creature)

Removes a creature from the simulation

**Kind**: instance method of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)

| Param    | Type                  | Description      |
| -------- | --------------------- | ---------------- |
| creature | <code>Creature</code> | Target to remove |

<a name="module_World 2D environment for creatures--module.exports+drawNextFrame"></a>

#### module.exports.drawNextFrame()

Adjust population and draws creatures next move

**Kind**: instance method of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+adjustPopulationGrowth"></a>

#### module.exports.adjustPopulationGrowth()

Adjust world population growth to prevent overpopulation or full extintion

**Kind**: instance method of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="module_World 2D environment for creatures--module.exports+updateCreatures"></a>

#### module.exports.updateCreatures()

Draws creatures next move

**Kind**: instance method of [<code>module.exports</code>](#exp_module_World 2D environment for creatures--module.exports)  
<a name="simulation"></a>

## simulation

Wold simulation instance

**Kind**: global constant
