'use strict';

module.exports = function () {

    return function (query) {
        var _query = _.omit(query, ['fields', 'limit', 'skip', 'sort']);

        for(var q in _query){
            if(_query[q] === 'null') _query[q] = null;
        }

        var projection = {
            limit: parseInt(query.limit, 10),
            skip: parseInt(query.skip, 10) || undefined,
            sort: query.sort
        };

        for(var p in projection){
            if(projection[p] === undefined) delete projection[p];
        }

        return {
            query: _query,
            fields: query.fields || {},
            projection: projection
        };
    };

};
