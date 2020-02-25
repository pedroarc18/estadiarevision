'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3970;

mongoose.connect('mongodb://localhost:27017/royal-language', (err, res) => {
	if(err){
		throw err;
	} else {
		console.log("La conexion a la base de datos está funcionando...");	

		app.listen(port, function(){
			console.log("Servidor del api rest escuchando en http://localhost:"+port);
		});	
	}
}); 