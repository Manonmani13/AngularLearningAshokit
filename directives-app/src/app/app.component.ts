import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StyleComponent } from "./style/style.component";
import { ClazzComponent } from "./clazz/clazz.component";
import { IfelseComponent } from './ifelse/ifelse.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StyleComponent, ClazzComponent,IfelseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directives-app';
}
