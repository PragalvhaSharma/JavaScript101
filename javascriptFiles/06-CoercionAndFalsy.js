var user = null; //Considered false with false

var number = "two";

if(number){
    console.log("Condition is null")
}

//Considered true (converts automitaclly)
if(2 == number){
    console.log("Condition is null")
}

//Triple equals considers type of variable
if(2 === number){
    console.log("Condition is null")
}

console.log( 2 + 2) //4
console.log(2 + "2") //22 (converts to a string)
