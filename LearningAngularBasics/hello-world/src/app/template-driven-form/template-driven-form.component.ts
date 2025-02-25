import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  imports: [],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
    countryList: Country[]=[
      new Country('1','India'),
      new Country('2','Madurai'),
    ]
}
class Country{
  id:string;
  name:string;
  constructor(id:string,name:string){
    this.id=id;
    this.name=name;
  }
}