'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArchiveSchema = Schema({
	approved: Boolean,
	user: { type: Scheme.ObjectId, ref: 'User'},
	classroom: { type: Scheme.ObjectId, ref: 'Classroom'}
});

module.exports = mongoose.model('Archive', ArchiveSchema);