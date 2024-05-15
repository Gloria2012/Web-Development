const express = require('express');
const router = express.Router();
const campgrounds = require('../controllers/campground');
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn , isAuthor, validateCAmpground} = require('../middleware');
const ExpressError = require('../utils/ExpressError');
const Campground = require('../models/campground');

router.route( '/' )
    .get( catchAsync( campgrounds.index ) )
    .post( isLoggedIn,  validateCAmpground, catchAsync( campgrounds.createCampground ) );

router.get('/new', isLoggedIn, campgrounds.renderNewForm);

router.route( '/:id' )
    .get( catchAsync(campgrounds.showCampground))
    .put( isLoggedIn, isAuthor, validateCAmpground, catchAsync(campgrounds.updateCampground))
    .delete( isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));

router.get('/:id/edit', 
    isLoggedIn, 
    isAuthor, 
    catchAsync(campgrounds.editCampground));
    

module.exports = router;