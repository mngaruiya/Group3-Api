const mongoose = require('mongoose');


const patientsSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
});

const patientModel = mongoose.model('patients', patientSchema);

module.exports = patientModel;