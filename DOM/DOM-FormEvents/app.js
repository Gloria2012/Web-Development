const tweetForm = document.querySelector('#tweetForm');
const tweetContainer= document.querySelector('#tweet')
tweetForm.addEventListener('submit', function(e){
    e.preventDefault();
    //console.log("SUBMITTED");
    //const usernameInput = document.querySelectorAll('input')[0];
    //const tweetInput = document.querySelectorAll('input')[1];
    //const usernameIput = tweetForm.elements.username.value;
   // const tweetInput = tweetForm.elements.tweet.value;'
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

