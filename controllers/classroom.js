'use strict'
var Classroom = require('../models/classroom');

function saveClass(req, res){
    var classroom = new Classroom();
    var params = req.body;

    classroom.name = params.name;
    classroom.image = params.image;
    classroom.paymenttype = params.paymenttype;
    classroom.cost = params.cost;
    classroom.startadd = params.startadd;
    classroom.endadd = params.endadd;
    classroom.beginginscription = params.beginginscription;
    classroom.endinscription = params.endinscription;
    classroom.numberusers = params.numberusers;
    classroom.roomdates = params.roomdates;
    classroom.course = params.course; 

    if (classroom != null) {
        classroom.save();
        res.json({
        'status': 'Clasroom saved'
    });
    } else {
        res.json({
         'satus': 'Classroom is not save'
        });
    }


}

async function getAllClass(req, res){
    var classroom = await Classroom.find();  
    res.json(classroom);
}

function  getClass(req, res){
    const classroom = Classroom.findById(req.params.id);
    res.json(classroom);
}

function updateClass(req, res){
    var classroomId = req.params.id;
    var update = req.body;

    Classroom.findByIdAndUpdate(classroomId, update, (err, classroomUpdated) => {
        if(err){
            res.status(500).send({message: 'Error al actualizar el salon de clases'});

        }else{
            if(!classroomUpdated){
                res.status(404).send({message: 'No se ha podido actualizar el salon de clases'});
            }else{
                res.status(200).send({message: classroomUpdated});
            }
        }
    });
}

function deleteClass(req, res){
    Classroom.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'Course deleted'
    });
}

module.exports = {
    saveClass,
    getAllClass,
    getClass,
    updateClass,
    deleteClass
};