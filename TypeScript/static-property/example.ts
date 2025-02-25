class User{
    name:string;
    static totalUsers:number=0;
    constructor(name:string){
        this.name= name;
        User.totalUsers++;
    }

    getName(){
        return this.name;
    }
    static getTotalUsers(){
        return User.totalUsers;
    }

}
console.log(User.totalUsers);