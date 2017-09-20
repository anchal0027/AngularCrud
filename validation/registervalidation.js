module.exports = {
    validateRegistration: (body, callback) => {
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (body.username == null || body.username == "") {
            callback("empty username!!", "");
        }
       else if (body.email == null || body.email == "") {
            callback("empty email!!", "");
        }
        else if (body.password == null || body.password == "") {
            callback("empty password!!", "");
        }
        else if (body.confirmpassword == null || body.confirmpassword == "") {
            callback("empty confirmpassword!!", "");
        }
        else if (!(body.email.match(mailformat))) {
            callback("You have entered an invalid email address!", "");
}
		 else if (!(body.password == body.confirmpassword)) {
            callback("passwords do not match !", "");
            }
            else{
                 callback("", body);
            }
    }       
}