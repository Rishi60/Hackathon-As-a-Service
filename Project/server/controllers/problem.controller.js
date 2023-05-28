const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const ProblemStatement = mongoose.model('ProblemStatement');

module.exports.submit = (req, res, next) => {
    var problem = new (ProblemStatement);
    problem.problemstatement = req.body.problemstatement;
    problem.department = req.body.department;
    problem.statusofproblemstatement = 'nr';
   
    problem.save((err, doc) => {
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
