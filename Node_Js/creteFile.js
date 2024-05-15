const fs = require('fs');
const folderName = process.argv[2] || 'Project';
const content = 'Some Content!';


fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`, content)
fs.writeFileSync(`${folderName}/app.js`, content)
fs.writeFileSync(`${folderName}/styles.css`, content)
//console.log('I COME AFTER MKDIR IN THE FILE!!')

