import { Component } from '@angular/core';

@Component({
  selector: 'app-clazz',
  standalone: true,
  imports: [],
  templateUrl: './clazz.component.html',
  styleUrl: './clazz.component.css'
})
export class ClazzComponent {
  marks: number=70;
  myclass: string="";
  constructor(){
    if(this.marks>=70)
    {
      this.myclass="class1";
    }
    else{
      this.myclass="class2";
    }
  }

}
