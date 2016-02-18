'use strict';

module.exports = function(app){

    var Tweet     = app.dao.Tweet
    ,   json    = new app.views.Json();

    return {
        list: function(req, res, next){
            var tweet = new Tweet();
            json.promise(tweet.list(), res, next);
        }
    };

};
