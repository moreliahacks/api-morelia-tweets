'use strict';

module.exports = function(app){

    var tweet = new app.models.Tweet();

    return {
        list: function(query, fields, projection){
            return tweet.list(query, fields, projection);
        },
        find: function(id){
            return tweet.findById(id);
        },
        create: function(data){
            return tweet.insert(data);
        },
    };

};
