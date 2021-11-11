import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
  @Input() set spends(value: string[][] | null){

    if(value){
      let list = value.slice(1)

      for(let i=0;i<list.length;i++){
        this.valuePrice(this.three,list[i][3],Number(list[i][7]))
        this.valuePrice(this.four,list[i][4],Number(list[i][7]))
        this.valuePrice(this.five,list[i][5],Number(list[i][7]))
      }
      console.log(this.three,this.four,this.five)
      this.xValues = [...this.four.entries()].sort((a, b) => b[1] - a[1]).slice(0,5)
      this.maxValue = this.xValues[0][1]
      this.yValues = Array.from(new Array(10),(_:any,i:number)=>{
        const part = this.maxValue / 10;
        return (i+1)*part;
      }).slice().reverse()
    }
  }


  three:any = new Map<string,number>([])
  four:any = new Map<string,number>([])
  five:any = new Map<string,number>([])
  maxValue =100;
  xValues:any[] = [];
  yValues:any[] = [];

  constructor() {}

  ngOnInit(): void {}

  valuePrice(map:any,value:string,price:number){

    map.has(value)? map.set(value,map.get(value)+price): map.set(value,price)
  }
}
