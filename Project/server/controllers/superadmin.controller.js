const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('User');
module.exports.register = (req, res, next) => {
    var user = new User();
    user.fullName = 'null';
    user.email = req.body.email;
    user.password =  'null';
    user.address =  'nulll';
    user.phoneno =  'null';
    user.type=req.body.type;

    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}