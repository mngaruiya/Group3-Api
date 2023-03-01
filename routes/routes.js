const express = require('express');
const router = express.Router();

const patients = require('../model/models');


//CRUD routes
//Create
router.post('/patients', async (req, res) => {
    const data = new Patient({
        first_name: req.body.first_name,
        second_name: req.body.second_name,
        gender: req.body.gender,
        age:req.body.age,
        doctor:req.body.doctor,
    });
    try{
    //db.patients.insertOne
    const savedData = await data.save();
    res.status(200).json(savedData);
    } catch (error) {
     res.status(400).json({message: error.message});
    }
    
})
//Read
router.get('/patients', async (req, res) => {
    try {
        const data = await Patient.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Update
router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;

        const data = await Patient.findByIdAndUpdate(id, updatedData, { new: true });
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
//Delete
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const data = await Patient.findByIdAndDelete(id);
        res.status(204).json({ message: `The patients named ${data.Department} has been deleted` });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


module.exports = router;