import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharinDataExampleComponent } from "../sharin-data-example/sharin-data-example.component";

@Component({
  selector: 'app-list',
  imports: [NgIf, NgFor, SharinDataExampleComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input("carsName")
   cars:string[]=[];
   carDataUpdated(carsData: string[]){
    this.cars=carsData;
   }

}
