//Gives us acess to teh global context
console.log(this);

var game = "basketball";

function sayName(){
    var name = "Pragalvha";
    console.log(this);
}

sayName();