import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent {

  @Input() maxHeight:number = 0;
  @Input() width:number = 0;
  @Input() values:[number|string,number] = [0,0];
  @Input() nextValues:[number|string,number] = [0,0];

  get pointPosition():number{
    return this.maxHeight*this.values[1]
  }
  get distanceY(){
    return this.maxHeight*(this.values[1]-this.nextValue)
  }
  get nextValue(){
    return this.nextValues?this.nextValues[1]:0
  }
  get lineWidth(){
    return Math.sqrt(Math.pow(this.width,2) + Math.pow(this.distanceY,2) )
  }
  get rotation(){
    return Math.asin(this.distanceY / this.lineWidth) *180/Math.PI
  }

}
