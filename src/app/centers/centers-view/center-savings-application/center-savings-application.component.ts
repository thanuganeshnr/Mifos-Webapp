import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SavingsApplicationDetailsStepComponent } from './savings-application-details-step/savings-application-details-step.component';
import { SavingsApplicationTermsStepComponent } from './savings-application-terms-step/savings-application-terms-step.component';
import { SavingsApplicationChargesStepComponent } from './savings-application-charges-step/savings-application-charges-step.component';
import { SavingsApplicationPreviewStepComponent } from './savings-application-preview-step/savings-application-preview-step.component';


@Component({
  selector: 'mifosx-center-savings-application',
  templateUrl: './center-savings-application.component.html',
  styleUrls: ['./center-savings-application.component.scss']
})
export class CenterSavingsApplicationComponent implements OnInit {
  @ViewChild(SavingsApplicationDetailsStepComponent) SavingsApplicationDetailsStep: SavingsApplicationDetailsStepComponent;
  @ViewChild(SavingsApplicationTermsStepComponent) SavingsApplicationTermsStep: SavingsApplicationTermsStepComponent;
  @ViewChild(SavingsApplicationChargesStepComponent) SavingsApplicationChargesStep: SavingsApplicationChargesStepComponent;
  @ViewChild(SavingsApplicationPreviewStepComponent) SavingsApplicationPreviewStep: SavingsApplicationPreviewStepComponent;

  constructor() { }

  ngOnInit() {
  }

}
