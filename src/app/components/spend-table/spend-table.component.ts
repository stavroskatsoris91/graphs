import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spend-table',
  templateUrl: './spend-table.component.html',
  styleUrls: ['./spend-table.component.scss']
})
export class SpendTableComponent implements OnInit {

  @Input() spends:string[][] | undefined | null

  rows:number = 10;
  selectedPage:number = 0
  constructor() { }

  ngOnInit(): void {
  }

  get spendsHeader():string[]{
    return this.spends?this.spends[0]:[]
  }
  get spendsBody():string[][]{
    return this.spends?this.spends.slice(1):[]
  }
  get pages():number{
    return Math.ceil(this.spendsBody.length/this.rows)
  }
  get spendsBodyPaginated():string[][]{
    const position = this.selectedPage*this.rows;
    return this.spendsBody.slice(position,position+this.rows)
  }
  newPage(page: number){
    this.selectedPage = page;
  }
}
