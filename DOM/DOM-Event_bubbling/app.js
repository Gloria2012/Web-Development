const button = document.querySelector('#changeColor')
const container = document.querySelector('#container')

button.addEventListener('click', function(e){
    color =  makeRandColor();
    console.log(color);
    container.style.backgroundColor = makeRandColor();
    e.stopPropagation();

})

container.addEventListener('click', function(e){
    container.classList.toggle('hide');
})

const makeRandColor = () =>{
    const r= Math.floor(Math.random()*255);
    const g= Math.floor(Math.random()*255);
    const b= Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`;
}