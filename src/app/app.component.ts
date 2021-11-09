import { Component } from '@angular/core';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'graph-project';
  constructor(private readonly transactions: TransactionService){
    this.transactions.getTransaction().subscribe((res)=>console.log(res))
  }
}
