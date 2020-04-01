import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'mifosx-edit-center',
  templateUrl: './edit-center.component.html',
  styleUrls: ['./edit-center.component.scss']
})
export class EditCenterComponent implements OnInit {

  /** Office form. */
  officeForm: FormGroup;
  /** Office Data */
  officeData: any;
  /** Minimum Date allowed. */
  minDate = new Date(2000, 0, 1);
  /** Maximum Date allowed. */
  maxDate = new Date();

  /**
   * Retrieves the offices data from `resolve`.
   * @param {FormBuilder} formBuilder Form Builder.
   *
   * @param {ActivatedRoute} route Activated Route.
   * @param {Router} router Router for navigation.
   * @param {DatePipe} datePipe Date Pipe to format date.
   */
  constructor(private formBuilder: FormBuilder,
             
              private router: Router,
              private route: ActivatedRoute,
              private datePipe: DatePipe) {
    this.route.data.subscribe((data: { offices: any }) => {
      this.officeData = data.offices;
    });
  }

  ngOnInit() {
    this.createofficeForm();
  }

  /**
   * Creates the Office Form
   */
  createofficeForm() {
    this.officeForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'parentId': ['', Validators.required],
      'openingDate': ['', Validators.required],
      'externalId': [''],
    });
  }

  /**
   * Submits the office form and creates office.
   * if successful redirects to offices
   */
  submit() {
    const prevOpeningDate: Date = this.officeForm.value.openingDate;
    // TODO: Update once language and date settings are setup
    const dateFormat = 'yyyy-MM-dd';
    this.officeForm.patchValue({
      openingDate: this.datePipe.transform(prevOpeningDate, dateFormat)
    });
    const office = this.officeForm.value;
    office.locale = 'en';
    office.dateFormat = dateFormat;
  
  }
}