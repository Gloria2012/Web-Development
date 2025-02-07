const Campground = require('../models/campground');
const mbxGeocoding= require("@mapbox/mapbox-sdk/services/geocoding");
const mapBoxToken = process.env.MAPBOX_TOKEN;
console.log(mapBoxToken)
const geocoder = mbxGeocoding({ accessToken: mapBoxToken});
const cloudinary = require('cloudinary').v2;

module.exports.index = async(req, res) => {
    const campgrounds = await Campground.find({})
    res.render('campgrounds/index', { campgrounds });
}

module.exports.renderNewForm = (req, res) => {
    res.render('campgrounds/new');
}

module.exports.createCampground = async(req, res, next) => {
    console.log("Adding New CAmpground")
     const geoData= await geocoder.forwardGeocode({
        query: req.body.campground.location,
        limit: 1
    }).send()
    console.log(geoData);  
    const campground = new Campground(req.body.campground)
    campground.geometry = geoData.body.features[0].geometry;
    campground.images=  req.files.map( f => ({url : f.path, filename : f.filename } ) )
    campground.author = req.user._id;
    await campground.save();
    console.log(campground);
    req.flash('success', 'Successfully made a new campground!');
    res.redirect(`/campgrounds/${campground._id}`);
}


module.exports.showCampground = async(req, res, next) => {
    const campground = await Campground.findById(req.params.id).populate({
        path: 'reviews',
        populate: {
            path: 'author'
        }  
    }).populate('author');
    if(!campground){
        req.flash('error', 'Cannot find that campground');
        return  res.redirect('/campgrounds');
    }
    res.render('campgrounds/show', { campground })
}

module.exports.editCampground = async(req, res, next) => {
    const campground = await Campground.findById(req.params.id)
    if(!campground){
        req.flash('error', 'Cannot find that campground');
        return  res.redirect('/campgrounds');
    }
    res.render('campgrounds/edit', { campground })
}

module.exports.updateCampground = async(req, res, next) => {
     const { id } = req.params;
   // console.log(req.body);
    const campground = await Campground.findByIdAndUpdate(id, {...req.body.campground})
    const imgs = req.files.map( f => ({url : f.path, filename : f.filename } ) );
    campground.images.push( ...imgs);
    await campground.save()
    if(req.body.deleteIamges){
        for(let filename of req.body.deleteIamges){
           const result=  await cloudinary.uploader.destroy(filename);
           console.log(result);
        }
        await campground.updateOne({ $pull : { images: { filename: {$in: req.body.deleteIamges} } } })
        console.log(campground);
    }
   
    req.flash('success', 'Successfully updated campground!')
    res.redirect(`/campgrounds/${campground._id}`)
}

module.exports.deleteCampground = async(req, res, next) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndDelete(id).populate('reviews')
    req.flash('success', 'Successfully deleted campground!')
    res.redirect('/campgrounds')
}