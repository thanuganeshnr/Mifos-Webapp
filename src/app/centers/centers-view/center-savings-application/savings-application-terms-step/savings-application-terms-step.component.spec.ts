import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsApplicationTermsStepComponent } from './savings-application-terms-step.component';

describe('SavingsApplicationTermsStepComponent', () => {
  let component: SavingsApplicationTermsStepComponent;
  let fixture: ComponentFixture<SavingsApplicationTermsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsApplicationTermsStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsApplicationTermsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
