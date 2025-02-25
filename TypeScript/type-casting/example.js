var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var jsonData = '{"name":"Mano","age":30}';
var user = JSON.parse(jsonData);
console.log("Name ".concat(user.name, ", Age: ").concat(user.age));
