const mongoose = require('mongoose');
const Admin = mongoose.model('Admin');
const passport = require('passport');
const _ = require('lodash');





module.exports.adminregister = (req, res, next) => {
    var admin = new Admin();
    admin._id=req._id;
    admin.department = req.body.department;
    admin.statusofapplication = req.body.statusofapplication;
    admin.save((err, doc) => {
        if (!err)
            res.send(doc);
            
        else {
           
                return next(err);
        }
        next();
    });

}
module.exports.adminProfile = (req,res,next) => {
    Admin.find({}).then(function (admin) {
        res.send(admin);
        });



}
