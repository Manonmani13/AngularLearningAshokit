function doWork(x, y) {
    return x + y;
}
var result = doWork(10, 20);
console.log(result);
function add(x, y) {
    return x + y;
}
var sum = add(10, 20);
console.log(sum);
function greeting(msg, name) {
    return name + " " + greeting;
}
var greetMsg = greeting("Good Afternoon", "Manonmani");
console.log(greetMsg);
function wish(name, msg) {
    if (msg === void 0) { msg = "Hi"; }
    return name + " " + msg;
}
console.log(wish("Ashok"));
function greet(msg) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(msg + "  " + names.join(","));
}
greet("Good Afternoon ", "Mano", "naveen", "chandar");
