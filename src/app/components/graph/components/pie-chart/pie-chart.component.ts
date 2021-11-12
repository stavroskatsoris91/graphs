import { Component, Input } from '@angular/core';
import { GraphComponent } from '../../graph.component';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent extends GraphComponent {

  colourList = ['brown', 'black', 'blue', 'green', 'yellow', 'orange', 'red'];
  get styleBackground() {
    return `conic-gradient(${this.colors})`;
  }
  get colors() {
    const total = this.reportBest5.reduce((a, [name, price]) => a + price, 0);
    const perc = this.reportBest5.reduce((a: number[][], [name, price]) => {
      const value = a.length ? a[a.length - 1][1] : 0;
      a.push([value, value + (price * 100) / total]);
      price / total;
      return a;
    }, []);
    return perc
      .map((a, i) => {
        return [this.colourList[i], ...a.map((x) => x + '%')].join(' ');
      })
      .join(', ');
  }
}
