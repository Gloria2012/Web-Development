
/*
fetch("https://swapi.dev/api/people/1")
.then( (res) => {
    console.log("RESOLVED!", res);
    return res.json();
})
.then(data => {
    console.log("JSON DONE!!!", data);
    return fetch("https://swapi.dev/api/people/2");
})
.then( (res) => {
    console.log("SECOND REQUEST RESOLVED!");
    return res.json();
})
.then(data => {
    console.log("JSON DONE(SECOND REQUEST)!!!", data);
})
.catch( (err) =>{
    console.log("ERROR!!", err);
})*/

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
};

loadStarWarsPeople();

