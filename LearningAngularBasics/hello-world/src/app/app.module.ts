import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule for two-way binding

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';  // Ensure correct import path
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Ensure FormsModule is imported to use ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
