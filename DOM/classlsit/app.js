const list = document.querySelectorAll('li')

for (let i=0; i< list.length; i++){
    list[i].classList.toggle('highlight')
    //list[i].classList.add('border');
}
