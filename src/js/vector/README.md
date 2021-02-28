<a name="Vector"></a>

## Vector

2D Matrix position

**Kind**: global class  
**Requires**: <code>module:lodash</code>

- [Vector](#Vector)
  - [new Vector([x], [y])](#new_Vector_new)
  - [.x](#Vector+x)
  - [.y](#Vector+y)
  - [.set([x], [y])](#Vector+set) ⇒ [<code>Vector</code>](#Vector)
  - [.random()](#Vector+random) ⇒ [<code>Vector</code>](#Vector)
  - [.add()](#Vector+add) ⇒ [<code>Vector</code>](#Vector)
  - [.sub()](#Vector+sub) ⇒ [<code>Vector</code>](#Vector)
  - [.mul()](#Vector+mul) ⇒ [<code>Vector</code>](#Vector)
  - [.div()](#Vector+div) ⇒ [<code>Vector</code>](#Vector)
  - [.mag()](#Vector+mag) ⇒ <code>number</code>
  - [.normalize()](#Vector+normalize) ⇒ [<code>Vector</code>](#Vector)
  - [.angle()](#Vector+angle) ⇒ <code>number</code>
  - [.setMag()](#Vector+setMag) ⇒ [<code>Vector</code>](#Vector)
  - [.setAngle()](#Vector+setAngle) ⇒ [<code>Vector</code>](#Vector)
  - [.rotate()](#Vector+rotate) ⇒ [<code>Vector</code>](#Vector)
  - [.limit()](#Vector+limit) ⇒ [<code>Vector</code>](#Vector)
  - [.angleBetween()](#Vector+angleBetween) ⇒ <code>number</code>
  - [.dot()](#Vector+dot) ⇒ <code>number</code>
  - [.lerp()](#Vector+lerp) ⇒ [<code>Vector</code>](#Vector)
  - [.dist()](#Vector+dist) ⇒ <code>number</code>
  - [.copy()](#Vector+copy) ⇒ [<code>Vector</code>](#Vector)

<a name="new_Vector_new"></a>

### new Vector([x], [y])

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

<a name="Vector+x"></a>

### vector.x

X position value

**Kind**: instance property of [<code>Vector</code>](#Vector)  
<a name="Vector+y"></a>

### vector.y

Y position value

**Kind**: instance property of [<code>Vector</code>](#Vector)  
<a name="Vector+set"></a>

### vector.set([x], [y]) ⇒ [<code>Vector</code>](#Vector)

Set position

**Kind**: instance method of [<code>Vector</code>](#Vector)

| Param | Type                | Default        | Description      |
| ----- | ------------------- | -------------- | ---------------- |
| [x]   | <code>number</code> | <code>0</code> | X position value |
| [y]   | <code>number</code> | <code>0</code> | Y position value |

<a name="Vector+random"></a>

### vector.random() ⇒ [<code>Vector</code>](#Vector)

Set random angle

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+add"></a>

### vector.add() ⇒ [<code>Vector</code>](#Vector)

Add to vector

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+sub"></a>

### vector.sub() ⇒ [<code>Vector</code>](#Vector)

Substract from vector

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+mul"></a>

### vector.mul() ⇒ [<code>Vector</code>](#Vector)

Multiply vector

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+div"></a>

### vector.div() ⇒ [<code>Vector</code>](#Vector)

Divide vector

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+mag"></a>

### vector.mag() ⇒ <code>number</code>

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+normalize"></a>

### vector.normalize() ⇒ [<code>Vector</code>](#Vector)

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+angle"></a>

### vector.angle() ⇒ <code>number</code>

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+setMag"></a>

### vector.setMag() ⇒ [<code>Vector</code>](#Vector)

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+setAngle"></a>

### vector.setAngle() ⇒ [<code>Vector</code>](#Vector)

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+rotate"></a>

### vector.rotate() ⇒ [<code>Vector</code>](#Vector)

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+limit"></a>

### vector.limit() ⇒ [<code>Vector</code>](#Vector)

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+angleBetween"></a>

### vector.angleBetween() ⇒ <code>number</code>

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+dot"></a>

### vector.dot() ⇒ <code>number</code>

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+lerp"></a>

### vector.lerp() ⇒ [<code>Vector</code>](#Vector)

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+dist"></a>

### vector.dist() ⇒ <code>number</code>

Calculates distance between current vector and the target

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+copy"></a>

### vector.copy() ⇒ [<code>Vector</code>](#Vector)

Builds a new vector with the same caractestics as this

**Kind**: instance method of [<code>Vector</code>](#Vector)
