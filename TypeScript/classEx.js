var Point = /** @class */ (function () {
    function Point() {
        var _this = this;
        this.drawShape = function () {
            console.log("X " + _this.x + " Y " + _this.y + " Z " + _this.z);
        };
        this.drawRectangle = function () {
            _this.drawShape();
        };
    }
    return Point;
}());
var shape = new Point();
shape.x = 10;
shape.y = 15;
shape.z = 20;
shape.drawShape();
