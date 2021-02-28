<a name="module_Vector"></a>

## Vector

**Requires**: <code>module:lodash</code>  
**See**: [https://github.com/cazala/synaptic](https://github.com/cazala/synaptic) based on work by @cazala 's Synaptic.

- [Vector](#module_Vector)
  - [~Vector](#module_Vector..Vector)
    - [new Vector([x], [y])](#new_module_Vector..Vector_new)
    - [.set([x], [y])](#module_Vector..Vector+set) ⇒ <code>Vector</code>
    - [.random()](#module_Vector..Vector+random) ⇒ <code>Vector</code>
    - [.add()](#module_Vector..Vector+add) ⇒ <code>Vector</code>
    - [.sub()](#module_Vector..Vector+sub) ⇒ <code>Vector</code>
    - [.mul()](#module_Vector..Vector+mul) ⇒ <code>Vector</code>
    - [.div()](#module_Vector..Vector+div) ⇒ <code>Vector</code>
    - [.mag()](#module_Vector..Vector+mag) ⇒ <code>number</code>
    - [.normalize()](#module_Vector..Vector+normalize) ⇒ <code>Vector</code>
    - [.angle()](#module_Vector..Vector+angle) ⇒ <code>number</code>
    - [.setMag()](#module_Vector..Vector+setMag) ⇒ <code>Vector</code>
    - [.setAngle()](#module_Vector..Vector+setAngle) ⇒ <code>Vector</code>
    - [.rotate()](#module_Vector..Vector+rotate) ⇒ <code>Vector</code>
    - [.limit()](#module_Vector..Vector+limit) ⇒ <code>Vector</code>
    - [.angleBetween()](#module_Vector..Vector+angleBetween) ⇒ <code>number</code>
    - [.dot()](#module_Vector..Vector+dot) ⇒ <code>number</code>
    - [.lerp()](#module_Vector..Vector+lerp) ⇒ <code>Vector</code>
    - [.dist()](#module_Vector..Vector+dist) ⇒ <code>number</code>
    - [.copy()](#module_Vector..Vector+copy) ⇒ <code>Vector</code>

<a name="module_Vector..Vector"></a>

### Vector~Vector

2D Matrix position

**Kind**: inner class of [<code>Vector</code>](#module_Vector)

- [~Vector](#module_Vector..Vector)
  - [new Vector([x], [y])](#new_module_Vector..Vector_new)
  - [.set([x], [y])](#module_Vector..Vector+set) ⇒ <code>Vector</code>
  - [.random()](#module_Vector..Vector+random) ⇒ <code>Vector</code>
  - [.add()](#module_Vector..Vector+add) ⇒ <code>Vector</code>
  - [.sub()](#module_Vector..Vector+sub) ⇒ <code>Vector</code>
  - [.mul()](#module_Vector..Vector+mul) ⇒ <code>Vector</code>
  - [.div()](#module_Vector..Vector+div) ⇒ <code>Vector</code>
  - [.mag()](#module_Vector..Vector+mag) ⇒ <code>number</code>
  - [.normalize()](#module_Vector..Vector+normalize) ⇒ <code>Vector</code>
  - [.angle()](#module_Vector..Vector+angle) ⇒ <code>number</code>
  - [.setMag()](#module_Vector..Vector+setMag) ⇒ <code>Vector</code>
  - [.setAngle()](#module_Vector..Vector+setAngle) ⇒ <code>Vector</code>
  - [.rotate()](#module_Vector..Vector+rotate) ⇒ <code>Vector</code>
  - [.limit()](#module_Vector..Vector+limit) ⇒ <code>Vector</code>
  - [.angleBetween()](#module_Vector..Vector+angleBetween) ⇒ <code>number</code>
  - [.dot()](#module_Vector..Vector+dot) ⇒ <code>number</code>
  - [.lerp()](#module_Vector..Vector+lerp) ⇒ <code>Vector</code>
  - [.dist()](#module_Vector..Vector+dist) ⇒ <code>number</code>
  - [.copy()](#module_Vector..Vector+copy) ⇒ <code>Vector</code>

<a name="new_module_Vector..Vector_new"></a>

#### new Vector([x], [y])

| Param | Type                | Default        | Description |
| ----- | ------------------- | -------------- | ----------- |
| [x]   | <code>number</code> | <code>0</code> | X value     |
| [y]   | <code>number</code> | <code>0</code> | Y value     |

**Example**

```js
const x = 1;
const y = 1;
const vector = new Vector(x, y);
```

<a name="module_Vector..Vector+set"></a>

#### vector.set([x], [y]) ⇒ <code>Vector</code>

**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)

| Param | Type                | Default        | Description |
| ----- | ------------------- | -------------- | ----------- |
| [x]   | <code>number</code> | <code>0</code> | X value     |
| [y]   | <code>number</code> | <code>0</code> | Y value     |

<a name="module_Vector..Vector+random"></a>

#### vector.random() ⇒ <code>Vector</code>

**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+add"></a>

#### vector.add() ⇒ <code>Vector</code>

**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+sub"></a>

#### vector.sub() ⇒ <code>Vector</code>

**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+mul"></a>

#### vector.mul() ⇒ <code>Vector</code>

**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+div"></a>

#### vector.div() ⇒ <code>Vector</code>

**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+mag"></a>

#### vector.mag() ⇒ <code>number</code>

**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+normalize"></a>

#### vector.normalize() ⇒ <code>Vector</code>

**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+angle"></a>

#### vector.angle() ⇒ <code>number</code>

**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+setMag"></a>

#### vector.setMag() ⇒ <code>Vector</code>

**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+setAngle"></a>

#### vector.setAngle() ⇒ <code>Vector</code>

**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+rotate"></a>

#### vector.rotate() ⇒ <code>Vector</code>

**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+limit"></a>

#### vector.limit() ⇒ <code>Vector</code>

**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+angleBetween"></a>

#### vector.angleBetween() ⇒ <code>number</code>

**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+dot"></a>

#### vector.dot() ⇒ <code>number</code>

**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+lerp"></a>

#### vector.lerp() ⇒ <code>Vector</code>

**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+dist"></a>

#### vector.dist() ⇒ <code>number</code>

Calculates distance between current vector and the target

**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
<a name="module_Vector..Vector+copy"></a>

#### vector.copy() ⇒ <code>Vector</code>

Builds a new vector with the same caractestics as this

**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)
