<a name="module_brain"></a>

## brain

Creature's mind

**Requires**: <code>module:synaptic</code>  
**See**: [https://github.com/cazala/synaptic](https://github.com/cazala/synaptic) based on work by @cazala 's Synaptic.

- [brain](#module_brain)
  - [module.exports](#exp_module_brain--module.exports) ⏏
    - [new module.exports(inputNeurons, hiddenNeurons, outputNeurons)](#new_module_brain--module.exports_new)
    - [.think()](#module_brain--module.exports+think)
    - [.learn()](#module_brain--module.exports+learn)

<a name="exp_module_brain--module.exports"></a>

### module.exports ⏏

**Kind**: Exported class  
**See**

- [https://github.com/cazala/synaptic/wiki/Architect](https://github.com/cazala/synaptic/wiki/Architect)
- [https://github.com/cazala/synaptic/wiki/Networks](https://github.com/cazala/synaptic/wiki/Networks)

<a name="new_module_brain--module.exports_new"></a>

#### new module.exports(inputNeurons, hiddenNeurons, outputNeurons)

Create new neural network

| Param         | Type            | Default        |
| ------------- | --------------- | -------------- |
| inputNeurons  | <code>\*</code> | <code>4</code> |
| hiddenNeurons | <code>\*</code> | <code>6</code> |
| outputNeurons | <code>\*</code> | <code>3</code> |

<a name="module_brain--module.exports+think"></a>

#### module.exports.think()

Think of where to move from current location

**Kind**: instance method of [<code>module.exports</code>](#exp_module_brain--module.exports)  
<a name="module_brain--module.exports+learn"></a>

#### module.exports.learn()

Learn how to move

**Kind**: instance method of [<code>module.exports</code>](#exp_module_brain--module.exports)
