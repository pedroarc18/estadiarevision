'use strict'

var express = require('express');
var ClassroomController = require('../controllers/classroom');

var api = express.Router();

api.post('/class/guardarclass', ClassroomController.saveClass);
api.get('/class/obtenerclass', ClassroomController.getAllClass);
api.get('/class/:id', ClassroomController.getClass);
api.put('/class/actualizar/:id', ClassroomController.updateClass);
api.delete('/class/eliminar/:id', ClassroomController.deleteClass);

module.exports = api;

