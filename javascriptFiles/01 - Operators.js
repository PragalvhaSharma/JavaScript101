var num1 = 7;
var num2 = 6

console.log(num1 + num2)

var answer = num1 > num2

console.log(typeof(answer))

//var vs let -- Difference in scope. 
//let is limited only within {} while var is allowed within the whole function

function testVar() {
    var x = 1;
    if (true) {
        var x = 2; // same variable
        console.log(x); // 2
    }
    console.log(x); // 2
}

function testLet() {
    let y = 1;
    if (true) {
        let y = 2; // different variable
        console.log(y); // 2
    }
    console.log(y); // 1
}

testVar();
testLet();

//Output is 
2
2
2
1