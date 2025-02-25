interface User{
    firstName: string;
    lastName: string;
    age?: number;
    middleName?: string;
}
function greetUser(user:User){
    return `Hello ${user.firstName} ${user.lastName}`
}

function logUserDetails(user:User){
    return `Hello ${user.firstName} ${user.lastName}, Age:${user.age}`
}
let user1={firstName:"John",lastName:"Doe",age:30,middleName:"J"};

console.log(greetUser(user1))
console.log(logUserDetails(user1))