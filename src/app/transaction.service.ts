import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export enum TransactionMonth{
  DEC = 'Dec2016.csv',
  NOV = 'Nov2016.csv',
  OCT = 'Oct2016.csv',
  SEP = 'Sep2016.csv',
  AUG = 'Aug2016.csv',
  JUL = 'Jul2016.csv',
  JUN = 'Jun2016.csv',

}
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private readonly http: HttpClient) { }
  getTransaction(){
    return this.http.get(`assets/${TransactionMonth.DEC}`,{responseType:'text'})
  }
}
