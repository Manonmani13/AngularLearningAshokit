import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule for two-way binding

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';  // Ensure correct import path

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent  // Declare HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Ensure FormsModule is imported to use ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
