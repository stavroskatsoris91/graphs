import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent{

  @Input() maxHeight:number = 0;
  @Input() value:number = 0;

  get barHeight():number{
    return this.maxHeight*this.value
  }
}
