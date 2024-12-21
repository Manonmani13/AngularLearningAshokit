import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true, // Marking it as standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule], // Import FormsModule directly here
})
export class AppComponent {
  username: string = ''; // Initialize username
  password: string = ''; // Initialize password
  msg: string = ''; // Initialize message

  checkLogin() {
    // Logic for checking login
    console.log('Logging in with', this.username, this.password);
    this.msg = 'Login attempted!'; // Example message
  }
}
