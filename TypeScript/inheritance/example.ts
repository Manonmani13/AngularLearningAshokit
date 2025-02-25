class Person{
    firstName: string;
    lastName: string;
    age: number

    constructor(firstName: string, lastName:  string,age: number){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    greet(){
        return `Hello ,${this.firstName} ${this.lastName }`;
    }

    greetAge(){
        return  this.age;
    }
}
class UsersData extends Person{
    constructor(firstName: string,lastName: string,age: number){
        super(firstName,lastName,age);
        
    }
}