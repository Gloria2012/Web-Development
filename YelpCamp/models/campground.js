
const express = require('express');
const mongoose= require('mongoose');
const Review = require('./review')
const schema = mongoose.Schema;

const ImageSchema = new schema({
    url: String,
    filename: String
})

ImageSchema.virtual('thumbnail').get(function() {
    return this.url.replace('/upload', '/upload/c_thumb,h_200,w_200');
})

const opts ={ toJSON: {virtuals: true} };

const CampgroundSchema = new schema({
    title: String,
    //image: String,
    images: [ImageSchema],
   
    geometry: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
            coordinates: {
            type: [Number],
            required: true
        }
    },
      
    price: Number,
    description: String,
    location: String,
    author: 
        {
            type: schema.Types.ObjectId,
            ref: 'User'
        },
    reviews:[
        {
            type: schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
},opts);

CampgroundSchema.virtual('properties.popUpMarkup').get(function() {
    return `
        <strong><a href='/campgrounds/${this._id}'>${this.title}</a></strong>
        <p>${this.description.substring(0,20)}...</p>
    `
});

CampgroundSchema.post('findOneAndDelete', async function(doc){
    console.log(doc)
    if(doc){
        await Review.deleteMany({
            _id:{
                $in: doc.reviews
            }
        })
    }
})

module.exports = mongoose.model('Campground', CampgroundSchema);