
const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1830,
    died: 1978,
    bio:'Harvey Bernard Milk was an American politician and the first openly',
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'harvey@gmail.com',
    firstName: 'Stacy',
    born: 1997,
    city: 'Tulsa',
    state: 'Oklahoma'
}

//const firstName = user.firstName;
//const lastName = user.lastName;
//const email = user.email;

//const {email, firstName, lastName, city, bio} = user

//const {born: birthyear, died: deathYear} = user;

const { city, state, died ='N/A'} = user2;

/*function fullName(user){
    return `${user.firstName} ${user.lastName}`
}*/

/*function fullName(user){
    const { firstName, lastName} = user;
    return `${firstName} ${lastName}`
}*/


function fullName({firstName, lastName = 'Tan'}){
   return `${firstName} ${lastName}`
}



