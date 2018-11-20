const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jwtauth', {
	userNewUrlParser: true });

module.exports = {
	User: require('./User'),
	Post: require('./Post')
};