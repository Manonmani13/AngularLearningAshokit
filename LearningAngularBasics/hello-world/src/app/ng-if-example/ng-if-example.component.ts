import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-ng-if-example',
  // imports: [NgModel],
  templateUrl: './ng-if-example.component.html',
  styleUrl: './ng-if-example.component.css'
})
export class NgIfExampleComponent {
  showMe=true;

}
