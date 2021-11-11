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
  _dateColumn = 2;
  valueMap: any = new Map<string, number>([]);
  header:any
  reportBest5:[string,number][] = [];
  reportDailyCosts:[number,number][] = [];

  ngOnInit(): void {}

  setGraph() {
    this.reportBest5 = this.getBestFive()
    this.reportDailyCosts = this.getDailyCosts();
    
  }
  getBestFive(){
    const { _list, _priceColumn, selectedColumn } = this;
    const valueMap = new Map<string, number>([]);
    _list.map((row) => {
      this.valuePrice(
        valueMap,
        row[selectedColumn],
        Number(row[_priceColumn])
      );
    });

    return [...valueMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
  }
  getDailyCosts(){
    const { _list, _priceColumn, _dateColumn } = this;
    const valueMap = new Map<number, number>([]);
    _list.map((row) => {
      this.valuePrice(
        valueMap,
        this.dateFormat(row[_dateColumn]),
        Number(row[_priceColumn])
      );
    });
    return [...valueMap.entries()];
  }
  dateFormat(dateInput:string){
    return new Date(dateInput.split('/').reverse().join('-')).getTime();
  }
  valuePrice(map: any, value: string|number, price: number) {
    map.has(value)
      ? map.set(value, map.get(value) + price)
      : map.set(value, price);
  }
}
