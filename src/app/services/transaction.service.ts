import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Papa, ParseResult } from 'ngx-papaparse';
import { of } from 'rxjs';
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
  cache = new Map();
  constructor(private readonly http: HttpClient, private papa: Papa) {}
  getTransaction(month:TransactionMonth) {
    return this.cache.get(month)
    ||this.http
      .get(`assets/${month}`, { responseType: 'text' })
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
          // remove the first 3 row of the csv, not needed
          // the last because it empty
          this.cache.set(month,of(res.data.slice(4,res.data.length-1)))
          return res.data.slice(4,res.data.length-1)
        })
      )
  }
}
// Helper
export function ToArray(enumme:any) {
  return Object.keys(enumme)
      .map(key => [key,enumme[key]]);
}