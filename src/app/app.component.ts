import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ToArray, TransactionMonth, TransactionService } from './services/transaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'graph-project';
  selectedMonth = TransactionMonth.DEC;
  months = ToArray(TransactionMonth);
  public transactionsList: Observable<string[][]> = this.transactions.getTransaction(this.selectedMonth);

  constructor(private readonly transactions: TransactionService){
  }
  callMonth(){
    this.transactionsList = this.transactions.getTransaction(this.selectedMonth);
  }
}
