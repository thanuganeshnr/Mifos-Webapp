import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingReportsComponent } from './accounting-reports.component';

describe('AccountingReportsComponent', () => {
  let component: AccountingReportsComponent;
  let fixture: ComponentFixture<AccountingReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
