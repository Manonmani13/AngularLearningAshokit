class User{
    name: string;
    age: number;
}
const jsonData='{"name":"Mano","age":30}';
const user=JSON.parse(jsonData) as User;
console.log(`Name ${user.name}, Age: ${user.age}`);