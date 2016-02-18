'use strict';

var objects = [];

module.exports = function (app) {

    return {
        list: function () {
            return q.resolve(objects);
        },
        index: function (id) {
            for(var index in objects){
                if(objects[index].id === id) return q.resolve(index);
            }
            return null;
        },
        find: function (id) {
            var index = this.index(id);
            if(index === null) throw new app.Error(
                404, '{{name}}_not_found',
                'The searched {{name}} wasn\'t in the list'
            );
            return q.resolve(objects[index]);
        },
        update: function (id, object) {
            injector(this.find(id), object);
        },
        delete: function (id) {
            var index = this.index(id);
            if(index === null) throw new app.Error(
                404, '{{name}}_not_found',
                'The searched {{name}} wasn\'t in the list'
            );
            objects.splice(index, 1);
        }
    };
};
