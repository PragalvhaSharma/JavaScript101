
//Works even if the call is above the function
sayHello()

function sayHello(){
    console.log("Hello!")
}

//considers only the number -- true
if(2 == "2"){
    console.log("true")
}else{
    console.log("false")
}

//also considers the ddatatype--false
if(2 === "2"){
    console.log("true")
}else{
    console.log("false")
}

