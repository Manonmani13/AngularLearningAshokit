// import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule for two-way binding

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';  // Ensure correct import path
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HelloWorldModule } from './hello-world/HelloWorldModule';
import { NgforExampleComponent } from './ngfor-example/ngfor-example.component';
import { TableExampleComponent } from './table-example/table-example.component';
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';
import { CommonModule } from '@angular/common';
import { NgIfExampleComponent } from './ng-if-example/ng-if-example.component';
import { NgClassExampleComponent } from './ng-class-example/ng-class-example.component';
import { NgStyleExampleComponent } from './ng-style-example/ng-style-example.component';
import { DatePipeExampleComponent } from './date-pipe-example/date-pipe-example.component';
import { SharinDataExampleComponent } from './sharin-data-example/sharin-data-example.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HttpClientModule } from '@angular/common/http';
// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    // HelloWorldComponent,
    // UserProfileComponent ,
    // NgforExampleComponent,
    // TableExampleComponent,
    // NgSwitchExampleComponent,
    // NgIfExampleComponent
    // NgClassExampleComponent
    // NgStyleExampleComponent
    // DatePipeExampleComponent
    // SharinDataExampleComponent
    // TemplateDrivenFormComponent
    // Make sure it's declared here
    // ReactiveFormComponent
    HttpClientModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // CommonModule
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Add this line for Web Components (optional)
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
