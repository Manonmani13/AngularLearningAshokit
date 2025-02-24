import { Component, EventEmitter, Output } from '@angular/core';
import { EmailValidator, NgModel } from '@angular/forms';

@Component({
  selector: 'app-sharin-data-example',
  imports: [NgModel,Output],
  templateUrl: './sharin-data-example.component.html',
  styleUrl: './sharin-data-example.component.css'
})
export class SharinDataExampleComponent {
    @Output()
    carAdded:EventEmitter<string[]>=new EventEmitter();
    cars:string[]=[];
    carName="";
    addCar(){
      this.cars.push(this.carName);
      this.carAdded.emit(this.cars);
    }
}
