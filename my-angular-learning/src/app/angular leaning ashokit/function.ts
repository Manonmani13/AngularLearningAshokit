function doWork(x:number,y:number):number{
    return x+y;
}
let result=doWork(10,20);
console.log(result)
function add(x:number,y:number):number{
    return x+y;
}
let sum=add(10,20);
console.log(sum)
function greeting(msg:string,name:string):string{
    return name+" "+greeting;
}
let greetMsg=greeting("Good Afternoon","Manonmani");
console.log(greetMsg);
function wish(name:string,msg:string ="Hi"):string{
    return name+" "+msg;
}
console.log(wish("Ashok"))
function greet(msg:string,...names:string[])
{
    console.log(msg+"  "+names.join(","))
}