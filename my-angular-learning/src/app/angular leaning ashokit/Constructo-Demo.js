var User = /** @class */ (function () {
    function User(userId, userName) {
        this.userId = userId;
        this.userName = userName;
    }
    return User;
}());
var user = new User(101, "Mano");
console.log("user id" + user.userId);
console.log("user name " + user.userName);
