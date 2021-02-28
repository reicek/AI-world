## Functions

<dl>
<dt><a href="#log">log(world)</a></dt>
<dd><p>Update census results on log</p>
</dd>
<dt><a href="#newDeath">newDeath()</a></dt>
<dd><p>Register new death</p>
</dd>
<dt><a href="#newBirth">newBirth()</a></dt>
<dd><p>Register new birth</p>
</dd>
<dt><a href="#update">update()</a></dt>
<dd><p>Calculate population by species</p>
</dd>
<dt><a href="#reset">reset()</a></dt>
<dd><p>Reset counts results</p>
</dd>
<dt><a href="#minority">minority()</a></dt>
<dd><p>Least populated species</p>
</dd>
<dt><a href="#mayority">mayority()</a></dt>
<dd><p>Most populated species</p>
</dd>
<dt><a href="#list">list()</a></dt>
<dd><p>Census list</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Census">Census</a> : <code>Object</code></dt>
<dd><p>Population by species</p>
</dd>
</dl>

<a name="log"></a>

## log(world)

Update census results on log

**Kind**: global function

| Param | Type               | Description          |
| ----- | ------------------ | -------------------- |
| world | <code>World</code> | Simulation reference |

<a name="newDeath"></a>

## newDeath()

Register new death

**Kind**: global function  
<a name="newBirth"></a>

## newBirth()

Register new birth

**Kind**: global function  
<a name="update"></a>

## update()

Calculate population by species

**Kind**: global function  
<a name="reset"></a>

## reset()

Reset counts results

**Kind**: global function  
<a name="minority"></a>

## minority()

Least populated species

**Kind**: global function  
<a name="mayority"></a>

## mayority()

Most populated species

**Kind**: global function  
<a name="list"></a>

## list()

Census list

**Kind**: global function  
<a name="Census"></a>

## Census : <code>Object</code>

Population by species

**Kind**: global typedef  
**Properties**

| Name   | Type                | Description      |
| ------ | ------------------- | ---------------- |
| red    | <code>number</code> | Red population   |
| green  | <code>number</code> | Green population |
| blue   | <code>number</code> | Blue population  |
| births | <code>number</code> | Total births     |
| deaths | <code>number</code> | Total deaths     |
