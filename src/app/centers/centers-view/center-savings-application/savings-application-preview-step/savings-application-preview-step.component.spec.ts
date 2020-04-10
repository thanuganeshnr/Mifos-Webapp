import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsApplicationPreviewStepComponent } from './savings-application-preview-step.component';

describe('SavingsApplicationPreviewStepComponent', () => {
  let component: SavingsApplicationPreviewStepComponent;
  let fixture: ComponentFixture<SavingsApplicationPreviewStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsApplicationPreviewStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsApplicationPreviewStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
