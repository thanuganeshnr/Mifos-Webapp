import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansReportsComponent } from './loans-reports.component';

describe('LoansReportsComponent', () => {
  let component: LoansReportsComponent;
  let fixture: ComponentFixture<LoansReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoansReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
