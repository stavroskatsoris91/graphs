import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpendTableComponent } from './components/spend-table/spend-table.component';
import { PagingComponent } from './components/paging/paging.component';
import { GraphComponent } from './components/graph/graph.component';
import { RoundNumberPipe } from './round-number.pipe';
import { FormsModule } from '@angular/forms';
import { BarChartComponent } from './components/graph/components/bar-chart/bar-chart.component';
import { BarComponent } from './components/graph/components/bar/bar.component';
import { LineChartComponent } from './components/graph/components/line-chart/line-chart.component';
import { LineComponent } from './components/graph/components/line/line.component';
import { PieChartComponent } from './components/graph/components/pie-chart/pie-chart.component';

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
