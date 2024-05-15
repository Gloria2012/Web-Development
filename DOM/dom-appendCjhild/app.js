const nweDiv = document.getElementById('container')

for(let i= 0; i< 100; i++){
    const newbutton = document.createElement('button');
    const label = `Button${i+1}`;
    newbutton.innerHTML = label;
    nweDiv.appendChild(newbutton);

}