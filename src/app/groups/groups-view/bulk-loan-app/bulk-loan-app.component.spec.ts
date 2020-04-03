import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkLoanAppComponent } from './bulk-loan-app.component';

describe('BulkLoanAppComponent', () => {
  let component: BulkLoanAppComponent;
  let fixture: ComponentFixture<BulkLoanAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkLoanAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkLoanAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
