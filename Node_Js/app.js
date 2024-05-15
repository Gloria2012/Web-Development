/*const math = require('./math');
console.log(math.PI);

console.log(math.square(9));*/

const {PI, square} = require('./math');

const cats = require('./shelter')

console.log('REQUIRE AN ENTIRE DIRECTORY', cats);

console.log(PI);

console.log(square(9));