<a name="Census"></a>

## Census
Census registry

**Kind**: global class  
**Requires**: <code>module:lodash</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| red | <code>number</code> | Red population |
| green | <code>number</code> | Green population |
| blue | <code>number</code> | Blue population |
| births | <code>number</code> | Total births |
| deaths | <code>number</code> | Total deaths |
| logColor | <code>string</code> | Log color for this species |


* [Census](#Census)
    * [.log()](#Census+log)
    * [.logPopulation(species)](#Census+logPopulation)
    * [.getSpeciesColor(species)](#Census+getSpeciesColor)
    * [.newDeath()](#Census+newDeath)
    * [.newBirth()](#Census+newBirth)
    * [.update()](#Census+update)
    * [.reset()](#Census+reset)
    * [.minority()](#Census+minority)
    * [.mayority()](#Census+mayority)
    * [.list()](#Census+list)

<a name="Census+log"></a>

### census.log()
Clears the log and shows the census results

**Kind**: instance method of [<code>Census</code>](#Census)  
<a name="Census+logPopulation"></a>

### census.logPopulation(species)
Show current population and reproduction chance of a species

**Kind**: instance method of [<code>Census</code>](#Census)  

| Param | Type | Description |
| --- | --- | --- |
| species | <code>string</code> | Target species |

**Example**  
```js
this.logPopulation('red');
```
<a name="Census+getSpeciesColor"></a>

### census.getSpeciesColor(species)
Returns RGB color for a particular species

**Kind**: instance method of [<code>Census</code>](#Census)  

| Param | Type | Description |
| --- | --- | --- |
| species | <code>string</code> | Target species |

**Example**  
```js
this.getSpeciesColor('red');
```
<a name="Census+newDeath"></a>

### census.newDeath()
Increase deaths count

**Kind**: instance method of [<code>Census</code>](#Census)  
<a name="Census+newBirth"></a>

### census.newBirth()
Increase births count

**Kind**: instance method of [<code>Census</code>](#Census)  
<a name="Census+update"></a>

### census.update()
Calculates population by species

**Kind**: instance method of [<code>Census</code>](#Census)  
<a name="Census+reset"></a>

### census.reset()
Return counts results to inital state

**Kind**: instance method of [<code>Census</code>](#Census)  
<a name="Census+minority"></a>

### census.minority()
Returns the least populated species

**Kind**: instance method of [<code>Census</code>](#Census)  
<a name="Census+mayority"></a>

### census.mayority()
Returns the most populated species

**Kind**: instance method of [<code>Census</code>](#Census)  
<a name="Census+list"></a>

### census.list()
Census list

**Kind**: instance method of [<code>Census</code>](#Census)  
