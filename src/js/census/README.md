## Modules

<dl>
<dt><a href="#module_census">census</a></dt>
<dd><p>Population registry</p>
</dd>
</dl>

## Constants

<dl>
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

<a name="module_census"></a>

## census

Population registry

- [census](#module_census)
  - [module.exports](#exp_module_census--module.exports) ⏏
    - [new module.exports()](#new_module_census--module.exports_new)
    - [.red](#module_census--module.exports+red)
    - [.green](#module_census--module.exports+green)
    - [.blue](#module_census--module.exports+blue)
    - [.births](#module_census--module.exports+births)
    - [.deaths](#module_census--module.exports+deaths)
    - [.log()](#module_census--module.exports+log)
    - [.newDeath()](#module_census--module.exports+newDeath)
    - [.newBirth()](#module_census--module.exports+newBirth)
    - [.update()](#module_census--module.exports+update)
    - [.reset()](#module_census--module.exports+reset)
    - [.minority()](#module_census--module.exports+minority)
    - [.mayority()](#module_census--module.exports+mayority)
    - [.list()](#module_census--module.exports+list)

<a name="exp_module_census--module.exports"></a>

### module.exports ⏏

**Kind**: Exported class  
<a name="new_module_census--module.exports_new"></a>

#### new module.exports()

Create sensus

<a name="module_census--module.exports+red"></a>

#### module.exports.red

Red population

**Kind**: instance property of [<code>module.exports</code>](#exp_module_census--module.exports)  
<a name="module_census--module.exports+green"></a>

#### module.exports.green

Green population

**Kind**: instance property of [<code>module.exports</code>](#exp_module_census--module.exports)  
<a name="module_census--module.exports+blue"></a>

#### module.exports.blue

Blue population

**Kind**: instance property of [<code>module.exports</code>](#exp_module_census--module.exports)  
<a name="module_census--module.exports+births"></a>

#### module.exports.births

Total births

**Kind**: instance property of [<code>module.exports</code>](#exp_module_census--module.exports)  
<a name="module_census--module.exports+deaths"></a>

#### module.exports.deaths

Total deaths

**Kind**: instance property of [<code>module.exports</code>](#exp_module_census--module.exports)  
<a name="module_census--module.exports+log"></a>

#### module.exports.log()

Update census results on log

**Kind**: instance method of [<code>module.exports</code>](#exp_module_census--module.exports)  
<a name="module_census--module.exports+newDeath"></a>

#### module.exports.newDeath()

Registers a new death

**Kind**: instance method of [<code>module.exports</code>](#exp_module_census--module.exports)  
<a name="module_census--module.exports+newBirth"></a>

#### module.exports.newBirth()

Registers a new birth

**Kind**: instance method of [<code>module.exports</code>](#exp_module_census--module.exports)  
<a name="module_census--module.exports+update"></a>

#### module.exports.update()

Calculate population by species

**Kind**: instance method of [<code>module.exports</code>](#exp_module_census--module.exports)  
<a name="module_census--module.exports+reset"></a>

#### module.exports.reset()

Reset counts

**Kind**: instance method of [<code>module.exports</code>](#exp_module_census--module.exports)  
<a name="module_census--module.exports+minority"></a>

#### module.exports.minority()

Least populated species

**Kind**: instance method of [<code>module.exports</code>](#exp_module_census--module.exports)  
<a name="module_census--module.exports+mayority"></a>

#### module.exports.mayority()

Most populated species

**Kind**: instance method of [<code>module.exports</code>](#exp_module_census--module.exports)  
<a name="module_census--module.exports+list"></a>

#### module.exports.list()

Census list

**Kind**: instance method of [<code>module.exports</code>](#exp_module_census--module.exports)  
<a name="RED_LOG"></a>

## RED_LOG

Red logs

**Kind**: global constant  
<a name="GREEN_LOG"></a>

## GREEN_LOG

GREEN logs

**Kind**: global constant  
<a name="BLUE_LOG"></a>

## BLUE_LOG

Green logs

**Kind**: global constant  
<a name="GRAY_LOG"></a>

## GRAY_LOG

Gray logs

**Kind**: global constant
