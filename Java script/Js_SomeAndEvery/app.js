
const movies =[
   {
       title: 'Amadeus',
       score: 99,
       year: 1984
   },
   {
       title: 'Parasite',
       score: 95,
       year: 3013
   },
   {
       title: 'ParasiteAlien',
       score: 90,
       year: 2004
   },
   {
      title: 'Water world',
      score: 62,
      year: 1996
  },
  {
      title: 'Parasjingle All The Way',
      score: 71,
      year: 1886
   },
   {
      title: 'Parasite',
      score: 95,
      year: 2010
  }
]

const goodmovies = movies.filter( m => m.score > 80)
const goofTitles = goodmovies.map(m => m.title)

const badmovies = movies.filter( m => m.score < 70)

function validUserNames(usernames) {
   // your code here
   const validUserNames = usernames.filter( usrname => usrname.length < 10)
 }
names =['abcdefg', 'stu3255', 'sdg469466', 'stbjgbglabaajh']
 function validUserNames(usernames) {
   // your code here
   return usernames.filter(name => name.length < 10)
 }

 const goodUsernames = validUserNames[names];
  
//some & every

movies.some(movie => movie.year > 2015)

movies.every(movie => movie.year > 2015)

//even numbers
function allEvens(numbers)
{
    return numbers.every( number => number % 2 === 0)
}