import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-sharin-data-example',
  imports: [NgModel],
  templateUrl: './sharin-data-example.component.html',
  styleUrl: './sharin-data-example.component.css'
})
export class SharinDataExampleComponent {
    cars:string[]=[];
    carName="";
    addCar(){
      this.cars.push(this.carName);

    }
}
