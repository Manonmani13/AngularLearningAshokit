import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-ngfor',
  standalone: true,
  imports: [CommonModule], // Include CommonModule
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {
  cities = ['New York', 'Los Angeles', 'Chicago']; // Example data
}
