var user = {
    firstName: "Pragalvha",
    lastName: "Sharma",
    role: "admin",
    loginCount: "32",
    facebookSignedIn: true,
}

console.log(user.firstName)
console.log(user['lastName'])

//adds a new if its not already there
user.login = 45;
console.log(user.loginCount);
user.loginCount = 44;
user.fart = "true"
console.log(user);
console.table(user)

//output
// Pragalvha
// Sharma
// 32
// {
//   firstName: 'Pragalvha',
//   lastName: 'Sharma',
//   role: 'admin',
//   loginCount: 44,
//   facebookSignedIn: true,
//   login: 45
// }
// ┌──────────────────┬─────────────┐
// │ (index)          │ Values      │
// ├──────────────────┼─────────────┤
// │ firstName        │ 'Pragalvha' │
// │ lastName         │ 'Sharma'    │
// │ role             │ 'admin'     │
// │ loginCount       │ 44          │
// │ facebookSignedIn │ true        │
// │ login            │ 45          │
// └──────────────────┴─────────────┘
// pragalvhasharma@Pragalvhas-MacBook-Pro