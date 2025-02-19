import { NgSwitch } from "@angular/common";
import { Component } from "@angular/core";
import { NgModel } from "@angular/forms";


@Component({
  selector: 'app-ng-switch-example',
  imports: [NgModel,NgSwitch],
  templateUrl: './ng-switch-example.component.html',
  styleUrl: './ng-switch-example.component.css'
})
export class NgSwitchExampleComponent {
  num=0;
}
