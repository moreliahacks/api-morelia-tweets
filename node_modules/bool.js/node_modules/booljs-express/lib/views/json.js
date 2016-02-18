"use strict";

module.exports = function(){

    function execute(err, data, res, statusCode){

        var status = err ? (err.status || 500) : (statusCode || 200);

        var obj = {
            success: !err
        };

        if(err){
            obj.error = _.omit(err, 'status');
            obj.error.message = err.message || 'internal_server_error';
        } else {
            if(data) obj.data = data;
        }

        res.status(status).json(obj);

    }

    var plugin = {
        standard: function(data, res, statusCode){
            execute(null, data, res, statusCode);
        },
        error: function(err, res){
            execute(err, null, res);
        },
        promise: function(action, res, next, statusCode){
            action.then(function(data){
                plugin.standard(data, res, statusCode);
            }).catch(next);
        }
    };

    return plugin;

};
