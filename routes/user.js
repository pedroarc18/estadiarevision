'use strict'

var express = require('express');
var UserController = require('../controllers/user');

var api = express.Router();
//cargar middelware
var md_auth = require('../middelwares/authenticated');


api.get('/usuario/probando-controlador',  md_auth.ensureAuth, UserController.pruebas);
api.get('/usuario/probando', UserController.pruebas);
api.post('/usuario/registro', UserController.saveUser);
api.post('/usuario/login', UserController.loginUser);
api.put('/usuario/actualizarusuario/:id', md_auth.ensureAuth, UserController.updateUser);
api.delete('/usuario/:id', UserController.deleteUser);
api.get('/usuario/obtenerusuario', UserController.getUser);

module.exports = api;