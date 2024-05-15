const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOveride = require('method-override')

app.use(methodOveride('_method')) //override with POST for PUT(UPDATE) and DELETE

mongoose.connect('mongodb://127.0.0.1:27017/farmStandTake2', {useNewUrlParser: true})
//'mogodb://127.0.0.1:27017/farmStand', {useNewUrlParser: true})
.then(() => {
    console.log('MONGO CONNECTION OPEN');
})
.catch(error => {
    console.log('OH NO MONGO CONNECTION ERROE')
    console.log(error);
})



const Product = require('./models/product');
const Farm = require('./models/farm');
const Order = require('./models/order');

app.set('/views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))// parsing middleware for req.body



app.get('/', (req, res) => {
    res.send("HI!!!!");
    const newOrder = new Order({
        //userId: new mongoose.Types.ObjectId('647490d4f8eeae0dc551432b'), 
        userId:'647490d4f8eeae0dc551432b',
        products: [
            {
                // new mongoose.Types.ObjectId('643dbff9d82df2fb685e02d0'), 
                _id: '643dbff9d82df2fb685e02d0', 
            }
          // ...more product IDs if needed
        ],
        address: 'Charbielin 124',
        postalCode: '48-340'
      });
   
      newOrder.save()
          .then(order => console.log('Order created:', order))
          .catch(err => console.error(err));
})
/*
//FARM ROUTES
app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    console.log(farms)
    //res.render('farms/index', { farms })
})

app.delete('/farms/:id', async(req, res) => {
    const { id } = req.params;
    const farm= await Farm.findByIdAndDelete(id);
    res.redirect('/farms')

})
app.get('/farms/New', (req, res) => {
    res.render("farms/new");
})

app.get('/farms/:id', async(req, res) => {
    const farm = await Farm.findById(req.params.id).populate('products')
    res.render('farms/show', {farm})
   
})

app.post('/farms', async(req, res) =>{
    const farm = new Farm(req.body);
    await farm.save();
    res.redirect('/farms');
})

app.get('/farms/:id/products/new',  async(req, res) => {
    const {id} = req.params;
    const farm = await Farm.findById(id);
    res.render('products/new', {categories, farm})
})

app.post('/farms/:id/products', async(req, res) =>{
    const { id }  = req.params;
    const farm = await Farm.findById(id);
    //console.log(farm)
    const {name, price, category}  = req.body;
    const product = new Product({name, price, category});
    farm.products.push(product);
    product.farm = farm;
   // console.log(product)
    await farm.save();
    await product.save();
    res.redirect(`/farms/${id}`)
    //res.send(farm)
})


//Product ROUTES
const categories =['fruit', 'vegetable', 'dairy', 'fungi']
app.get('/products',async (req, res) => {
    const products = await Product.find();
    res.render('products/index', {products})
    //res.send("All Products");
})

app.get('/products/New', (req, res) =>{
    res.render('products/new', {categories})
})


app.get('/products/:id', async(req, res) => {
    const {id} = req.params;
    //console.log(id)
    const product = await Product.findById(id).populate('farm', 'name');
    //console.log(product);
    res.render('products/show', {product})
})

app.get('/products/:id/edit', async(req, res) =>{
    const {id} = req.params;
    //console.log(id);
    const product= await Product.findById(id)
    //console.log(product);
    res.render('products/edit', {product, categories})
})

app.put('/products/:id', async(req, res) =>{
    const { id }= req.params
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true})
   // console.log(req.body)
    res.redirect(`/products/${product._id}`)
})

app.delete('/products/:id', async(req, res) =>{
    const { id }= req.params
    const product = await Product.findByIdAndDelete(id);    
    // console.log(req.body)
    res.redirect(`/products`);
})
*/
app.listen('3000', ()=>{
    console.log('APP IS LISTENING OM PORT 3000 ');
})
