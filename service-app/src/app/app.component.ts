import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,  // Marking the component as standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Your App Title';
  welcomeMsg = 'Welcome to the Application!';
}
