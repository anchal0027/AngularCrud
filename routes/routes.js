var express = require('express');
const router = express.Router();
const Contact = require('../models/collection');
const Register = require('../models/register');
const validation = require('../validation/registervalidation');
const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var app = express();

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
  				expiresInMinutes: 60,
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
						success:true,
						msg: 'contact created'
					});
				}
			})
		}
	})

});
router.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers.authorization;
  // decode token
  if (token) {
  	console.log(">>>>>sercver",token);

    // verifies secret and checks exp
    jwt.verify(token, 'anchal', function(err, decoded) {      
      if (err) {
        return res.json({ error: true, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });

  }
});

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

module.exports = router;