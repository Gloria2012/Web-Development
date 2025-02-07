const express = require('express');
const router =express.Router();
const passport = require('passport')
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user')
const users = require('../controllers/user')

const { storeReturnTo } = require('../middleware');

router.route( '/register' )
    .get( users.renderRegister )
    .post( users.register );

router.route( '/login' )
    .get( users.renderLogin)
    .post( storeReturnTo, passport.authenticate('local', 
            {failureFlash: true, 
            failureRedirect: '/login',
            keepSessionInfo : true}), 
            users.login);
      

router.get('/logout', users.logout);
    
module.exports = router;