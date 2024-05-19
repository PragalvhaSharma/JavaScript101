for(let i = 0; i < 10; i++){
    console.log(i);
}

const myStates = [
    "rajistan", 
    "dehli", 
    "assam", 
    1987,
    "tamil nadu", 
    "Maharastra"
];

//let is freed from memory. Thats why its used instead of var
for(let i = 0; i<myStates.length; i++){
    if(typeof myStates[i] !== "string") break;
    console.log([i]);
}

let i = 0;

while (i < myStates.length){
    console.log(myStates[i]);
    i++;
}

do {
    comsole.log(i);
    i++;
}while(i<10);