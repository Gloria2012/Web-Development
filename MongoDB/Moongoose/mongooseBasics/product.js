const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp', {useNewUrlParser: true})
.then( () =>{
    console.log('CONNECTION OPEM');
})
.catch(error =>{
    console.log(error);
})


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20,
    },
    price:{
        type: Number,
        require: true,
        min: [0, 'Pirce must ne postive']
    } ,
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty:{
        online:{
            type: Number,
            default: 0
        },
        inStore:{
            type: Number,
            default: 0
        }
    },
    size:{
        type: String,
        enum: ['S', 'M', 'L']
    }

});

productSchema.methods.greet = function(){
    console.log("HELLOO!!! HI!! HOWDY!!!")
    console.log(`-from ${this.name}`)
}
    
productSchema.methods.toggleOnSale = function(){
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function(newCat){
    this.categories.push(newCat);
    return this.save();
}
productSchema.statics.fireSale = function(){
    return this.updateMany({}, {onSale: true, price: 0 })
}
const Product = mongoose.model('Product', productSchema);

const findProduct = async() =>{
    const foundProduct = await Product.findOne({name: 'Moubtain Bike'});
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors')
    console.log(foundProduct)
   // foundProduct.greet();
}

Product.fireSale().then( res => console.log(res))
//findProduct();

/*const bike =new Product({name: 'Cycling Jersey', price: 28.50, categories: ['Cycling'], size: 'SX'})
bike.save()
    .then( data =>{
        console.log("IT WOREKED!");
        console.log(data);
    })
    .catch(err => {
        console.log("Oh NO ERROR!!")
        console.log(err)

    })
/*
Product.findOneAndUpdate({name: 'Tire Pump'}, {price: -9.99}, {new: true, runValidators: true})
.then( data =>{
    console.log("IT WOREKED!");
    console.log(data);
})
.catch(err => {
    console.log("Oh NO ERROR!!")
    console.log(err)

})*/
