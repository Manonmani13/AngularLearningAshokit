import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent {
  name: string = 'Manonmani';  // Initialize 'name' with a default value
  value='';
  value1='';

  handleInput(event:any){
    // this.value=event.target.value;

    this.value=(event.target as HTMLInputElement).value;
    }
    // title='List of movies';
    // moviesList: string[] = ['Movie 1', 'Movie 2', 'Movie 3'];  // Example array of movies

}
