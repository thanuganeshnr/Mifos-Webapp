import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsApplicationChargesStepComponent } from './savings-application-charges-step.component';

describe('SavingsApplicationChargesStepComponent', () => {
  let component: SavingsApplicationChargesStepComponent;
  let fixture: ComponentFixture<SavingsApplicationChargesStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsApplicationChargesStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsApplicationChargesStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
