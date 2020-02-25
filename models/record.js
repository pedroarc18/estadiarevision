'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecordScheme = Schema({
	fee: String,
	Date: year,
	debt: {type: Schema.ObjectId, ref: 'Debt'},
	student: {type: Schema.ObjectId, ref: 'Students'}
});

module.exports = mongoose.model('Record', RecordScheme);