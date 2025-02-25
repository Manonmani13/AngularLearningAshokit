class Users{
    private name:string;
    private age: number;
    constructor(name:string, age:number){
        this.name=name;
        this.age=age;
    }
    static isAdult(age :number){
        return age>=18;
    }
}

console.log(Users.isAdult(24));
