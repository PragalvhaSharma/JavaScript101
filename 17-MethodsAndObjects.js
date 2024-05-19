var user = {
    firstName: "Pragalvha",
    lastName: "Sharma",
    role: "admin",
    loginCount: "32",
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function(courseName) {
        //refrences a user from the the obkect
        this.courseList.push(courseName);
    },
    getCourseCount: function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
}

console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS course");
user.buyCourse("Angular Course");
console.log(user.getCourseCount());