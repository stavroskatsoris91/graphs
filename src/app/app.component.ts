import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionService } from './services/transaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'graph-project';
  public transactionsList: Observable<string[][]> = this.transactions.getTransaction();
  constructor(private readonly transactions: TransactionService){
  }
}
