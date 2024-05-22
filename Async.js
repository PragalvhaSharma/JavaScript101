let question = "Life, the universe and everything?";
let answer = 42;
console.log(`${question} ${answer}`); //Output is Life, the universe and everything? 42


//Problem is when running real code, we don't know how long it will take to get the answer.
//We can use async code to handle this situation --- A PROMISE
//When we request from a remote api, we get a promise back. It is a placeholder for the result.

const axiosRequest = require('axios'); // import axiosRequest from 'axios'; -- The axios library is a tool for making HTTP requests.


//Problem is that the get method gets the answer after the console.log is executed, however that does not mean that the api has finished processing
let response = axiosRequest.get('https://www.boredapi.com/api/activity/');
console.log(response); //Output is a promise object as the api has not finished processing


//SOLUTION

axiosRequest
    .get('https://www.boredapi.com/api/activity/')
    .then(response => { 
        console.log(`You could ${response.data.activity} today!`) //Output is 'You could go to the park today!
    })
    .catch(error => {
        console.log('There was an error!', error);
    })

console.log("Why am I here")

//Better way - AWAIT
//Async function always reutrns a promise
async function getActivity() {
    try {
        //Await pauses the execution of the get function until the promise is resolved. ONLY VALID INSIDE async functions. 
        let response = await axiosRequest.get('https://www.boredapi.com/api/activity/');

        //Does not run until promise is resolved
        console.log(`You could ${response.data.activity} today!`);
    } catch (error) {
        //Runs if promise is rejected
        console.log('There was an error!', error);
    }
}

getActivity();