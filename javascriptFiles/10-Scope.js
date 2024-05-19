var name = "Pragalvha";

console.log("Line number 3", name);

function sayName(){
    var name = "Prag";
    //Refers to variable above
    console.log("Line number 6", name);
    sayNameTwo();

    function sayNameTwo(){
        var name = "MY daddy"
        console.log("Line number 11", name);
    }
}

sayName();