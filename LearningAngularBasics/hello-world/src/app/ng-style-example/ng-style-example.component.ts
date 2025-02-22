import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style-example',
  imports: [NgStyle],
  templateUrl: './ng-style-example.component.html',
  styleUrl: './ng-style-example.component.css'
})
export class NgStyleExampleComponent {
  status='pass';
}
