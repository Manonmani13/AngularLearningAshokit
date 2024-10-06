import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fname: string = ''; // Ensure these are declared
  age: number | null = null;

  handleSubmitBtn() {
    console.log('Submitted!', this.fname, this.age);
  }
}
