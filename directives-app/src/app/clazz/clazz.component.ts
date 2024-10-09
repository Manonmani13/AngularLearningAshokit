import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-clazz',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './clazz.component.html',
  styleUrls: ['./clazz.component.css']
})
export class ClazzComponent {
  marks: number = 70;
  myclass: string = "";
  constructor() {
    this.myclass = this.marks >= 70 ? "class1" : "class2";
  }
}
