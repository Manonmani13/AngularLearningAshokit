import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-heading',
  imports: [NgModel],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent implements OnChanges ,OnInit,OnDestroy{
  @Input()
  text='';
  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes['text'])
  }
  ngOnInit(): void {
      console.log("Hello")
  }
  ngOnDestroy(): void {
      console.log("ngOnDestroy called!")
  }
}
