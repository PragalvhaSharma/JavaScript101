
var countries = ["India", "USA", "Japan", "Russia"]

var states = new Array("Kathmandu", "Ontario", "LA")

console.log(states[0])
console.log(states.length)

states[0] = "Pubjabi";


var user = ["Pragalvha", "pragalvhasharma@gmail.com", 3, 34, true]
console.log(user);

//user.pop() Getting rid of last value
// user.shift() (removes teh first element)

user.indexOf(3);
user.indexOf(3423434); //Returns -1 if if it isnt there 

//Puts each individual letter into an index of the array
console.log(Array.from("Pragalvha"))