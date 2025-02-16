import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',  // This should match your HTML tag
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent {
  name: string = 'John Doe';  // Initialize name with a default value
  subscribed: boolean = true; // Initialize subscription status to 'true'
  isDisabled :boolean=false;
}
