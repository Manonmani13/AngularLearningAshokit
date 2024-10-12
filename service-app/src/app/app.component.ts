import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeService } from './welcomeService';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'service-app';
  welcomeMsg="";
  constructor(@Inject(WelcomeService) private s:WelcomeService)
  {

  }
  getMsg(){
    this.welcomeMsg=this.s.getWelcomeMsg();
  }
}
