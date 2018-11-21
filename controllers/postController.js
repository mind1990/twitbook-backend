const db = require('../models');
const Post = db.Post;

// Find all
const index = (req, res) => {
	Post.find({}, (err, allPosts) => {
		if (err) throw err;
		res.json(allPosts);
	});
};

// Find by id
const show = (req, res) => {
	Post.findById(req.params.id, (err, thatOnePost) => {
		if (err) throw err;
		res.json(thatOnePost);
	});
};

// Create
const create = (req, res) => {
	Post.create(req.body, (err, newPost) => {
		if (err) throw err;
		res.json(newPost);
	});
};

// Edit
const update = (req, res) => {
	Post.findOneAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedPost) => {
			if (err) throw err;
			res.json(updatedPost);
		}
	);
};

// Delete
const destroy = (req, res) => {
	Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
		if (err) throw err;
		res.json({ msg: 'deleted' });
	});
};

module.exports = {
	index,
	show,
	create,
	update,
	destroy
}








