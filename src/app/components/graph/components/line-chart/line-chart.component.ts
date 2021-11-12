import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
/** Is not been used */
export class LineChartComponent {
  @Input() report:[number|number,number][]=[]

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
