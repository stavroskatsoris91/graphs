import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Papa, ParseResult } from 'ngx-papaparse';
import { switchMap, map } from 'rxjs/operators';

export enum TransactionMonth {
  DEC = 'Dec2016.csv',
  NOV = 'Nov2016.csv',
  OCT = 'Oct2016.csv',
  SEP = 'Sep2016.csv',
  AUG = 'Aug2016.csv',
  JUL = 'Jul2016.csv',
  JUN = 'Jun2016.csv',
}
@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private readonly http: HttpClient, private papa: Papa) {}
  getTransaction() {
    return this.http
      .get(`assets/${TransactionMonth.DEC}`, { responseType: 'text' })
      .pipe(
        switchMap((res) => {
          return new Promise<ParseResult>((resolve) => {
            this.papa.parse(res, {
              complete: (result:ParseResult) => {
                resolve(result);
              },
            });
          });
        })
        ,map((res:ParseResult):string[][]=>{
          return res.data.slice(4)
        })
      );
  }
}
