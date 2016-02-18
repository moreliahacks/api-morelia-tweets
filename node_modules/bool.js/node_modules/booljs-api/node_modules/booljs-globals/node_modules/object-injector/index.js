/**
 * @module object-injector
 * @description Object Injector
 * @author Pablo Andrés Dorado Suárez <pandres95@boolinc.co>
 * @version 0.0.2
 */

'use strict';
var _ = require('underscore');

/**
 * @function General Injector
 * @desc Injects selected keys from an object into another object.
 * @param {Object} injectee - Destination object. This is where properties of
 * origin object are being injected.
 * @param {Object} injecter - Origin object. Properties of this object will be
 * injected into destination object.
 * @param {Array} [keys] - Array of keys that are being injected.
 */
module.exports = function(injectee, injecter, keys){
    var props = (_.isArray(keys) ?
        _.intersection(Object.keys(injecter), keys) :
        Object.keys(injecter)
    );

    _.each(props, function(key){
        Object.defineProperty(injectee, key, {
            value: injecter[key],
            writable: true,
            enumerable: true,
            configurable: true
        });
    });

    return injectee;
};
