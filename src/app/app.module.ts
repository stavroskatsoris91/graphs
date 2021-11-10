import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpendTableComponent } from './components/spend-table/spend-table.component';
import { PagingComponent } from './components/paging/paging.component';

@NgModule({
  declarations: [
    AppComponent,
    SpendTableComponent,
    PagingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
