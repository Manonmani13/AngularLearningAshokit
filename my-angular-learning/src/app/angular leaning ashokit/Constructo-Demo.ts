class User{
    userId: number;
    userName: string;
    
    constructor(userId: number, userName: string)
    {
        this.userId=userId;
        this.userName=userName;
    }
}
let user=new User(101,"Mano");
console.log("user id"+user.userId);
console.log("user name "+user.userName)
