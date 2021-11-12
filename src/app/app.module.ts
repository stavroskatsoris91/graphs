import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpendTableComponent } from './components/spend-table/spend-table.component';
import { PagingComponent } from './components/paging/paging.component';
import { GraphComponent } from './components/graph/graph.component';
import { RoundNumberPipe } from './round-number.pipe';
import { BarComponent } from './components/bar/bar.component';
import { FormsModule } from '@angular/forms';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { LineComponent } from './components/line/line.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SpendTableComponent,
    PagingComponent,
    GraphComponent,
    RoundNumberPipe,
    BarComponent,
    BarChartComponent,
    LineChartComponent,
    LineComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
