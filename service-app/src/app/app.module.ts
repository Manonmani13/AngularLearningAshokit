import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Import the standalone component
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeService } from './welcomeService';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppComponent // Import here instead of declaring
  ],
  providers: [
    WelcomeService
  ],
  bootstrap: [] // Leave bootstrap empty; AppComponent handles it
})
export class AppModule { }
