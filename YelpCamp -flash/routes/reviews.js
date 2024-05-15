const express = require('express');
const router = express.Router({mergeParams: true});
const catchAsync = require('../utils/catchAsync');
const {reviewSchema} = require('../schemas.js');
const ExpressError = require('../utils/ExpressError');
const Review = require('../models/review');
const Campground = require('../models/campground');

const validateReviews = (req, res, next) => {
    const {error} = reviewSchema.validate(req.body);
    if(error){
        console.log(error);
        const msg = error.details.map( el => el.message).join(',')
        throw new ExpressError(msg, 400)

    }else{
        next();
    }
}

router.post('/', validateReviews, catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);
   // console.log(campground)
    const review = new Review(req.body.review);
   // console.log(review);
    campground.reviews.push(review)
    const result = await review.save();
    //console.log(result)
    const p = await campground.save();
    req.flash('success', 'Created new review')
    res.redirect(`/campgrounds/${campground._id}`);
}))

router.delete('/:reviewId', catchAsync(async (req, res) => {
    const { id , reviewId} = req.params;
    await Campground.findByIdAndUpdate(id, {$pull:{ reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash('success', 'Successfully delete review')
    res.redirect(`/campgrounds/${id}`);
}))

module.exports = router;