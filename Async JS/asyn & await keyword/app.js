
const delayedColorChange =(color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}
/*
delayedColorChange('red', 1000)
    .then(() => delayedColorChange('oramge', 1000))  
    .then(() => delayedColorChange('yellow', 1000))  
    .then(() => delayedColorChange('green', 1000))  
    .then(() => delayedColorChange('blue', 1000))  
    .then(() => delayedColorChange('indugo', 1000))  
    .then(() => delayedColorChange('violet', 1000)) 
*/

async function rainbow(){
    await delayedColorChange('oramge', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)  
    await delayedColorChange('blue', 1000)  
    await delayedColorChange('indugo', 1000)  
    await delayedColorChange('violet', 1000) 
}

//rainbow().then( () => console.log('END OF RAINBOW!'))

async function printRainbow(){
    await rainbow();
    console.log('END OF RAINBOW!');
}


//printRainbow()

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if(delay > 4000){
                reject('Connection Timeout :(')
            }else{
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequests(){
    try{
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    }catch(e){
        console.log('CAUGHT AN ERROR!')
        console.log('error is:', e)

    }
}
    