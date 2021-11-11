import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @Input() report:[string,number][]=[['',0]]

  yListLength = 10;
  constructor() { }

  ngOnInit(): void {
  }
  get maxValue():number{
    return this.report.length&&Math.max(...this.report.map((a) => a[1]))
  }
  get valuesY(){
    return Array.from(new Array(this.yListLength), (_: any, i: number) => {
      const part = this.maxValue / this.yListLength;
      return (i + 1) * part;
    }).slice().reverse();
  }

}
