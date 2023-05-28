const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var problemSchema = new mongoose.Schema({
    problemstatement: {
        type: String,
        required: 'Full name can\'t be empty'
    },
    department: {
        type: String,
        required: 'Email can\'t be empty',
    
    },
    statusofproblemstatement:{
        type:String,
        
    },
    
    
    
    
    
    
},{ strict: false });

mongoose.model('ProblemStatement', problemSchema);