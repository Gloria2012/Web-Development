const nweDiv = document.querySelector('#container')
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
for(let i= 1; i<= 151; i++){
   
    const pkemon = document.createElement('div');
    pkemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText =`#${i}`;
    const newImg = document.createElement('img');
    newImg.src= `${baseURL}${i}.png`
    pkemon.appendChild(newImg);
    pkemon.appendChild(label);
    nweDiv.appendChild(pkemon);

}