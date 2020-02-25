'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta';

exports.createToken = function(user){
	var payload = {
		sub: user._id,
		role: user.role,
		username: user.username,
		iat: moment().unix(),
		exo: moment().add(25, 'days').unix
	};

	return jwt.encode(payload, secret);
};