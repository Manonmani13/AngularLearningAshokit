import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  imports: [NgFor],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent  implements OnInit{
    countryList: Country[]=[
      new Country('1','USA'),
      new Country('2','UK'),
      new Country('3','Canada'),
      new Country('4','Australia'),

    ];
    contact!:Contact;

    onSubmit(form:NgForm){
      console.log(form.value);
    }
    ngOnInit(): void {
        this.contact={
           firstName:"manonmani",
           lastName:"pandukumar",
           email:"manonmani.pandukumar@gmail.com",
           gender:"female",
           isMarried:false,
           country:"2",
           address:{city:"chennai",street:"no 24,plot no:15 vallal paari nagar 2nd main road",pincode:"400050"}

        }
    }
}
class Country{
  id:string;
  name:string;
  constructor(id:string,name:string){
    this.id=id;
    this.name=name;
  }
}
class Contact{
  firstName!:string;
  lastName!:string;
  email!: string;
  gender!: string;
  isMarried!:boolean;
  country!:string;
  address!:{
    city:string;
    street:string;
    pincode:string;
  }

}