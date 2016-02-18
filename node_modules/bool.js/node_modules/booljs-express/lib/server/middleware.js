'use strict';

module.exports = function (_instance, router, middleware) {

    router.use(middleware);
    return q.resolve(router);

};
