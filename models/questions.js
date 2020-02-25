'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionsScheme = Schema({
	question: String,
	answer: String,
	date: Date,
	classroom: { type: Scheme.ObjectId, ref: 'Classroom'},
	courses: { type: Scheme.ObjectId, ref: 'Courses'}
});

module.exports = mongoose.model('Questions', QuestionsScheme);