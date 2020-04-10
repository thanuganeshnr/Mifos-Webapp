import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'mifosx-savings-application-details-step',
  templateUrl: './savings-application-details-step.component.html',
  styleUrls: ['./savings-application-details-step.component.scss']
})
export class SavingsApplicationDetailsStepComponent implements OnInit {
  SavingsDetailsForm: FormGroup;

  fundData: any;

  minDate = new Date(2000, 0, 1);
  maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 10));

  constructor() { }

  ngOnInit() {
  }

}
