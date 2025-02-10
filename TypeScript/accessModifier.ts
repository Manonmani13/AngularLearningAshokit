class Point{
    // private x:number;
    // y:number;
    // z:number;

    constructor(private x?:number,public y?:number,public z?:number){

    }
    private drawShape=():any =>{
        console.log("X "+this.x+" Y "+this.y+" Z "+this.z);
    }
    drawRectangle=():void=>{
        console.log("Drawing Rectangle")
        this.drawShape();
    }
}
let shape=new Point(10,2,3);
// shape.x=10;
// shape.y=15;
// shape.z=20;
shape.drawShape();