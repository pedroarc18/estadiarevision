'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecordScheme = Schema({
	fee: String,
	date: Date,
	debt: {type: Schema.ObjectId, ref: 'Debt'},
	user: {type: Schema.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Record', RecordScheme);