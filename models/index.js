const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/twitbook', {
	userNewUrlParser: true });

module.exports = {
	User: require('./User'),
	Post: require('./Post'),
	Like: require('./Like')
};