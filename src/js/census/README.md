<a name="module_Census"></a>

## Census
**Requires**: <code>module:lodash</code>  

* [Census](#module_Census)
    * [~Census](#module_Census..Census) : <code>Object</code>
        * [.log()](#module_Census..Census+log)
        * [.update()](#module_Census..Census+update)
        * [.reset()](#module_Census..Census+reset)
        * [.minority()](#module_Census..Census+minority)
        * [.mayority()](#module_Census..Census+mayority)
        * [.list()](#module_Census..Census+list)

<a name="module_Census..Census"></a>

### Census~Census : <code>Object</code>
Population by species

**Kind**: inner typedef of [<code>Census</code>](#module_Census)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| red | <code>number</code> | Red population |
| green | <code>number</code> | Green population |
| blue | <code>number</code> | Blue population |


* [~Census](#module_Census..Census) : <code>Object</code>
    * [.log()](#module_Census..Census+log)
    * [.update()](#module_Census..Census+update)
    * [.reset()](#module_Census..Census+reset)
    * [.minority()](#module_Census..Census+minority)
    * [.mayority()](#module_Census..Census+mayority)
    * [.list()](#module_Census..Census+list)

<a name="module_Census..Census+log"></a>

#### census.log()
Clears the log and shows the census results

**Kind**: instance method of [<code>Census</code>](#module_Census..Census)  
<a name="module_Census..Census+update"></a>

#### census.update()
Calculates population by species

**Kind**: instance method of [<code>Census</code>](#module_Census..Census)  
<a name="module_Census..Census+reset"></a>

#### census.reset()
Return counts results to inital state

**Kind**: instance method of [<code>Census</code>](#module_Census..Census)  
<a name="module_Census..Census+minority"></a>

#### census.minority()
Returns the least populated species

**Kind**: instance method of [<code>Census</code>](#module_Census..Census)  
<a name="module_Census..Census+mayority"></a>

#### census.mayority()
Returns the most populated species

**Kind**: instance method of [<code>Census</code>](#module_Census..Census)  
<a name="module_Census..Census+list"></a>

#### census.list()
Census list

**Kind**: instance method of [<code>Census</code>](#module_Census..Census)  
