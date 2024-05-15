const express = require('express');
const app = express();
const session = require('express-session');

const sessionOptionms = {secret: 'thisisnotagoodsecret' , resave: false, saveUninitialized: false}

app.use(session(sessionOptionms));

app.get('/viewcount', (req , res) =>{
    if(req.session.count){
        req.session.count += 1;
    }else{
        req.session.count = 1;
    }
    res.send(`You have viewed this page ${req.session.count}`)
    
   // res.send('YOU HAVE VIEWD THIS PAGE X TIMES')
})

app.get('/register', (req, res) =>{
    const {username  = 'Anonumous'} = req.query;
    req.session.username = username;
    res.redirect('/greet')
})

app.get('/greet', (req, res ) => {
    const { username } = req.session;
    res.send(`Welcome back, ${username}`)
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})