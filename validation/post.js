const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
	let errors = {};

	data.text = !isEmpty(data.text) ? data.text : '';

	// Check if the number of characters in the post is between 10 and 300 characters
	if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
		errors.text = 'Post must be between 10 and 300 characters';
	}

	// Check if Text field is not empty
	if (Validator.isEmail(data.text)) {
		errors.text = 'Text field is required';
	}
	

	return {
		errors,
		isValid: isEmpty(errors)
	};
};