'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExamScheme = Schema({
	score: String,
	courses: { type: Scheme.ObjectId, ref: 'Courses'}
});

module.exports = mongoose.model('Exam', ExamScheme);