/*const lis = document.querySelectorAll('li')
for(let li of lis){
    li.addEventListener('click', function(){
        li.remove();
    })
}*/
const tweetForm = document.querySelector('#tweetForm');
const tweetContainer= document.querySelector('#tweet')
tweetForm.addEventListener('submit', function(e){
    e.preventDefault();
   const usernameIput = tweetForm.elements.username;
   const tweetInput = tweetForm.elements.tweet;
    
    addTweet(usernameIput.value, tweetInput.value);
    usernameIput.value='';
    tweetInput.value='';

    
});

const addTweet=(userName, tweet )=>{
    const newTweet = document.createElement("li");
    const bTag = document.createElement('b');
    bTag.append(userName);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetContainer.append(newTweet);
}

tweetContainer.addEventListener('click', function(e){
    e.target.nodeName ==='LI' && e.target.remove();
})
