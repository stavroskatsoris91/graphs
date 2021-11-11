import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  @Input() maxHeight:number = 0;
  @Input() value:number = 0;
  @Input() maxValue:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  get barHeight():number{
    return this.maxHeight*this.value/this.maxValue
  }
}
