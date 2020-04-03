import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrpLoanAppComponent } from './grp-loan-app.component';

describe('GrpLoanAppComponent', () => {
  let component: GrpLoanAppComponent;
  let fixture: ComponentFixture<GrpLoanAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrpLoanAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrpLoanAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
