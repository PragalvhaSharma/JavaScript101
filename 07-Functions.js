/*
Define a function that can answer the role of a user.
A user can be on following roles: 
admin - with all acces
subadmin - with acccess to create/delete courses 
testprep - with access to create/delete tests 
user - consume all content 
other - trial user.
Input: getUserRole(name, role)
*/


//Note you can put the function in a variable (var name = function)
function getUserRole(name, role){
    switch (role) {
        case "admin":
            return `${name} is admin with all acess`;

        case "subadmin":
            return `${name} with acccess to create/delete courses`;
        
        case "testprep":
            return `${name} with access to create/delete tests`;
        
        case "user":
            return `${name} consume all content`;
    
        default:
            return `${name} a trial user`;
    }
}

console.log(getUserRole("prag", "user"))