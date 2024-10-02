"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Students_1 = require("./Students");
var School = /** @class */ (function () {
    function School() {
        this.students = [
            new Students_1.Student(101, "Mano"),
            new Students_1.Student(102, "Naveen"),
            new Students_1.Student(103, "Chandar")
        ];
    }
    School.prototype.display = function () {
        for (var i in this.students) {
            console.log(this.students[i]);
        }
    };
    return School;
}());
var school = new School();
school.display();
