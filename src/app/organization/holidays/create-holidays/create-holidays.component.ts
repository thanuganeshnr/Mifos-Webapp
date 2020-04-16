import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { OrganizationService } from '../../organization.service';
import { HolidaysComponent } from '../holidays.component';

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
 /** Reschedule Type data. */
 rescheduleTypeData: any;
 
 
 
 /**
   * Retrieves the Holiday data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   * @param {FormBuilder} formBuilder Form Builder.
   */
 
 constructor(private route: ActivatedRoute,private formBuilder: FormBuilder,private datePipe: DatePipe,private organizationService: OrganizationService,private router: Router) {
  this.route.data.subscribe(( data: { offices: any,template:any}) => {
    this.officeData = data.offices;
    this.rescheduleTypeData=data.template;
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
      'name': ['', [Validators.required, Validators.pattern('(^[A-z]).*')]],
      'fromDate': ['', Validators.required],
      'toDate': ['', Validators.required], 
      'reschedulingType': ['', Validators.required],
      'repaymentsRescheduledTo': ['', Validators.required],
      'description': ['', [Validators.required, Validators.pattern('(^[A-z]).*')]],
      'offices': ['', Validators.required],
      
        
      
      
      
    });
  }
  submit(){
    
    const dateFormat = 'yyyy-MM-dd';
    const holiday = this.holidaysForm.value;
    holiday.locale = 'en';
    holiday.dateFormat = dateFormat;
    holiday.toDate= this.datePipe.transform(new Date(),"yyyy-MM-dd");
    holiday.repaymentsRescheduledTo=this.datePipe.transform(new Date(),"yyyy-MM-dd");
    holiday.fromDate=this.datePipe.transform(new Date(),"yyyy-MM-dd");
    
    this.organizationService.createHolidays(holiday).subscribe((response: any) => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}
