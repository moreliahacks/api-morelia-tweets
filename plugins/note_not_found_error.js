'use strict';

module.exports = function (app) {
    return new app.Error(
        404, 'note_not_found',
        `The note you were looking for couldn't be found`
    );
};
