'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = Schema({
	category: String

});

module.exports = mongoose.model('Category', CategorySchema);