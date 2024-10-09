import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {

  marks:number=20;
  status: boolean=false;
  constructor()
  {
    if(this.marks>=35)
    {
      this.status=true;
    }
    else{
      this.status=false;
    }
  }
}
