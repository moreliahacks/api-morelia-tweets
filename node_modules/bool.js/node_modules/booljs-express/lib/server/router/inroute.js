'use strict';

module.exports = function (_instance, router, middleware, route) {

    router[route.method](route.url, middleware, route.action);
    return q.resolve(router);

};
