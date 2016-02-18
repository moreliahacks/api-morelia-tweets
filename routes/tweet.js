'use strict';

module.exports = function (app) {

    var tweet = new app.controllers.Tweet();

    return [
        {
            method: 'get',
            url: '/tweets',
            action: tweet.list,
            cors: true
        }
    ];

};
