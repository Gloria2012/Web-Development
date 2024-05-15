const express = require('express');
//const cors = require('cors');
const path = require('path');
const mongoose= require('mongoose');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const Joi = require('joi');
const ExpressError = require('./utils/ExpressError');
const methodOveride = require('method-override');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');

const userRoutes = require('./routes/users')
const campgroundRoutes = require('./routes/campground');
const reviewRoutes = require('./routes/reviews');


mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp', {
    useNewurlParser: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, 'connectioin error:'));
db.once('open', () =>{
    console.log('Datbase Connected');
})

const app = express();
//app.use(cors());
app.engine('ejs', ejsMate)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended : true}))
app.use(methodOveride('_method'))
app.use(express.static(path.join(__dirname, 'public')))

const sessionCongif= {
    secret: 'thisshouldbeabettersecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 *60 *24 *7,
        maxAge: 1000 * 60 *60 *24 *7
    }

}
app.use(session(sessionCongif))
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
   //console.log(req.originalUrl);
  // req.session.returnTo = '';
   //req.session.returnTo = '/campgrounds';
    if(!['/login', '/'].includes(req.originalUrl)){
        req.session.returnTo = req.originalUrl;
    }
    
    
   
   /* if(!['/login', '/'].includes(req.originalUrl)){
        req.session.returnTo = '';
    }
    else{
        req.session.returnTo = req.originalUrl;
    }*/

    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.use('/fakeUser', async(req, res) => {
    const user = new User({email: 'sweoo.swe@gmail.com', username:'Gloria'})
    const newUser = await User.register(user, 'chicken');
    res.send(newUser);
})

app.use('/', userRoutes);
app.use('/campgrounds', campgroundRoutes);
app.use('/campgrounds/:id/reviews', reviewRoutes);


app.get('/', (req, res) =>{
    res.render('home')
});

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