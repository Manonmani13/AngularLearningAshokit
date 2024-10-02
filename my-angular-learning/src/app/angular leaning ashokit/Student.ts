class Student{
    studentName: string;
    studentRank: number;
    studentMark: number;
    getStudentGrade():string{
        if(this.studentMark>=75)
        {
            return "A";
        }
        else if(this.studentMark>=65&& this.studentMark<60)
        {
            return "B";

        }
        else{
            return "C"
        }
    }

}
let s1=new Student();
s1.studentName="Mano";
s1.studentMark=70;
s1.studentRank=3;
console.log(s1.getStudentGrade())