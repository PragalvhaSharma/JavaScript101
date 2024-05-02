function isEven(element){
    // if (element % 2 === 0){
    //     return true
    // }
    // return false;
    return element % 2 === 0;

}

console.log(isEven(3))
console.log(isEven(2))

//Using arrow function (requires a return keyword or else is undefined)

var isEvenArrow = (element) =>{
   return element % 2 === 0;
};
console.log(isEvenArrow(3))
console.log(isEvenArrow(2))

//Checks for eveyr single element
var result = [2, 4, 3, 8].every(isEvenArrow);
console.log(result)


//react 

var result = [2, 3, 6, 8].every((e) => (e % 2 == 0));

console.log("Callback function")
console.log(result)
