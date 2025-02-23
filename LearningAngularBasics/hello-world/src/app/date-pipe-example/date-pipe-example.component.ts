import { CurrencyPipe, DatePipe, LowerCasePipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-date-pipe-example',
  imports: [DatePipe,UpperCasePipe,LowerCasePipe,SlicePipe,CurrencyPipe],
  templateUrl: './date-pipe-example.component.html',
  styleUrl: './date-pipe-example.component.css'
})
export class DatePipeExampleComponent {
    toDate=new Date();
    message='Welcome to Angular';
    price=125;

}
