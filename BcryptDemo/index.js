const bcrypt = require('bcrypt');
/*
const hashPassword = async(pw) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pw, salt)
    console.log(salt);
    console.log(hash);
}*/

const hashPassword = async(pw) => {
    const hash = await bcrypt.hash(pw, 12)
    console.log(hash);
}


const login = async( pw, hashedPw) => {
    const result = await  bcrypt.compare(pw, hashedPw);
    if(result){
        console.log("LOGGED YOU IN! SUCCESSFUL MATCH!")
    }else{
        console.log("INCORRECT!")
    }
}

//hashPassword('monkey');

login('monkey', '$2b$10$L9UQIdmRoAlbamLefQ4VHub1/7AH0bBKR130/1FkOjgM9PkOKu3ve');
