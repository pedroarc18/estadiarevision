'use strict'

var express = require('express');
var CoursesController = require('../controllers/courses');


var api = express.Router();

api.post('/cursos/guardarcurso', CoursesController.saveCourse);
api.get('/cursos/obtenercursos', CoursesController.getAllCourses);
api.get('/cursos/:id', CoursesController.getCourse);
api.put('/cursos/actualizar/:id', CoursesController.updateCourse);
api.delete('/cursos/eliminar/:id', CoursesController.deleteCourse);

module.exports = api;