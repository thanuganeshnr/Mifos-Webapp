import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'mifosx-funds-reports',
  templateUrl: './funds-reports.component.html',
  styleUrls: ['./funds-reports.component.scss']
})
export class FundsReportsComponent implements OnInit {

  displayedColumns:string[] = ['report_name','report_type','report_category'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  constructor(private reportService:ReportsService) { }

  ngOnInit() {
    this.reportService.getFundsReports()
    .subscribe(
      (res =>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    );
  }
  applyFilter(filterValue:string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
