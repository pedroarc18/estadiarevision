'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentsSchema = Schema({
	username: String,
	password: String,
	name: String,
	address: String,
	phone: String,
	role: String,
	image: String
});

module.exports = mongoose.model('Students', StudentsSchema);