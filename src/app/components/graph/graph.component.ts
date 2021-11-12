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

  /** Update Graph */
  setGraph() {
    this.reportBest5 = this.getBestFive()
    this.reportDailyCosts = this.getDailyCosts();
    
  }
  changeColumn(){
    this.reportBest5 = this.getBestFive()
  }

  /** Get 5 groups with the highest cost*/
  getBestFive():[string,number][]{
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

  /** Groupt and extrackt the daily costs of the list  */
  getDailyCosts():[number,number][]{
    const { _list, _priceColumn, _dateColumn } = this;
    const valueMap = new Map<number, number>([]);
    _list.map((row) => {
      this.valuePrice(
        valueMap,
        this.dateFormat(row[_dateColumn]),
        Number(row[_priceColumn])
      );
    });
    // const max = Math.max(...valueMap.values())
    // const entry = [...valueMap.entries()].find((x)=>x[1]==max)
    // entry&&valueMap.delete(entry[0])
    return [...valueMap.entries()];
  }

  /** Change date format to  */
  dateFormat(dateInput:any){
    const dateType = isNaN(dateInput)?dateInput.split('/').reverse().join('-'):Number(dateInput)
    return new Date(dateType).getTime();
  }

  /** Set map of 2 values */
  valuePrice(map: any, value: string|number, price: number) {
    map.has(value)
      ? map.set(value, map.get(value) + price)
      : map.set(value, price);
  }
}
