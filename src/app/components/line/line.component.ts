import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent {

  @Input() maxHeight:number = 0;
  @Input() width:number = 0;
  @Input() value:number = 0;
  @Input() nextValue:number = 0;

  get pointPosition():number{
    return this.maxHeight*this.value
  }
  get distanceY(){
    return this.maxHeight*(this.value-this.nextValue)
  }
  get lineWidth(){
    return Math.sqrt(Math.pow(this.width,2) + Math.pow(this.distanceY,2) )
  }
  get rotation(){
    return Math.asin(this.distanceY / this.lineWidth) *180/Math.PI
  }

}
