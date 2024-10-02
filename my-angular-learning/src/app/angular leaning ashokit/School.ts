import  {Student} from "./Students";
class School{
    students :Student[]=[
        new Student(101,"Mano"),
        new Student(102,"Naveen"),
        new Student(103,"Chandar")
    ];
    display():void{
        for(var i in this.students)
        {
            console.log(this.students[i])
        }
    }
}
let school=new School();
school.display();