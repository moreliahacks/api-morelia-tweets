'use strict';

module.exports = function(app){

    var tweet = new app.models.Tweet();

    return {
        list: function(){
            return tweet.list();
        }
    };

};
