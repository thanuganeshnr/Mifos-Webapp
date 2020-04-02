import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'mifosx-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss']
})
export class HolidaysComponent implements OnInit {
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
 

  /**
   * Retrieves the Holiday data from `resolve`.
   * @param {ActivatedRoute} route Activated Route.
   */
   
 /**
   * @param {HttpClient} http Http Client to send requests.
   */

  constructor(private route: ActivatedRoute,private httpclient:HttpClient) { 
    this.route.data.subscribe(( data: { holidays: any ,offices: any}) => {
      this.holidaysData = data.holidays;
      this.officeData = data.offices;
    });
  }

/**
   * Filters data in holidays table based on passed value.
   * @param {string} filterValue Value to filter data.
   */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Sets the holidays table.
   */
  empSelected:number;
  ngOnInit() {
    this.setHolidays();
  }
  
  /**
   * @param {any} val 
   * @returns {Observable<any>}
   */
 onWriterChange(val:any){
    console.log('Writer changed...');
    console.log(val);


    return this.httpclient.get(`/holidays?officeId=${val}`);
    
    
      }

      
  /**
   * Initializes the data source, paginator and sorter for holidays table.
   */
  setHolidays() {
    this.dataSource = new MatTableDataSource(this.holidaysData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

 
}