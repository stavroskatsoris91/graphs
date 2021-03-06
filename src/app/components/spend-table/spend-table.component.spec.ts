import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagingComponent } from '../paging/paging.component';

import { SpendTableComponent } from './spend-table.component';

describe('SpendTableComponent', () => {
  let component: SpendTableComponent;
  let fixture: ComponentFixture<SpendTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendTableComponent, PagingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
