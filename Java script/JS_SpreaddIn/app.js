/*function rollDie(numSides)
{
    if(numSides === undefined){
         numSides = 6;
    }
    return Math.floor(Math.random()*numSides) +1
}*/

const nums = [13, 4, 5, 21, 3, 31, 1 ,2 ,7 , 6 ,4 ,2 , 5436]
const maxNum = Math.max(...nums);

const minNum =Math.min(...nums);

const cats =["Blue", "Scout", "Rocket", ];
const dogs = ["Rusty", "Wyatt"];

const allPets= [...cats, ...dogs];

const allPets2= [...dogs, ...cats];

const allPets3= [...dogs, ...cats , "Speedy"];

const allPets4= [1, 2, 3, ...dogs, ...cats , "Speedy"];

const feline = {legs: 4, family: 'Felidale'}
const canine = {isFurry: true, family: 'CAninae'}

const catdogs2 = {...feline, ...canine};

const catdogs3 = {...canine, ...feline};

const catdogs4 = {...canine, ...feline, familt: 'Steele'};

const dataFromForm ={
    email: 'blueman@gmil.com',
    password: 'tobias123!',
    username: 'tfunke'
}

const newUser = {...dataFromForm, id:2345, isAdmain: false}