'use strict';

module.exports = function (namespace, options) {
    var fs      = require('fs')
    ,   hb      = require('handpipe')
    ,   path    = require('path')
    ,   utils   = require('util')
    ,   index   = path.join(
        require.resolve('../..'), '../boilerplate/index.js'
    );

    var dependencies = _.filter([
        options.server_driver, options.database_driver
    ], function (driver) {
        return driver !== undefined;
    });

    var dependenciesTemplate = (dependencies.length > 0 ?
        utils.format(', %j', dependencies) : ''
    );

    options.server_driver = options.server_driver || 'booljs-express';
    options.database_driver = options.database_driver || 'booljs-nomodel';

    var compiler = hb({
        dependencies: dependenciesTemplate,
        namespace: namespace,
        options: options
    });

    var input = fs.createReadStream(index)
    ,   output = fs.createWriteStream('index.js', {
        flags: 'w'
    });

    input.pipe(compiler).pipe(output);
    return q.resolve();
};
