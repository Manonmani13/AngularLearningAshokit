var Point = /** @class */ (function () {
    function Point(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Object.defineProperty(Point.prototype, "x", {
        // private drawShape=():any =>{
        //     console.log("X "+this.x+" Y "+this.y+" Z "+this.z);
        // }
        // drawRectangle=():void=>{
        //     console.log("Drawing Rectangle")
        //     this.drawShape();
        // }
        get: function () {
            return this.x;
        },
        set: function (vallue) {
            this.x = vallue;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var shape = new Point(10, 2, 3);
shape.x = 5;
console.log('X :' + shape.X);
