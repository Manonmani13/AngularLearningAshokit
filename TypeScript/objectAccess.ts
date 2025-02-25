class Point{


    constructor(private x?:number,public y?:number,public z?:number){

    }
    // private drawShape=():any =>{
    //     console.log("X "+this.x+" Y "+this.y+" Z "+this.z);
    // }
    // drawRectangle=():void=>{
    //     console.log("Drawing Rectangle")
    //     this.drawShape();
    // }

    get x(){
        return this.x;
    }

    set x(vallue){
        this.x=vallue;
    }
}
let shape=new Point(10,2,3);
shape.x=5;
console.log('X :'+shape.X)
