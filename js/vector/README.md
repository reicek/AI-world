<a name="module_vector"></a>

## vector
2D Matrix position

**Requires**: <code>module:lodash</code>  

* [vector](#module_vector)
    * [module.exports](#exp_module_vector--module.exports) ⏏
        * [new module.exports([x], [y])](#new_module_vector--module.exports_new)
        * [.x](#module_vector--module.exports+x)
        * [.y](#module_vector--module.exports+y)
        * [.set([x], [y])](#module_vector--module.exports+set) ⇒ <code>Vector</code>
        * [.random()](#module_vector--module.exports+random) ⇒ <code>Vector</code>
        * [.add(vector)](#module_vector--module.exports+add) ⇒ <code>Vector</code>
        * [.sub(vector)](#module_vector--module.exports+sub) ⇒ <code>Vector</code>
        * [.mul(factor)](#module_vector--module.exports+mul) ⇒ <code>Vector</code>
        * [.div(divisor)](#module_vector--module.exports+div) ⇒ <code>Vector</code>
        * [.mag()](#module_vector--module.exports+mag) ⇒ <code>number</code>
        * [.normalize()](#module_vector--module.exports+normalize) ⇒ <code>Vector</code>
        * [.angle()](#module_vector--module.exports+angle) ⇒ <code>number</code>
        * [.setMag()](#module_vector--module.exports+setMag) ⇒ <code>Vector</code>
        * [.setAngle()](#module_vector--module.exports+setAngle) ⇒ <code>Vector</code>
        * [.rotate()](#module_vector--module.exports+rotate) ⇒ <code>Vector</code>
        * [.limit()](#module_vector--module.exports+limit) ⇒ <code>Vector</code>
        * [.angleBetween()](#module_vector--module.exports+angleBetween) ⇒ <code>number</code>
        * [.dot()](#module_vector--module.exports+dot) ⇒ <code>number</code>
        * [.lerp()](#module_vector--module.exports+lerp) ⇒ <code>Vector</code>
        * [.dist()](#module_vector--module.exports+dist) ⇒ <code>number</code>
        * [.copy()](#module_vector--module.exports+copy) ⇒ <code>Vector</code>

<a name="exp_module_vector--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_vector--module.exports_new"></a>

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
<a name="module_vector--module.exports+x"></a>

#### module.exports.x
X position value

**Kind**: instance property of [<code>module.exports</code>](#exp_module_vector--module.exports)  
<a name="module_vector--module.exports+y"></a>

#### module.exports.y
Y position value

**Kind**: instance property of [<code>module.exports</code>](#exp_module_vector--module.exports)  
<a name="module_vector--module.exports+set"></a>

#### module.exports.set([x], [y]) ⇒ <code>Vector</code>
Set position

**Kind**: instance method of [<code>module.exports</code>](#exp_module_vector--module.exports)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [x] | <code>number</code> | <code>0</code> | X position value |
| [y] | <code>number</code> | <code>0</code> | Y position value |

<a name="module_vector--module.exports+random"></a>

#### module.exports.random() ⇒ <code>Vector</code>
Set random angle

**Kind**: instance method of [<code>module.exports</code>](#exp_module_vector--module.exports)  
<a name="module_vector--module.exports+add"></a>

#### module.exports.add(vector) ⇒ <code>Vector</code>
Add to vector

**Kind**: instance method of [<code>module.exports</code>](#exp_module_vector--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>Vector</code> | Addend |

<a name="module_vector--module.exports+sub"></a>

#### module.exports.sub(vector) ⇒ <code>Vector</code>
Substract from vector

**Kind**: instance method of [<code>module.exports</code>](#exp_module_vector--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>Vector</code> | Subtrahend |

<a name="module_vector--module.exports+mul"></a>

#### module.exports.mul(factor) ⇒ <code>Vector</code>
Multiply vector

**Kind**: instance method of [<code>module.exports</code>](#exp_module_vector--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| factor | <code>number</code> | Multiplication factor |

<a name="module_vector--module.exports+div"></a>

#### module.exports.div(divisor) ⇒ <code>Vector</code>
Divide vector

**Kind**: instance method of [<code>module.exports</code>](#exp_module_vector--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| divisor | <code>number</code> | Division divisor |

<a name="module_vector--module.exports+mag"></a>

#### module.exports.mag() ⇒ <code>number</code>
Vector's magnitude

**Kind**: instance method of [<code>module.exports</code>](#exp_module_vector--module.exports)  
<a name="module_vector--module.exports+normalize"></a>

#### module.exports.normalize() ⇒ <code>Vector</code>
Normalize

**Kind**: instance method of [<code>module.exports</code>](#exp_module_vector--module.exports)  
<a name="module_vector--module.exports+angle"></a>

#### module.exports.angle() ⇒ <code>number</code>
Vector's angle

**Kind**: instance method of [<code>module.exports</code>](#exp_module_vector--module.exports)  
<a name="module_vector--module.exports+setMag"></a>

#### module.exports.setMag() ⇒ <code>Vector</code>
Set magnitude

**Kind**: instance method of [<code>module.exports</code>](#exp_module_vector--module.exports)  
<a name="module_vector--module.exports+setAngle"></a>

#### module.exports.setAngle() ⇒ <code>Vector</code>
Set Angle

**Kind**: instance method of [<code>module.exports</code>](#exp_module_vector--module.exports)  
<a name="module_vector--module.exports+rotate"></a>

#### module.exports.rotate() ⇒ <code>Vector</code>
Rotate vector

**Kind**: instance method of [<code>module.exports</code>](#exp_module_vector--module.exports)  
<a name="module_vector--module.exports+limit"></a>

#### module.exports.limit() ⇒ <code>Vector</code>
Limit magnitude to 1

**Kind**: instance method of [<code>module.exports</code>](#exp_module_vector--module.exports)  
<a name="module_vector--module.exports+angleBetween"></a>

#### module.exports.angleBetween() ⇒ <code>number</code>
**Kind**: instance method of [<code>module.exports</code>](#exp_module_vector--module.exports)  
<a name="module_vector--module.exports+dot"></a>

#### module.exports.dot() ⇒ <code>number</code>
**Kind**: instance method of [<code>module.exports</code>](#exp_module_vector--module.exports)  
<a name="module_vector--module.exports+lerp"></a>

#### module.exports.lerp() ⇒ <code>Vector</code>
**Kind**: instance method of [<code>module.exports</code>](#exp_module_vector--module.exports)  
<a name="module_vector--module.exports+dist"></a>

#### module.exports.dist() ⇒ <code>number</code>
Calculates distance between current vector and the target

**Kind**: instance method of [<code>module.exports</code>](#exp_module_vector--module.exports)  
<a name="module_vector--module.exports+copy"></a>

#### module.exports.copy() ⇒ <code>Vector</code>
Builds a new vector with the same caractestics as this

**Kind**: instance method of [<code>module.exports</code>](#exp_module_vector--module.exports)  
