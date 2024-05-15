
const input = document.querySelector('input');
const h1 = document.querySelector('h1')

input.addEventListener('input', function(e){
    if(input.value ==''){
        h1.innerText = 'Type Below:';
    }
    else
    {
        h1.innerText = input.value;
    }
})

