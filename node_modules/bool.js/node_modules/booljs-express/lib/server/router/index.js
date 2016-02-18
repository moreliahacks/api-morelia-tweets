'use strict';

module.exports = {
    pre: require('./preroute'),
    in: require('./inroute'),
    post: require('./postroute')
};
