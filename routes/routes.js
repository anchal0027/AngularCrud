var express = require('express');
const router = express.Router();
const Contact = require('../models/collection');
const Register = require('../models/register');
const validation = require('../validation/registervalidation');
const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var app = express();

router.get('/contacts', (req, res, next) => {
	Contact.find((err, contacts) => {
		res.json(contacts);
	})
});
router.post('/addcontact', (req, res, next) => {
	let newContact = new Contact({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		phone: req.body.phone

	});
	newContact.save((err, contact) => {
		if (err) {
			return next(err);
			res.json({
				msg: 'failed to register data!'
			});
		} else {
			res.json({
				msg: 'Registration succesful!'
			});
		}
	});
});
router.post('/register', (req, res, next) => {
	validation.validateRegistration(req.body, function (err, data) {
		if (err) {
			res.json({
				error: 1,
				message: err,
				data: []
			});
			next(err);
		} else {
			let newUser = new Register({
				email: req.body.email,
				username: req.body.username,
				password: req.body.password,
				confirm_password: req.body.confirmpassword,


			});
			newUser.save((err, contact) => {
				if (err) {
					res.json({
						error: 1,
						message: "User Details already exists"
					});
					return next(err)

				} else {
					res.json({
						msg: 'contact created'
					});
				}
			})
		}
	})

});
router.post('/login', (req, res, next) => {

	Register.findOne({
		username: req.body.username
	}, function (err, user) {
		if (err) {
			throw err;
		}
		if (!user) {
			res.json({
				error: true,
				message: 'Authentication failed. User not found!.'
			});
		} else if (user) {

			if (bcrypt.compareSync(req.body.password, user.password)) {
				// if user is found and password is right
				// create a token
				 var token=jwt.sign({
  				exp: Math.floor(Date.now() / 1000) + (60 * 60),
  				data: 'user'
				}, 'anchal');
				// return the information including token as JSON
				res.json({
					success: true,
					message: 'Login Success!',
					 token: token
				});

			} else {
				res.json({
					error: true,
					message: 'Authentication failed. Wrong password!'
				});


			}

		}
	});
});
module.exports = router;