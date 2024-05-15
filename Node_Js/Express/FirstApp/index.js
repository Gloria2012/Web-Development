const express = require("express");
const cors= require('cors');
const app = express()
app.use(cors());
app.use(express.urlencoded({ extended: true }));
//console.dir(app)

/*app.use((req, res) => {
    console.log("WE GOT A NEW REQUEST!!")
    res.send('<h1>THIS IS MY WEBPAGE!</h1>')
})*/

app.get('/' , (req, res) => {
    //console.log("CAT REQUEST!!!")
    res.send('WElcome to the home page!!!!')
})
app.get('/search', (req, res)=>{
    const {q} = req.query;
    if(!q){
        res.send('NOTHING FOUND IF NOTHING SEARCHED!')
    }
    res.send(`<h1> Search results for: ${q} </h1>`)
})

app.get('/r/:subreddit', (req, res)=>{
    const {subreddit} = req.params;
    res.send(`<h1> Browsing the ${subreddit} subreddit</h1>`)
    console.log(req.params)
})


app.get('/r/:subreddit/:postId', (req, res)=>{
    const {subreddit, postId} = req.params;
    res.send(`<h1> Viewing Post ID: ${postId}  on the ${subreddit} subreddit</h1>`)
    console.log(req.params)
})
app.post('/cats', (req, res) => {
    res.send('POST REQUET TO /cats!!!!')
})

app.get('/cats' , (req, res) => {
    //console.log("CAT REQUEST!!!")
    res.send('MEOW!!')
})

app.get('/dogs' , (req, res) => {
    //console.log("CAT REQUEST!!!")
    res.send('WOOF!!')
})

app.get('/admin', (req, res) => {
    res.send('<h1>Admin Page Options</h1>')
})
/*
app.get('/admin/options', (req, res) => {
    const optionsHtml = `<h1>Admin Page Options</h1>
      <form action="/admin/options" method="POST">
        <input type="submit" name="option" value="viewAll">View All Appointments</button>
        <button type="submit" name="option" value="viewByDate">View by Date</button>
      </form>`;
    res.send(optionsHtml);
  });*/
/*app.get('/admin/options', (req, res) => {
    console.log(req.body)
   if (req.body.option === 'viewAll') {
        res.send('Wiew All')
        res.redirect('/admin/appointments/all');
    } else if (req.body.option === 'viewByDate') {
        res.send('View By Date')
        res.redirect('/admin/appointments/by-date');
    } else{
      const optionsHtml = `<h1>Admin Page Options</h1>
        <form action="/admin/options" method="post">
          <button type="submit" name="option" value="viewAll">View All Appointments</button>
          <button type="submit" name="option" value="viewByDate">View by Date</button>
        </form>`;
      res.send(optionsHtml);
    }
  });*/
  app.get('/admin/options', (req, res) => {
    const optionsHtml = `<h1>Admin Page Options</h1>
      <form action="/admin/appointments" method="post">
        <button type="submit" name="option" value="viewAll">View All Appointments</button>
        <button type="submit" name="option" value="viewByDate">View by Date</button>
      </form>`;
  
    if (req.query.option === 'viewAll') {
      res.redirect('/admin/appointments');
    } else if (req.query.option === 'viewByDate') {
      res.redirect('/admin/appointments-by-date');
    } else {
      res.send(optionsHtml);
    }
  });

app.get('*' , (req, res) => {
    //console.log("CAT REQUEST!!!")
    res.send(`I don't know the path`)
})


//app.get('/dogs', req)
app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
})



