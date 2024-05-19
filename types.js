//Primitive types: numbers, strings, Booleans, null, undefined, symbols

// Refrence Types: All Objects, object literals, arrays, functions, dates, 

//Stack = values of variables (primitive types)
//Heap = Refrence types

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`score:${scoreOne}`, `soreTwo: ${scoreTwo}`); 

scoreOne = 100;
console.log(`score:${scoreOne}`, `soreTwo: ${scoreTwo}`); 

//For refrence tyoes - changes impact it

const userOne = {name: "ryu", age: 30};
const userTwo = userOne;

console.log(userOne, userTwo)
//Outout : { name: 'ryu', age: 30 } { name: 'ryu', age: 30 }

userTwo.age=40;
console.log(userOne, userTwo)
//Output: { name: 'ryu', age: 40 } { name: 'ryu', age: 40 }