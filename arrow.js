//regular functions
const calcArea = function(radius){
    return 3.14 * radius ** 2;
};

//Arrow Function -- need parenthesis for 2 parameters (=> is a replacement for return )
const calc2 = (radius) => 3.14 * radius ** 2;

console.log(calc2(4))


//Converting to arrow functions
    const greet = function(){
        return "Hello World"
    }

    //Answer
    const greetArr = () => "Hello World";

//Function 2
    const bill = function(products, tax){
        let total = 0;
        for (let i = 0; i <products.length; i++){
            total += products[i] + products[i]*tax;
        }
        return total;
    }

    console.log(bill([10, 15, 30], 0.2))

    //My arrow function -- Only useful for 1 return type. 
    const billArrow = (products, tax) =>{
        total = 0;
        for (let i = 0; i <products.length; i++){
            total += products[i] + products[i]*tax;
        }
        return total;

    }
