const Review = require('../models/review');
const Campground = require('../models/campground');

module.exports.createReview = async(req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    campground.reviews.push(review)
    const result = await review.save();
    const p = await campground.save();
    req.flash('success', 'Created new review')
    res.redirect(`/campgrounds/${campground._id}`);
}

module.exports.deleteReview= async (req, res) => {
    const { id , reviewId} = req.params;
    await Campground.findByIdAndUpdate(id, {$pull:{ reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash('success', 'Successfully delete review')
    res.redirect(`/campgrounds/${id}`);
}

