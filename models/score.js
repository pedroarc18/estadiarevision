'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScoreSchema = Schema({
	score: String,
	user: String,
	date: Date,
	classroom {type: Scheme.ObjectId, ref: Classroom},
	exams: { type: Scheme.ObjectId, ref: 'Exams'}
});

module.exports = mongoose.model('Score', ScoreSchema);