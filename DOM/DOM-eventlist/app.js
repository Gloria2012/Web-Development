const btn = document.querySelector("#v2");

btn.onclick = function(){
    console.log('YOU CLICKED ME!');
    console.log('I HOPE IT WORKED!!');
}

function scream(){
    console.log('AAAAAAAAHHHHHHH');
    console.log('STOP TOUCHING ME!');

}

btn.onmouseenter = scream;
document.querySelector('h1').onclick = function() {
    alert('you clicked the h1');
}

const btn3 = document.querySelector("#v3");
/*btn3.addEventListener('click', function(){
    alert('CLICKED');
})*/

btn3.addEventListener('click', function(){
    console.log('\"hello\"');
})

function twist(){
    console.log('TWIST');
}

function shout(){
    console.log('SHOUT109')
}
const tasButton = document.querySelector('#tas')

//tasButton.onclick = twist
//tasButton.onclick = shout

tasButton.addEventListener('click', twist, {once :true})
tasButton.addEventListener('click',shout)

const helloBtn = document.querySelector('#hello')

helloBtn.addEventListener('click',function(){
   console.log('\"hello\"'); 
});

function goodbye(){
   console.log('goodbye'); 
}
const goodbyeBtn = document.querySelector('#goodbye')
goodbyeBtn.addEventListener('click', goodbye)