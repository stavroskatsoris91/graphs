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

@NgModule({
  declarations: [
    AppComponent,
    SpendTableComponent,
    PagingComponent,
    GraphComponent,
    RoundNumberPipe,
    BarComponent
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
