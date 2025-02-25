function greetUser(user) {
    return "Hello ".concat(user.firstName, " ").concat(user.lastName);
}
function logUserDetails(user) {
    return "Hello ".concat(user.firstName, " ").concat(user.lastName, ", Age:").concat(user.age);
}
var user1 = { firstName: "John", lastName: "Doe", age: 30, middleName: "J" };
console.log(greetUser(user1));
console.log(logUserDetails(user1));
