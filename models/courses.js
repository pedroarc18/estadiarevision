'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CoursesSchema = Schema({
	name: String,
	image: String,
	paymenttype: String,
	cost: String,
	sesionnumber: String,
	category: {type: Schema.ObjectId, ref: 'Category'}
});

module.exports = mongoose.model('Courses', CoursesSchema);