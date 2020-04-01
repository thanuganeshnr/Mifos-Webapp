import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsReportsComponent } from './funds-reports.component';

describe('FundsReportsComponent', () => {
  let component: FundsReportsComponent;
  let fixture: ComponentFixture<FundsReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundsReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
