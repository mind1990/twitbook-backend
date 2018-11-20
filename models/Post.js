const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = require('./User').schema;

const PostSchema = new Schema({
	image: String,
	title: String,
	content: String,
	comments: {
		commentAuthor: String,
		commentContent: String
	},
	author: [UserSchema],
	postdate: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;