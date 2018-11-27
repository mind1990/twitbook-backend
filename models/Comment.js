const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = require('./Post').schema;

const CommentSchema = new Schema({
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