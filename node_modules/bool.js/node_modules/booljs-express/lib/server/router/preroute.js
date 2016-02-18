'use strict';

module.exports = function (_instance, expressApplication) {
    var express = require('express');
    return q.resolve(express.Router());
};
