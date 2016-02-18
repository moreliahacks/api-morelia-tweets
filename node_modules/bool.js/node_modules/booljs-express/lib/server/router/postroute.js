'use strict';

module.exports = function (_instance, expressApplication, router) {
    require('./handlers')(_instance.getComponents(), router);

    var config = (_instance
        .getComponents().configuration
        .get('server')
    );

    expressApplication.use((config && config.base) || '/', router);
    return q.resolve(expressApplication);
};
