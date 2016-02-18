'use strict';

module.exports = function(app){

    var Tweet     = app.dao.Tweet
    ,   Filter  = new app.plugins.MongooseQuery()
    ,   json    = new app.views.Json();

    return {
        list: function(req, res, next){
            var filter = new Filter(req.query);
            var tweet = new Tweet();
            json.promise(
                tweet.list(filter.query, filter.fields, filter.projection),
                res, next
            );
        },
        find: function(req, res, next){
            var tweet = new Tweet();
            json.promise(tweet.find(req.params.id), res, next);
        },
        create: function(req, res, next){
           var tweet = new Tweet();
           json.promise(tweet.create(req.body), res, next);
       },
    };

};
