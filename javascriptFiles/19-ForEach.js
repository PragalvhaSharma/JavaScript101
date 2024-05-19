const myStates = [
    "rajistan", 
    "dehli", 
    "assam", 
    1987,
    "tamil nadu", 
    "Maharastra"
];

//Something itneresting
// var i = 0;

// for (;;){
//     if(i<3)break;
//     console.log(i);
//     i++;
// } -- Prints 0-3

//Both are the same
myStates.forEach((s) => (console.log(s)));
myStates.forEach(s => (console.log(s)));
