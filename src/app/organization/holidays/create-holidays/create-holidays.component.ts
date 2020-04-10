import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'mifosx-create-holidays',
  templateUrl: './create-holidays.component.html',
  styleUrls: ['./create-holidays.component.scss']
})
export class CreateHolidaysComponent implements OnInit {
 /** Office data. */
 officeData: any;
 /** holiday form. */
 holidaysForm: FormGroup;
 
 
 
 /**
   * Retrieves the Holiday data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   * @param {FormBuilder} formBuilder Form Builder.
   */
 
 constructor(private route: ActivatedRoute,private formBuilder: FormBuilder) {
  this.route.data.subscribe(( data: { offices: any}) => {
    this.officeData = data.offices;
    console.log('reached constructor');
  });

  }
/**
   * Creates the holiday form.
   */
  ngOnInit() {
    this.createHolidayForm();
  }

/**
   * Creates the Holiday form.
   */
  createHolidayForm() {
    this.holidaysForm = this.formBuilder.group({
      'officeId': ['', Validators.required],
      'name': ['', [Validators.required, Validators.pattern('(^[A-z]).*')]],
      'description': ['', [Validators.required, Validators.pattern('(^[A-z]).*')]],
      'DateTo': ['', Validators.required], 
      'DateFrom': ['', Validators.required],
      'RepaymentScheduleTo': ['', Validators.required],
      'repaymentRescheduleType': ['', Validators.required]
    });
  }
}
