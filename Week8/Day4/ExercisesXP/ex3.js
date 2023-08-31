//ex3 Using this object
const users = { user1: 18273, user2: 92833, user3: 90315 }

//1 Using methods taught in class, turn the users object into an array:
// [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users_arr = Object.entries(users);
console.log(users_arr);

//2 Modify the outcome of part 1, by multipling the user’s ID by 2.
const users_arr2 = Object.entries(users).map(([username, id]) => [username, id * 2]);
console.log(users_arr2);