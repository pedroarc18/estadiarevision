'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeachersSchema = Schema({
	username: String,
	password: String,
	name: String,
	phone: Number
});

module.exports = mongoose.model('Teachers', TeachersSchema);