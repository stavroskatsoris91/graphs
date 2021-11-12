import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { BarChartComponent } from './components/graph/components/bar-chart/bar-chart.component';
import { BarComponent } from './components/graph/components/bar/bar.component';
import { LineChartComponent } from './components/graph/components/line-chart/line-chart.component';
import { LineComponent } from './components/graph/components/line/line.component';
import { PieChartComponent } from './components/graph/components/pie-chart/pie-chart.component';
import { GraphComponent } from './components/graph/graph.component';
import { PagingComponent } from './components/paging/paging.component';
import { SpendTableComponent } from './components/spend-table/spend-table.component';
import { RoundNumberPipe } from './round-number.pipe';
import { TransactionService } from './services/transaction.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
      providers:[{
        provide: TransactionService, useValue:{getTransaction:()=>of([[]])}
      }],
      imports:[FormsModule]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'graph-project'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('graph-project');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('graph-project app is running!');
  // });
});
