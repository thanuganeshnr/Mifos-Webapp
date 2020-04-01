import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsReportsComponent } from './savings-reports.component';

describe('SavingsReportsComponent', () => {
  let component: SavingsReportsComponent;
  let fixture: ComponentFixture<SavingsReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
