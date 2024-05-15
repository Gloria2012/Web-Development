const fs = require('fs');
const folderName = process.argv[2] || 'Project';
const content = 'Some Content!';
//console.log(fs);
/*
fs.mkdir('Dogs', {recusive: true}, (err) =>{
    console.log('IN THE CALLBACK!!')
    if (err) throw err;
});
*/
try{
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, content )
    fs.writeFileSync(`${folderName}/app.js`, content)
    fs.writeFileSync(`${folderName}/styles.css`, content)
    //console.log('I COME AFTER MKDIR IN THE FILE!!')
}catch (e){
    console.log('SOMETHING WENT WRONG!!!!');
    console.log(e);
}

