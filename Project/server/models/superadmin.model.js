const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
    fullName: {
        type: String,
       
    },
    email: {
        type: String,
        
        unique: true
    },
    password: {
        type: String,
       
    },
    saltSecret: String,
    address:{
        type:String,
       
    },
    phoneno:{
        type:String,
       
    },
    type:{
        type:String,
        
    },
    
    
    
    
},{ strict: false });

mongoose.model('User', userSchema);