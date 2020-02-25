'use strict'
var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user');
var jwt = require('../services/jwt');


function pruebas(req, res){
	res.status(200).send({
		message: 'Probando una acción del controlador de usuarios del api rest con node'
	});
}

function saveUser(req, res){
	var user = new User();

	var params = req.body;

	user.username = params.username;
	user.name = params.name;
	user.address = params.address;
	user.phone = params.phone;
	user.type = params.type;
	user.image = 'null';

	if(params.password){
		//Encriptar contraseña y guardar datos
		//Y guardar el usuario
		bcrypt.hash(params.password, null, null, function(err, hash){
			user.password = hash;
			
			if(user.name != null && user.username != null && user.password != null){
				
				user.save((err, userStored) => {
					if(err){
						res.status(500).send({message: 'Error a guardar el usuario'});
					}else{
						if(!userStored){
							res.status(404).send({message: 'No se ha registrado el usuario'});
						}else{
							res.status(200).send({user: userStored});
						}
					}
				});
			}else{
				res.status(200).send({message: 'Rellena todos los campos'});
			}
		});
	}else{
		res.status(500).send({message: 'Introduce la contraseña'});
	}

}

function loginUser(req, res){
	var params = req.body;
	var username = params.username;
	var password = params.password;

	User.findOne({username: username.toLowerCase()}, (err, user) => {
		if(err){
			res.status(500).send({message: 'Error en la petición'});
		}else{
			if(!user){
				res.status(404).send({message: 'El usuario no existe'});
			}else{
				bcrypt.compare(password, user.password, function(err, check){
					if(check){
						//devolver los datos del usu
						if(params.gethash){
							// devolver token de jwt
							res.status(200).send({
								token: jwt.createToken(user)
							});
						}else{
							res.status(200).send({user});
						}
					}else{
						res.status(500).send({message: 'El ususario no se pudo loguear'});
					}
				});
			}
		}

	});


}

function updateUser(req, res){
	var userId = req.params.id;
	var update = req.body;

	User.findByIdAndUpdate(userId, update, (err, userUpdated) => {
		if(err){
			res.status(500).send({message: 'Error al actualizar al ususario'});

		}else{
			if(!userUpdated){
				res.status(404).send({message: 'No se ha podido actualizar al usuario'});
			}else{
				res.status(200).send({message: userUpdated});
			}
		}
	});
}

function deleteUser(req, res){
	User.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'User deleted'
    });
}
async function getUser(req, res){
	const user = await User.find();  
    res.json(user);
}
module.exports = {
	pruebas,
	saveUser,
	loginUser,
	updateUser,
	deleteUser,
	getUser
};