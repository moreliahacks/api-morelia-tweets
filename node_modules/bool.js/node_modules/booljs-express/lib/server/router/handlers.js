'use strict';

module.exports = function (app, router) {

    var json    = new app.views.Json()
    ,   Error   = app.Error;

    // 404 Handler. Acts when a resource call isn't found
    router.use(function(req, res) {
        json.error(new Error(
            404, 'method_not_found',
            'Method wasn\'t found'
        ), res);
    });

    // Error Handler. Processes an error output view.
    router.use(function(err, req, res, next){
        json.error(err, res);
    });

};
