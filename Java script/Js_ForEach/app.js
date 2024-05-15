
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
