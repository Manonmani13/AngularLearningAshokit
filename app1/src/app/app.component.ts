import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fname: string = ''; // Make sure these properties are defined
  age: number | null = null;

  handleSubmitBtn() {
    console.log('Submitted!', this.fname, this.age);
  }
}
