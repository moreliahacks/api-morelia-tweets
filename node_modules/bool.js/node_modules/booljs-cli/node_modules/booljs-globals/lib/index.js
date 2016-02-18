'use strict';

/**
 * Globals Library
 */
module.exports = {

    PATH: process.cwd(),

    _: require('underscore'),
    q: require('q'),
    util: require('util'),
    injector: require('object-injector'),

    log: require('./utils/log'),
    Interface: require('./utils/interface')

};
