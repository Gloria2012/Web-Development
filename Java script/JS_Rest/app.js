/*function rollDie(numSides)
{
    if(numSides === undefined){
         numSides = 6;
    }
    return Math.floor(Math.random()*numSides) +1
}*/

function sum(...nums){
    console.log(nums)
    return nums.reduce((total, el) => total +el)
}

function raceResults(gold, silver, ...everyoneElse){
    console.log(`GOLD METAL GOES TO: ${gold}`)
    console.log(`SILver METAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}
