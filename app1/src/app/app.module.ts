import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Important for ngModel

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { GreetComponent } from './greet/greet.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    GreetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // This must be present
  ],
  providers: [],
  bootstrap: [AppComponent] // Bootstrap only the main component
})
export class AppModule { }
