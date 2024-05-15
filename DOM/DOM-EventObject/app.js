const makeRandColor = ()=>{
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return (`rgb(${r}, ${g}, ${b})`);
}

const button = document.querySelector('button');
button.addEventListener('click', function(evt){
    console.log(evt);
})

const input= document.querySelector('input');
input.addEventListener('keydown', function(e){
    console.log(e.key);
    console.log(e.code);
})


window.addEventListener('keydown', function(e){
    switch(e.code){
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'Arrowleft':
            console.log("LEFT!");
            break;
       case 'ArrowRight':
            console.log("RIGHT!");
            break;
        default:
            console.log("ignored");
    }
   
})