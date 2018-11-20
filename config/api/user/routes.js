const express = require('express');
const router = express.Router();
const ctrl = require('../../../controllers/index');
const bcrypt = require('bcrypt');
const User = require('../../../models/User');
const jwt = require('jsonwebtoken');

router.get('/', ctrl.user.index);
// router.get('/:id', ctrl.user.show);
// router.post('/', ctrl.user.create);
// router.put('/:id', ctrl.user.update);
// router.delete('/:id', ctrl.user.destroy);


// Route for Signing up
router.post('/signup', function(req, res) {
	bcrypt.hash(req.body.password, 10, function(err, hash) {
		if(err) {
			return res.status(500).json({
				error: err
			});
		} else {
			const user = new User({
				email: req.body.email,
				password: hash
			});
			user.save().then(function(result) {
				console.log(result);
				res.status(200).json({
					success: 'New user has been created'
				});
			}).catch(error => {
				res.status(500).json({
					error: err
				});
			});
		}
	});
});

// Route for Sigin
router.post('/signin', function(req, res){
	User.findOne({email: req.body.email})
	.exec()
	.then(function(user) {
		bcrypt.compare(req.body.password, user.password, function(err, result){
			if (err) {
				return res.status(401).json({
					failed: 'Unauthorized Access'
				});
			}
			if (result) {
				const JWTToken = jwt.sign({
					email: user.email,
					_id: user._id 
				}, 
				'secret', 
				{ 
					expiresIn: '2h' 
				});
				return res.status(200).json({
					success: 'Welcome to the JWT Auth',
					token: JWTToken
				});
			}
			return res.status(401).json({
				failed: 'Unauthorized Access'
			});
		});
	})
	.catch(error => {
		res.status(500).json({
			error: error
		});
	});
});

module.exports = router;






