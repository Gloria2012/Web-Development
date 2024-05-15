const express = require('express');
const router = express.Router();
const campgrounds = require('../controllers/campground');
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn , isAuthor, validateCAmpground} = require('../middleware');
const ExpressError = require('../utils/ExpressError');
const Campground = require('../models/campground');
const multer  = require('multer');
const { storage } = require('../cloudinary');
const upload = multer( { storage } );
//const upload = multer({ dest: 'uploads/' });


router.route( '/' )
    .get( catchAsync( campgrounds.index ) )
    .post( isLoggedIn,  upload.array('image'), validateCAmpground, catchAsync( campgrounds.createCampground ) );

router.get('/new', isLoggedIn, campgrounds.renderNewForm);

router.route( '/:id' )
    .get( catchAsync(campgrounds.showCampground))
    .put( isLoggedIn, isAuthor, upload.array('image'), validateCAmpground, catchAsync(campgrounds.updateCampground))
    .delete( isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));

router.get('/:id/edit', 
    isLoggedIn, 
    isAuthor, 
    catchAsync(campgrounds.editCampground));

/*
router.route( '/' )
    .get( catchAsync( campgrounds.index ) )
    .post( isLoggedIn,  upload.array('image'), validateCAmpground, catchAsync( campgrounds.createCampground ) );
   /* .post(upload.array('image'),(req, res) => {
        console.log(req.body, req.files)
        res.send("IT WORKED");
    })*/
/*
router.get('/new', isLoggedIn, campgrounds.renderNewForm);

router.route( '/:id' )
    .get( catchAsync(campgrounds.showCampground))
    .put( isLoggedIn, isAuthor, upload.array('image'), validateCAmpground, catchAsync(campgrounds.updateCampground))
    .delete( isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));

router.get('/:id/edit', 
    isLoggedIn, 
    isAuthor, 
    catchAsync(campgrounds.editCampground));*/
    

module.exports = router;