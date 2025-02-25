class Stack<T>{
    private items:T[]=[];
    push(item:T){
        this.items.push(item);
    }
    pop(){
        return this.items.pop();
    }
}
const nuberStack=new Stack<number>();
nuberStack.push(1);
nuberStack.push(2);
console.log(nuberStack.pop())