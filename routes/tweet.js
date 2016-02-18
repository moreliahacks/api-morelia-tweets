'use strict';

module.exports = function (app) {

    var tweet = new app.controllers.Tweet();

    return [
        {
            method: 'get',
            url: '/tweets',
            action: tweet.list,
            cors: true
        },
        {
            method: 'get',
            url: '/tweets/:id',
            action: tweet.find,
            cors: true
        },
        {
            method: 'post',
            url: '/tweets',
            action: tweet.create,
            cors: true
        }
    ];

};
