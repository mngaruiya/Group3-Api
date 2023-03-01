const mongoose = require('mongoose');

// Schema
const patientsSchema = new mongoose.Schema({
    first_name: { 
        required: true,
        type: String,
    },
    last_name: {
        required: true,
        type: String,
    },
    gender : { 
        required: true,
        type: String, 
    },
    age : { 
        required: false,
        type: Number, 
    },
    Doctor : { 
        required: true,
        type: String, 
    },
});

module.exports = mongoose.model('patients', patientsSchema);
