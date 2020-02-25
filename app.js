 'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar rutas
var user_routes = require('./routes/user');
var class_routes = require('./routes/classroom');
var courses_routes = require('./routes/courses');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// configurar cabeceras http

// rutas base
app.use('/api', user_routes);
app.use('/api', class_routes);
app.use('/api', courses_routes);


module.exports = app;