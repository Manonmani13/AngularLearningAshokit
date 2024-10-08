import { Component } from '@angular/core';

@Component({
  selector: 'app-style',
  standalone: true,
  imports: [],
  templateUrl: './style.component.html',
  styleUrl: './style.component.css'
})
export class StyleComponent  {
  marks: number=70;
  mycolor: string="";
  constructor(){
    if(this.marks>=35){
      this.mycolor='green';
    }
    else {
      this.mycolor='red';
    }

  }

}
