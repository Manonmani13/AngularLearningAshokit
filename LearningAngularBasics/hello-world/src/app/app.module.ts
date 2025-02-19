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
// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserProfileComponent ,
    NgforExampleComponent,
    TableExampleComponent,
    NgSwitchExampleComponent// Ensure FormsModule is imported to use ngModel
    // Make sure it's declared here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HelloWorldModule ,
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Add this line for Web Components (optional)
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
