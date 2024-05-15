
/*
const loadStarWarsPeople = async() =>{
    try{
        const res = await  fetch("https://swapi.dev/api/people/1");
        const data = await res.json();
        console.log(data);
        const res2 = await  fetch("https://swapi.dev/api/people/2");
        const data2 = await res2.json();
        console.log(data2);
    }
    catch(e){
        onsole.log("ERROR!!!", e);
    }
};*/
/*
axios.get("https://swapi.dev/api/people/1")
.then(res =>{
    console.log(res);
})
.catch(err => {
    console.log("ERRPOR!!!", err);
})*/

const getStarWarsPerson = async (id) => { 
    try{
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    }catch(e){
        console.log("ERROR!!!", e);
    }
}

//getStarWarsPerson(5);
//getStarWarsPerson(10);

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button')
const addNewJoke = async() =>{
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI')
    newLI.append(jokeText)
    jokes.append(newLI);

}
button.addEventListener('click', addNewJoke)



const getDadJoke = async() =>{
    try{
        const config = {headers: {Accept: "application/json"}}
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;       
    }catch(e){
        return "NoJOKES AVAILABLE, SORRY :("
    }
  
  
}