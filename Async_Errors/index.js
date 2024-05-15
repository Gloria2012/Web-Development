const express = require ('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')

const AppError = require('./AppError')

app.use(methodOverride('_method'))

const Product = require('./models/product');
mongoose.connect('mongodb://127.0.0.1:27017/farmStand2', {useNewUrlParser: true})
.then( () =>{
    console.log('MONGO CONNECTION OPEM');
})
.catch(error =>{
    console.log('OH NO MONGO CONNECTION ERROR');
    console.log(error);
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))

const categories =['fruit', 'vegetable', 'dairy', 'fungi']

function wrapAsync(fn) {
    return function(req, res, next) {
        fn(req, res, next).catch(e => next(e))
    } 
}

app.get('/products', wrapAsync(async (req, res, mext) =>{
    const  {category} = req.query;
    if(category){
        const products = await Product.find({category})
        res.render('products/index', {products, category})
    }else{
        const products = await Product.find({})
        res.render('products/index', {products, category: 'All' })
    }
         //res.render('products/index', {products})
  }))

/*
app.get('/products', async (req, res, mext) =>{
  try{
        const  {category} = req.query;
        if(category){
            const products = await Product.find({category})
            res.render('products/index', {products, category})
        }else{
            const products = await Product.find({})
            res.render('products/index', {products, category: 'All' })
        }
    }
    catch(e){
        next(e)
    }
    
   nsole.log(products)
    //res.render('products/index', {products})
})*/

app.get('/products/new',  (req, res) =>{
    res.render('products/new', {categories})
})

app.post('/products', async (req, res,next) =>{
    try{
        const newProduct = new Product(req.body)
        await newProduct.save()
        console.log(newProduct)
        res.redirect(`/products/${newProduct._id}`)
    }
    catch(e){
        next(e);
    }
   
})

app.get('/products/:id', async(req, res, next) =>{
    try{
        const { id }= req.params
        const product = await Product.findById(id)
        if(!product)
        {
            throw new AppError('Product not found', 404);
        }
        res.render('products/show', { product })
    }
    catch(e)
    {
        next(e)
    }
    /* const { id }= req.params
    const product = await Product.findById(id)
   if(!product)
    {
        return next(new AppError('Product not found', 404));
    }
    res.render('products/show', { product })*/
})

app.get('/products/:id/edit', async(req, res, next) =>{
    try{
        const { id }= req.params
        const product = await Product.findById(id)
        if(!product)
        {
            throw new AppError('Product not found', 404);
        }
        res.render('products/edit', { product, categories })
    }catch (e) {
        next(e)
    }
})

app.put('/products/:id', async(req, res, next) =>{
    try{
        const { id }= req.params
        const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true})
        console.log(req.body)
        res.redirect(`/products/${product._id}`)
    }
    catch(e){
        next(e)
    }
})

app.delete('/products/:id', async(req, res) =>{
    const { id }= req.params
    const product = await Product.findByIdAndDelete(id)
    res.redirect('/products');

})

const handleValidationEroor = err => {
    console.dir(err);
    return  new AppError(`Validation Failed...${err.message}` ,400)
}

app.use((err, req, res, next) => {
    console.log(err.name);
    if(err.name ==='ValidationError')  err = handleValidationEroor(err)
    next(err);
})


app.use((err, req, res, next) => {
    const {status = 500, message = 'Something went erong'} = err;
    res.status(status) .send(message);
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000")
})