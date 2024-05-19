//Global context -- Contails Functions and variables so that they are avaiable for throughout the code even before they are declared
//Execution context -- variables are scanned and made undefined (even for functions) -- Cannot be called before they are declared

//Problem Output is 55 if a string is passed
function tipper(a){
    var bill = a
    console.log( bill + 5);
}

tipper(5);
tipper("5");

//Accountign for string inpts
function tipperFixed(a){
    var bill = parseInt(a); //Converts string into an int
    console.log( bill + 5);
}

tipper(5);


// BigTipper("200") (cannot have this. Call needs to be after the function for variable functions)


var BigTipper = function(a){
    var bill = parseInt(a);
    console.log(bill + 15);
}

BigTipper("200")


//Execution context and not global context
console.log(name) // Undefines
var name = "prag";

function sayName(){
    var name = "Praagdaddy"
    console.log(name)
}

sayName()

//Prints out "prag" as it is defined for execution context
console.log(name)
