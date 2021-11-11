import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
  @Input() set spends(value: string[][] | null) {
    if (value) {
      this.header = value[0].map((v,i)=>[v,i]).slice(3,6);
      this._list = value.slice(1);
      this.setGraph();
    }
  }


  _list: string[][] = [[]];
  selectedColumn = 4;
  _priceColumn = 7;
  valueMap: any = new Map<string, number>([]);
  header:any
  xValues: any[] = [];
  maxYValue = 0;

  yValues: any[] = [];
  yLength:number = 10;

  constructor() {}

  ngOnInit(): void {}

  setGraph() {
    const { _list, _priceColumn, yLength, selectedColumn } = this;
    this.valueMap = new Map<string, number>([]);
    _list.map((row) => {
      this.valuePrice(
        this.valueMap,
        row[selectedColumn],
        Number(row[_priceColumn])
      );
    });

    this.xValues = [...this.valueMap.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
    this.maxYValue = this.xValues[0][1];

    this.yValues = Array.from(new Array(yLength), (_: any, i: number) => {
      const part = this.maxYValue / yLength;
      return (i + 1) * part;
    }).slice().reverse();
  }
  valuePrice(map: any, value: string, price: number) {
    map.has(value)
      ? map.set(value, map.get(value) + price)
      : map.set(value, price);
  }
}
