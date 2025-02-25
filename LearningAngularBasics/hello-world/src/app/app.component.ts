import { Component } from '@angular/core';
import { HelloWorldComponent } from "./hello-world/hello-world.component";
import { NgforExampleComponent } from "./ngfor-example/ngfor-example.component";
import { TableExampleComponent } from "./table-example/table-example.component";
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';
import { NgIfExampleComponent } from "./ng-if-example/ng-if-example.component";
import { NgClassExampleComponent } from "./ng-class-example/ng-class-example.component";
import { NgStyleExampleComponent } from "./ng-style-example/ng-style-example.component";
import { DatePipeExampleComponent } from "./date-pipe-example/date-pipe-example.component";
import { SharinDataExampleComponent } from "./sharin-data-example/sharin-data-example.component";
import { HeadingComponent } from "./heading/heading.component";
import { TemplateDrivenFormComponent } from "./template-driven-form/template-driven-form.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HelloWorldComponent,
    //  NgforExampleComponent, 
    //  TableExampleComponent,
    // NgSwitchExampleComponent, 
    // NgIfExampleComponent, 
    // NgClassExampleComponent, NgStyleExampleComponent,
    // NgStyleExampleComponent, DatePipeExampleComponent
    // DatePipeExampleComponent, SharinDataExampleComponent
    // SharinDataExampleComponent, HeadingComponent, TemplateDrivenFormComponent
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
