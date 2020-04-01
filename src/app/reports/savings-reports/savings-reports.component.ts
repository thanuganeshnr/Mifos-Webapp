import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'mifosx-savings-reports',
  templateUrl: './savings-reports.component.html',
  styleUrls: ['./savings-reports.component.scss']
})
export class SavingsReportsComponent implements OnInit {

  displayedColumns:string[] = ['report_name','report_type','report_category'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  constructor(private reportService:ReportsService) { }

  ngOnInit() {
    this.reportService.getSavingsReports()
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