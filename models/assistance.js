'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AssistanceScheme = Schema({
	date: Date,
	user: { type: Scheme.ObjectId, ref: 'User'},
	classroom: { type: Scheme.ObjectId, ref: 'Classroom'}
});

module.exports = mongoose.model('Assistance', AssistanceScheme);