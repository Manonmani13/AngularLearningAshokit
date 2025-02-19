import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-table-example',
  imports: [NgFor,NgClass],
  templateUrl: './table-example.component.html',
  styleUrl: './table-example.component.css'
})
export class TableExampleComponent {
  title ="List of Movies";
  movies=[
    {title:'Zootopia',director:'Byron'},
    {title:'Zootopia',director:'Byron'},
    {title:'Zootopia',director:'Byron'},
    {title:'Zootopia',director:'Byron'}

  ] 


}
