import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit {

  @Input() pages:number = 0
  @Input() selectedPage:number = 0
  @Output() selectPage = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  get pageArray():number[]{
    const min = Math.max(0,this.selectedPage-3)
    const max = Math.min(this.pages,this.selectedPage+3)
    return Array.from(new Array(this.pages),((_:any,i:number)=>i)).slice(min,max)
  }
  selectPageAction(page:number){
    this.selectPage.emit(page);
  }
}
