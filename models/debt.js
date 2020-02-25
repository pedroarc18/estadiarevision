'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DebtsSchema = Schema({
	fee: String,
	user: {type: Schema.ObjectId, ref: 'User'},
	course: {type: Schema.ObjectId, ref: 'Courses'}
});

module.exports = mongoose.model('Debt', DebtSchema);