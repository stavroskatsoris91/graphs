import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundNumber'
})
export class RoundNumberPipe implements PipeTransform {

  transform(value: unknown): unknown {
    const number  = Number(value);
    const roundNumberList = this.moneyFormat(number);

    return (Math.round((roundNumberList[0] + Number.EPSILON) * 10) / 10) + roundNumberList[1];
  }
  moneyFormat(labelValue:number):[number,string]
  {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e+9

       ? [Math.abs(Number(labelValue)) / 1.0e+9 , "B"]
       // Six Zeroes for Millions
       : Math.abs(Number(labelValue)) >= 1.0e+6

       ? [Math.abs(Number(labelValue)) / 1.0e+6 , "M"]
       // Three Zeroes for Thousands
       : Math.abs(Number(labelValue)) >= 1.0e+3

       ? [Math.abs(Number(labelValue)) / 1.0e+3 , "K"]

       : [Math.abs(Number(labelValue)), ''];

   }  
}
