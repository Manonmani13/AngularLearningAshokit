import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule], // Import FormsModule here
})
export class AppComponent {
  username: string = ''; // Initialize username
  password: string = ''; // Initialize password
  confirmPassword: string='';
  gender: string='';
  country:string='';
  msg: string = ''; // Initialize message

  checkLogin() {
    console.log('Logging in with', this.username, this.password);
    this.msg = 'Login attempted!'; // Example message
  }
  handleRegBtnClick(){
    this.msg="Registration Successfully";
  }
}
