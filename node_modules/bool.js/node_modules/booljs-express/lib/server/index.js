'use strict';

module.exports = {
    init: require('./init'),
    middleware: require('./middleware'),
    preroute: require('./router').pre,
    route: require('./router').in,
    postroute: require('./router').post,
    boot: require('./boot')
};
