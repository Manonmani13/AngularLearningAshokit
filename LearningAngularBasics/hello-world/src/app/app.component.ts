import { Component } from '@angular/core';
import { HelloWorldComponent } from "./hello-world/hello-world.component";
import { NgforExampleComponent } from "./ngfor-example/ngfor-example.component";
import { TableExampleComponent } from "./table-example/table-example.component";
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HelloWorldComponent,
    //  NgforExampleComponent, 
    //  TableExampleComponent,
     NgSwitchExampleComponent
    ],
})
export class AppComponent {
  title = 'hello-world';
  isDisabled :boolean=true;

  getTitle(){
    return this.title;
  }

  clickCount=0;
  clickCount1=0;

  clickMe(){
    this.clickCount++;
  }

 
}
