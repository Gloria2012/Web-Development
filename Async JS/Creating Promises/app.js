
const delayedColorChange =(color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('oramge', 1000))  
    .then(() => delayedColorChange('yellow', 1000))  
    .then(() => delayedColorChange('green', 1000))  
    .then(() => delayedColorChange('blue', 1000))  
    .then(() => delayedColorChange('indugo', 1000))  
    .then(() => delayedColorChange('violet', 1000)) 




/*const delayedColorChange =(newColor, delay, doNext) =>{
    setTimeout( () => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => { 
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {
                })
            })
        } )
    })
})*/
