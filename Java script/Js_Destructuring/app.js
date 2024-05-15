
/*const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    },
    shoutName:function(){
        setTimeout(() => {
           console.log(this);
           console.log(this.fullName())
        }, 3000);
    }
}*/

const scores = [929321, 889341, 888336, 772739, 543672, 243567, 111934]
const highScore = scores[0];
const secondHighScore = scores[1];

const [gold, silver, bronze, ...everyoneElse] =scores;