'use strict';
/**
 * @module eval
 * @see {@link https://github.com/cazala/synaptic} based on work by @cazala 's Synaptic.
 */
/**
 * @namespace isNode
 */
const isNode = typeof module !== 'undefined' && module.exports;

if (isNode)
    process.once('message', code => eval(JSON.parse(code).data));
else
    self.onmessage = code => eval(code.data);
