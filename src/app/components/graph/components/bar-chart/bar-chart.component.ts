import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {

  @Input() report:[string|number,number][]=[]
  @Input() type:string = 'bar';

  yListLength = 10;
  get maxValue():number{
    return this.report.length&&Math.max(...this.report.map((a) => a[1]))
  }

  /** Revert values so higher value is on the top */
  get valuesY(){
    return Array.from(new Array(this.yListLength), (_: any, i: number) => {
      const part = this.maxValue / this.yListLength;
      return (i + 1) * part;
    }).slice().reverse();
  }

}
