const figlet = require('figlet');
const cpolors = require("colors");

figlet('Hello World!!', function(err, data){
    if(err){
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.green);
})