
//array holds 2 objects

let user = {
    name: "Crystal",
    age: 30,
    email: "pragalvhasharma@gmail.com",
    location: "berlin",
    blogs:[
        {title: "why mac and cheese rules", linkes: 30},
        {title: "10 things to make with marmite", likes: 50}
    ],
    login(){
        console.log("The user logged in")
    },
    //Works and is the same thing
    logout(){
        console.log("The user loggedout")
    },
    logBlogs: function(){
        //if I did console.log(blog) -- there would be an error as its not defined yet.
        console.log("This user has written the following things");
        this.blogs.forEach(blog =>{
            console.log(this.blogs); //Refers to the user object
        })
    }
};

user.login();
user.logout();
console.log(this); //refers to the windows object
console.log(user.logBlogs());






// printing name
console.log(user.name);

user.age = 35;
console.log(user);

//Another wah
console.log(user["email"])