class Point{
    x:number;
    y:number;
    z:number;
    drawShape=():any =>{
        console.log("X "+this.x+" Y "+this.y+" Z "+this.z);
    }
    drawRectangle=():void=>{
        this.drawShape();
    }
}
let shape=new Point();
shape.x=10;
shape.y=15;
shape.z=20;
shape.drawShape();