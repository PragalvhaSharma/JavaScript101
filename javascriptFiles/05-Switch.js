var user  = "testprep";

//12

//Matches value of user with case and executes code (like an if statement)
switch (user) {
    case "admin":
        return console.log("You get full acess")
    case "subAdmin":
        return console.log("Get access to add and delete course")
    case "user":
        return console.log("gets acess to consume content")

    //IF none of the case matches
    default:
        console.log("Trial user")
        break;
}