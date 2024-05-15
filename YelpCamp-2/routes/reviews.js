const express = require('express');
const router = express.Router({mergeParams: true});
const catchAsync = require('../utils/catchAsync');
const {reviewSchema} = require('../schemas.js');
const ExpressError = require('../utils/ExpressError');

const reviews = require('../controllers/reviews');
const { validateReviews, isLoggedIn, isAuthor, isReviewAuthor} = require('../middleware')


router.post('/', isLoggedIn, validateReviews, catchAsync(reviews.createReview));
    

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview));

module.exports = router;