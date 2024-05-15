const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp', {useNewUrlParser: true})
.then( () =>{
    console.log('CONNECTION OPEM');
})
.catch(error =>{
    console.log(error);
})

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fulName').get(function(){
    return `${this.first} ${this.last}`
})

personSchema.pre('save', async function(){
    console.log("ABOUT TO SAVE!!!!")
})

personSchema.post('save', async function(){
    console.log("JUST SAVED!!!!")
})



const Person = mongoose.model('Person', personSchema)
