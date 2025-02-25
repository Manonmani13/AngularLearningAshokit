class Calculator{
    add(a:number, b:number){
        console.log(`Calling add method with arguments ${a} and ${b}`)
        const result=a+b;
        console.log(`Result ${result}`);
        return result;
    }

    subtract(a:number, b:number){
        console.log(`Calling add method with arguments ${a} and ${b}`)
        const result=a-b;
        console.log(`Result ${result}`);
        return result;
    }
}
const calculator=new Calculator();
calculator.add(5,3);
calculator.add(7,2);