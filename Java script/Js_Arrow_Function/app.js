
const movies =[
        {
            title: 'Amadeus',
            score: 99
        },
        {
            title: 'Parasite',
            score: 95
        },
        {
            title: 'ParasiteAlien',
            score: 90
        }
 ]

 movies.forEach(function(movie){
     console.log(`${movie.title}-${movie.score}`);
 })

 const titles = movies.map(function(movie){
    return movie.title.toUpperCase();
 })

 const add =(x,y) => {
    return x+y;
 }

 const square = (x) =>{
    return x*x;
 }

 const rollDie =() =>{
    return Math.floor(Math.random() *6) +1
 }

 const rollDie2 =() =>(
     Math.floor(Math.random() *6) +1
 )

 const add2 = (a,b) => a + b

 const newMovie= movies.map(movie=> (
    (`${movie.title}-${movie.score/10}`)
 ))