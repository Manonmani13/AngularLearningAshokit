import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StyleComponent } from "./style/style.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StyleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directives-app';
}
