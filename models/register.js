var mongoose=require('mongoose');
var bcrypt = require('bcrypt');
const registerSchema=mongoose.Schema({
	email:{
		type:String,
		unique:true,
		required:true,
		trim:true
	},
	username:{
		type:String,
		unique:true,
		required:true,
		trim:true
	},
	password:{
		type:String,
		required:true,
	},
	confirm_password:{
		type:String,
		required:true,
	}
});
registerSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});
module.exports=mongoose.model("registeredUser",registerSchema);