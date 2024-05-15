//Get and Set Attribute

const image =document.querySelector('img');
image.setAttribute('src', 'https://devsprouthosting.com/images/chicken.jpg');
image.setAttribute('alt', 'chicken');


//Cchange innerText
document.querySelector('span').innerText= 'Disgusting'

//querySelector and querySelectorAllconst doneTodos = document.querySelectorAll(".done");
const doneTodos = document.querySelectorAll(".done");
const checkbox = document.querySelector("#scales");

//getElementById

let image = document.getElementById("unicorn");
let heading = document.getElementById("mainheading");

//set div textAlign to center
document.getElementById('container').style.textAlign= "center";

//sset image width to 150px
document.querySelector('img').style.width = "150px"

//set image border radius to 50%
document.querySelector('img').style.borderRadius="50%";


//change text color withing the sapn
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const allSpans = document.querySelectorAll('span');
for(let i =0 ;i < allSpans.length; i++)
{
    allSpans[i].style.color= colors[i];
    
}
