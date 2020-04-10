import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsApplicationDetailsStepComponent } from './savings-application-details-step.component';

describe('SavingsApplicationDetailsStepComponent', () => {
  let component: SavingsApplicationDetailsStepComponent;
  let fixture: ComponentFixture<SavingsApplicationDetailsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsApplicationDetailsStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsApplicationDetailsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
