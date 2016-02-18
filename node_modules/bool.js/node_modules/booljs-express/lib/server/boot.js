'use strict';

module.exports = function (expressApplication) {
    var http    = require('http')
    ,   server  = http.createServer(expressApplication);

    var listen = q.nbind(server.listen, server);

    return listen(
        expressApplication.get('port'), expressApplication.get('host')
    ).then(function () {
        if(process.env.NODE_ENV !== 'test'){
            console.log(
                'Express server listening on http://%s:%d',
                expressApplication.get('host'),
                expressApplication.get('port')
            );
        }
        return q.resolve(server);
    });

};
