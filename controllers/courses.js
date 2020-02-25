'use strict'
var Courses = require('../models/courses');

function saveCourse(req, res){
    var courses = new Courses();
    var params = req.body;

    courses.name = params.name;
    courses.image = null;
    courses.paymenttype = params.paymenttype;
    courses.cost = params.cost;
    courses.sesionnumber = params.sesionnumber;

    if (courses != null) {
        courses.save();
        res.status(200).send({courses});
    } else {
        res.status(404).send({message: 'No se pudo guardar el curso'});
    }

}

async function getAllCourses(req, res){
    var course = await Courses.find();
    res.json(course);
}

function  getCourse(req, res){
    var courseId = req.params.id;  
    
    Courses.findById(courseId).exec((err, course) => {
        if(err){
            res.status(500).send({message: 'Error en la petición'});
        }else{
            if(!course){
                res.status(404).send({message: 'No existe el curso'});
            }else{
                res.status(200).send({course});
            }
        }
    });
}

function updateCourse(req, res){
    var courseId = req.params.id;
    var update = req.body;

    Courses.findByIdAndUpdate(courseId, update, (err, courseUpdated) => {
        if(err){
            res.status(500).send({message: 'Error al actualizar el curso'});

        }else{
            if(!courseUpdated){
                res.status(404).send({message: 'No se ha podido actualizar el curso'});
            }else{
                res.status(200).send({course: courseUpdated});
            }
        }
    });

}

async function deleteCourse(req, res){
    await Courses.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'Curos eliminado compa'
    });
}

module.exports = {
    saveCourse,
    getAllCourses,
    getCourse,
    updateCourse,
    deleteCourse
};