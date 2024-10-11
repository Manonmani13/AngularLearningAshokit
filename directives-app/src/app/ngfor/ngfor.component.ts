import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../employee';

@Component({
  selector: 'app-ngfor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {
  cities = ['New York', 'Los Angeles', 'Chicago']; // Example data
  emps:Employee[]=[
    new Employee(101,'Mano',10000),
    new Employee(102,'Naveen',20000),
    new Employee(103,'Chandar',10000)
  ]
}
