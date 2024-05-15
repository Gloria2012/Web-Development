const express = require('express');
const path = require('path');
const mongoose= require('mongoose');
const ejsMate = require('ejs-mate');
const Joi = require('joi');
const {campgroundSchema, reviewSchema} = require('./schemas.js');
const catchAsync = require('./utils/catchAsync');
const ExpressError = require('./utils/ExpressError');
const methodOveride = require('method-override');
const Campground = require('./models/campground');
const Review = require('./models/review');


mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp', {
    useNewurlParser: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, 'connectioin error:'));
db.once('open', () =>{
    console.log('Datbase Connected');
})

const app = express();
app.engine('ejs', ejsMate)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended : true}))
app.use(methodOveride('_method'))

const validateCAmpground = (req, res, next) => {
    /*const campgroundSchema = Joi.object({
        campground: Joi.object({
            title: Joi.string().required(),
            price: Joi.number().required().min(0),
            image: Joi.string().required(),
            location: Joi.string().required(),
            description: Joi.string().required()
        }).required()
    })*/
    const {error} = campgroundSchema.validate(req.body);
    if(error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    }else {
        next();
    }
}

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
app.get('/', (req, res) =>{
    res.render('home')
});

app.get('/campgrounds', catchAsync(async(req, res) =>{
    const campgrounds =await Campground.find({});
    res.render('campgrounds/index', { campgrounds } )
}));


app.get('/campgrounds/new', catchAsync(async(req, res) =>{
    // const campground = await Campground.findById(req.params.id)
     
     res.render('campgrounds/new')
 }));

 app.post('/campgrounds', validateCAmpground, catchAsync(async(req, res) =>{
   //if(!req.body.campground) throw new ExpressError('Invalid Campground Data', 400);
    
   /*const campgroundSchema = Joi.object({
        campground: Joi.object({
            title: Joi.string().required(),
            price: Joi.number().required().min(0),
            image: Joi.string().required(),
            location: Joi.string().required(),
            description: Joi.string().required()
        }).required()
    })
    const {error} = campgroundSchema.validate(req.body);
    if(error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    }*/
    //console.log(result);
   const campground = new Campground(req.body.campground);
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`) 
 }))

 /*
 app.post('/campgrounds', async(req, res, next) =>{
    try{
        const campground = new Campground(req.body.campground);
        await campground.save();
        res.redirect(`/campgrounds/${campground._id}`)
    }
    catch(e){
        next(e)
    }
 })*/

app.get('/campgrounds/:id', catchAsync(async(req, res) =>{
    const campground = await Campground.findById(req.params.id).populate('reviews')
    res.render('campgrounds/show', { campground })
}));

app.get('/campgrounds/:id/edit', catchAsync(async(req, res) =>{
    const campground = await Campground.findById(req.params.id)
    res.render('campgrounds/edit', { campground })
}));

app.put('/campgrounds/:id', validateCAmpground, catchAsync(async(req, res) =>{
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, {...req.body.campground})
    res.redirect(`/campgrounds/${campground._id}`)
} ));

app.delete('/campgrounds/:id', catchAsync(async(req, res) =>{
    const { id } = req.params;
    const campground = await Campground.findByIdAndDelete(id).populate('reviews')
    res.redirect('/campgrounds')
} ));

app.post('/campgrounds/:id/reviews', validateReviews, catchAsync(async(req, res) =>{
    const { id } = req.params;
    const campground = await Campground.findById(id);
   // console.log(campground)
    const review = new Review(req.body.review);
   // console.log(review);
    campground.reviews.push(review)
    const result = await review.save();
    //console.log(result)
    const p = await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
}));

app.delete('/campgrounds/:id/reviews/:reviewId', catchAsync(async(req, res) =>{
    const { id , reviewId} = req.params;
    await Campground.findByIdAndUpdate(id, {$pull:{ reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/campgrounds/${id}`);
}));

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404));
    //res.send('Oh Boy, Soemthing went wrong!')
})

app.use((err, req, res, next)=>{
    const {statusCode = 500} = err;
    if(!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error', {err});
    //const {statusCode = 500,  message = 'Something went wrong' } = err;
    //res.status(statusCode).render('error');
    //res.send('Oh Boy, S00oemthing went wrong!')
})

app.listen(3000, () =>{
    console.log('Serving on port 3000')
})