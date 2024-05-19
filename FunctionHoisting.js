// speak(); -- causes an error because speak is a function expression
const speak = function(){
    console.log('Good day!');
}

speak();
speak();
speak();


//Can be used before the functiond decleration 
function greet(){
    console.log("Hello there");
}

