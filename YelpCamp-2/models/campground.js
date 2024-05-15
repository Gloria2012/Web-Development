
const express = require('express');
const mongoose= require('mongoose');
const Review = require('./review')
const schema = mongoose.Schema;

const CampgroundSchema = new schema({
    title: String,
    image: String,
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