const mongoose= require('mongoose');
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp', {
    useNewurlParser: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, 'connectioin error:'));
db.once('open', () =>{
    console.log('Datbase Connected');
})

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async() =>{
    await Campground.deleteMany({});
    for(let i = 0; i < 50; i++){
        const random1000= Math.floor(Math.random()*1000);
        const price = Math.floor(Math.random()*20) +10;
        const camp = new Campground({
            author: '655281cf030cb4c8333aec95',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://source.unsplash.com/collection/483251',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptas molestias officiis nulla eligendi reprehenderit officia! Et eos illo neque obcaecati reiciendis, nostrum quaerat natus, illum labore atque error pariatur!',
            price
        })
        await camp.save();
    }
    //const c = new Campground({title: 'purple field'});
    
}

seedDB().then(() => {
    mongoose.connection.close();
})