var Point = /** @class */ (function () {
    // private x:number;
    // y:number;
    // z:number;
    function Point(x, y, z) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.z = z;
        this.drawShape = function () {
            console.log("X " + _this.x + " Y " + _this.y + " Z " + _this.z);
        };
        this.drawRectangle = function () {
            console.log("Drawing Rectangle");
            _this.drawShape();
        };
    }
    return Point;
}());
var shape = new Point(10, 2, 3);
// shape.x=10;
// shape.y=15;
// shape.z=20;
shape.drawShape();
