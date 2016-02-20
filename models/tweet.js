'use strict';

module.exports = function (app, Schema) {

    var TweetSchema = new Schema({
        twitterId: String,
        text: String,
        hashtags: Array,
        mentions: Array,
        categories: Array,
        sentimental: Object,
        date: Date,
        location: {
            geo: String,
            coordinates: Object,
            place: String
        }
    });

    TweetSchema.statics.list = function(query, fields, projection) {
        return q.nbind(this.find, this)(query, fields, projection);
    };

    TweetSchema.statics.findById = function(id) {
        return q.nbind(this.findOne, this)({_id: id}).then((data) => {
            if(!data) throw new app.plugins.NoteNotFoundError();
            return data;
        });
    };

    TweetSchema.statics.insert = function(tweet) {
        return q.nbind(this.create, this)(tweet);
    };

    TweetSchema.statics.update = function(id, data){
        return q.nbind(this.findOne, this)({_id: id}).then((_data) => {
            if(!_data) throw new app.plugins.NoteNotFoundError();
            injector(_data, data, Object.keys(data));
            return q.nbind(_data.save, _data)();
        }).then(() => {
            return q.nbind(this.findOne, this)({ _id: id });
        });
    };

    TweetSchema.statics.delete = function(id){
        return q.nbind(this.findOneAndRemove, this)({_id:id}).then(() => {
            return false;
        });
    };

    return TweetSchema;
};
