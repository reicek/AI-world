<a name="Census"></a>

## Census

Census registry

**Kind**: global class  
**Requires**: <code>module:lodash</code>, <code>module:jquery</code>

- [Census](#Census)
  - [.red](#Census+red)
  - [.green](#Census+green)
  - [.blue](#Census+blue)
  - [.births](#Census+births)
  - [.deaths](#Census+deaths)
  - [.log(world)](#Census+log)
  - [.update(world)](#Census+update)
  - [.reset()](#Census+reset)
  - [.minority()](#Census+minority)
  - [.mayority()](#Census+mayority)
  - [.list()](#Census+list)

<a name="Census+red"></a>

### census.red

Red population

**Kind**: instance property of [<code>Census</code>](#Census)  
<a name="Census+green"></a>

### census.green

Green population

**Kind**: instance property of [<code>Census</code>](#Census)  
<a name="Census+blue"></a>

### census.blue

Blue population

**Kind**: instance property of [<code>Census</code>](#Census)  
<a name="Census+births"></a>

### census.births

Total births

**Kind**: instance property of [<code>Census</code>](#Census)  
<a name="Census+deaths"></a>

### census.deaths

Total deaths

**Kind**: instance property of [<code>Census</code>](#Census)  
<a name="Census+log"></a>

### census.log(world)

Update census results on log

**Kind**: instance method of [<code>Census</code>](#Census)

| Param | Type               | Description          |
| ----- | ------------------ | -------------------- |
| world | <code>World</code> | Simulation reference |

<a name="Census+update"></a>

### census.update(world)

Calculate population by species

**Kind**: instance method of [<code>Census</code>](#Census)

| Param | Type               | Description          |
| ----- | ------------------ | -------------------- |
| world | <code>World</code> | Simulation reference |

<a name="Census+reset"></a>

### census.reset()

Reset counts results

**Kind**: instance method of [<code>Census</code>](#Census)  
<a name="Census+minority"></a>

### census.minority()

Least populated species

**Kind**: instance method of [<code>Census</code>](#Census)  
<a name="Census+mayority"></a>

### census.mayority()

Most populated species

**Kind**: instance method of [<code>Census</code>](#Census)  
<a name="Census+list"></a>

### census.list()

Census list

**Kind**: instance method of [<code>Census</code>](#Census)
