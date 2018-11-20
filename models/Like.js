const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const LikeSchema = require('./User').schema;

const PostSchema = new Schema({
	author: [UserSchema],
	postdate: { type: Date, default: Date.now }
});

const Like = mongoose.model('Like', LikeSchema);

module.exports = Like;