"use strict";

var API;
try {
    API = require('bool.js/api');
} catch (err){
    API = require('booljs-api');
}

/** @ignore */
function headers(res){
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Methods',
        ['GET', 'POST', 'PUT', 'DELETE'].join(', ')
    );
    res.header(
        'Access-Control-Allow-Headers',
        [
        'Authorization', 'Accept', 'Content-Type', 'X-Requested-With',
        'Cache-Control'
        ].join(', ')
    );
}


module.exports = new API.RouteMiddleware('booljs-cors', {
    action: function (_instance, router, route) {
        router.options(route.url, function (req, res, next) {
            headers(res);
            res.status(200).end();
        });
        return function (req, res, next) {
            headers(res);
            next();
        };
    },
    type: 'mandatory',
    policies: {
        cors: true
    }
});
