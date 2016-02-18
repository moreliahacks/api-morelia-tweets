#Object Injector
Injects selected keys from and object into another.

**Version**: 0.0.1  
**Author**: Pablo Andrés Dorado Suárez <pandres95@boolinc.co>  

##object-injector(injectee, injecter, [keys])
Injects selected keys from an object into another object.

**Params**

- injectee `Object` - Destination object. This is where properties of
origin object are being injected.  
- injecter `Object` - Origin object. Properties of this object will be
injected into destination object.  
- \[keys\] `Array` - Array of keys that are being injected.  

```js
var inject = require('object-injector');

var injecter = {
    a: 1,
    b: "c",
    d: {
        cool: "Yes"
    }
};

var injectee = {};
var injectee2 = {};

inject(injectee, injecter);
inject(injectee2, injecter, ['a', 'b']);


console.log(injectee);
/**
 * Outputs:
 *
 * {
 *     a: 1,
 *     b: "c",
 *     d: {
 *         cool: "Yes"
 *     }
 * }
 *
 */

console.log(injectee2);
/**
 * Outputs:
 *
 * {
 *     a: 1,
 *     b: "c",
 * }
 *
 */
```
