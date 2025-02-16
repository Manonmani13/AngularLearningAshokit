import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // imports: [HelloWorldComponent]
})
export class AppComponent {
  title = 'hello-world';
  isDisabled :boolean=false;

  getTitle(){
    return this.title;
  }
}
