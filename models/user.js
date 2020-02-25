'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
	username: String,
	password: String,
	name: String,
	address: String,
	phone: String,
	role: {
		type: Number,
		enum: [0,1,2,3,4,5,6,7],
		default: 7
	},
	image: String
}); 

module.exports = mongoose.model('User', UserSchema);	
