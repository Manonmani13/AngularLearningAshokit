var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    User.prototype.setName = function (name) {
        return this.name = name;
    };
    User.prototype.setAge = function (age) {
        return this.age = age;
    };
    return User;
}());
var user = new User("Alice", 30);
console.log(user.getAge());
user.setName("mano");
console.log(user.getName());
