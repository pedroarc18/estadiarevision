'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClassroomSchema = Schema({
	name: String,
	image: String,
	paymenttype: String,
	cost: Number,
	startadd: Date,
	endadd: Date,
	beginginscription: Date,
	endinscription: Date,
	numberusers: {
			type: Number,
			enum: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
			default: 7,
	},
	 course: {type: Schema.ObjectId, ref: 'Courses'}
});
module.exports = mongoose.model('Classroom', ClassroomSchema);