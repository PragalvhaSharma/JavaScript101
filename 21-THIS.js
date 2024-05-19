// /* 
// this- For all regunal function calls, this points to the window object
// */

// console.log(this) //Prints {} but on the browser prints the window object
// var user= {
//     firstName: "Hitesh",
//     courseCount: 4,
//     getCourseCount: function(){
//         console.log("Line 7", this)
//     },
// };

// //Not a regular function call -- Instead done through an object
// user.getCourseCount()

// //This in this case refers to the entirety of the object. Thus this is the output. 
// // Line 7 {
// //     firstName: 'Hitesh',
// //     courseCount: 4,
// //     getCourseCount: [Function: getCourseCount]
// //   }

// //This is a regular function call
// function sayHello(){
//     console.log("Hello");
// }

// sayHello();


//Testing 
console.log(this) //Prints {} but on the browser prints the window object
var user= {
    firstName: "Hitesh",
    courseCount: 4,
    getCourseCount: function(){
        console.log("Line 7", this)
        function sayHello(){
            console.log("Hello");
            //This keyword inside now points to the window object-- REMEMBRE // this- For all regunal function calls, this points to the window object
            console.log("LINE 10", this);
        }
        sayHello();
    },
};

//THIS IS NOT A REGULAR FUNCTION call. This is an object call.  But sayHello() is a function call. 
user.getCourseCount();