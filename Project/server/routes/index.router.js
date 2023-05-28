const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlProblem = require('../controllers/problem.controller');
const ctrlAdmin = require('../controllers/admin.controller');
const ctrlSuperAdmin = require('../controllers/superadmin.controller');


const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/problemcommittee', ctrlProblem.submit);
router.post('/invite', ctrlSuperAdmin.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.post('/adminProfile', ctrlAdmin.adminProfile);

router.post('/adminregister',jwtHelper.verifyJwtToken,ctrlAdmin.adminregister,ctrlUser.admininusertable);

module.exports = router;



