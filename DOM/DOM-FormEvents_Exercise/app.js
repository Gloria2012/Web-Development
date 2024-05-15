const form = document.querySelector('form');
const groceryist= document.querySelector('#list')
form.addEventListener('submit', function(e){
    e.preventDefault(); 
   const productnameIput = form.elements.product;
   const quantityInput = form.elements.qty;  
    addList(productnameIput.value, quantityInput.value);
    productnameIput.value='';
    quantityInput.value='';
});

const addList=(productName, productQuantity )=>{
    const newList = document.createElement("li");
    newList.append(productQuantity);  
    newList.append(` ${productName}`);
    groceryist.append(newList);
}

