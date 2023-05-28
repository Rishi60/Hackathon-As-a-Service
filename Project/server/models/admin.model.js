const mongoose = require('mongoose');

var adminSchema = new mongoose.Schema({

    department: {
        type: String,
        required: 'department name can\'t be empty'
    },
    statusofapplication: {
        type: String,
        required: 'statusofapplication can\'t be empty'
    }
    
    
});

mongoose.model('Admin', adminSchema);