import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
// import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-ng-class-example',
  imports: [NgClass,
    // NgModel
  ],
  templateUrl: './ng-class-example.component.html',
  styleUrl: './ng-class-example.component.css'
})
export class NgClassExampleComponent {
    enableRed=true;
}
