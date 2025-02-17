import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor-example',
  imports: [NgFor],
  templateUrl: './ngfor-example.component.html',
  styleUrl: './ngfor-example.component.css'
})
export class NgforExampleComponent {
  a=['gfg1', 'gfg2', 'gfg3', 'gfg4'] 

}
