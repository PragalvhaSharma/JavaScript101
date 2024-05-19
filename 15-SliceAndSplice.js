var users = ["Ted", "Tim", "Ton", "sam", "sor", "Sod"]

console.log(users.slice(1,4)) //4 is exclusive
console.log(users.slice(1)) //Takes off the first value (not index) -- Ted is removed

users.splice(1, 2, "Hi")  //[ 'Ted', 'Hi', 'sam', 'sor', 'Sod' ]
console.log(users);