import { Component, OnInit, ViewChild,AfterViewInit, ChangeDetectorRef  } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatSelect } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, merge } from 'rxjs';
import { OrganizationService } from '../organization.service';
import { tap, subscribeOn } from 'rxjs/operators';
import { HolidaysDataResolver } from './holidaysData.resolver';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { setTNodeAndViewData } from '@angular/core/src/render3/state';

@Component({
  selector: 'mifosx-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss']
})
export class HolidaysComponent implements OnInit  {
   /** Holiday data. */
   holidaysData: any;
   /** Columns to be displayed in holiday table. */
   displayedColumns: string[] = ['holidayname', 'startdate', 'endDateSelect', 'repaymentsheduleto','status'];
   /** Data source for Holiday table. */
   dataSource: MatTableDataSource<any>;
   /** Office data. */
  officeData: any;

   /** Paginator for Holiday table. */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /** Sorter for Holiday table. */
  @ViewChild(MatSort) sort: MatSort;
  
  @ViewChild('showClosedAccounts') showClosedAccounts: MatSelect;
  /**
   * Retrieves the Holiday data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
   
 /**
   * @param {HttpClient} http Http Client to send requests.
   */
  
  

  constructor(private route: ActivatedRoute,private httpclient:HttpClient,private organizationservice:OrganizationService,private HolidaysDataResolver:HolidaysDataResolver) { 
    this.route.data.subscribe(( data: { holidays: any ,offices: any}) => {
      this.holidaysData = data.holidays;
      this.officeData = data.offices;
      console.log('reached constructor');
    });
  }

/**
   * Filters data in holidays table based on passed value.
   * @param {string} filterValue Value to filter data.
   */
  applyFilter(filterValue: string) {
    console.log('reached filter');
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Sets the holidays table.
   */
  empSelected:number;
  ngOnInit() {
    this.setHolidays();
    console.log('reached onit');
        
  }
  ngOnChanges(){
        console.log('reached onchanges');
  }
  

  
  /**
   * @param {any} officeId
   * @returns {Observable<any>}
   */
  
 onOfficeChange(officeId:string) {
   
  console.log(officeId);
  console.log('reached on office changed');
  return this.organizationservice.getHolidaysData(officeId);
  //return this.httpclient.get(`/holidays?officeId=${officeId}`,{ responseType: 'text' }).subscribe();

    
  //console.log('reached function2');
  
  
}

      
  /**
   * Initializes the data source, paginator and sorter for holidays table.
   */
  setHolidays() {
    console.log('reached set holidays function');
    this.dataSource = new MatTableDataSource(this.holidaysData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

 
}