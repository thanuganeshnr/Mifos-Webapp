import { Component, OnInit, ViewChild} from '@angular/core';
import { ReportsService } from '../reports.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'mifosx-all-reports',
  templateUrl: './all-reports.component.html',
  styleUrls: ['./all-reports.component.scss']
})
export class AllReportsComponent implements OnInit {

  displayedColumns:string[] = ['report_name','report_type','report_category'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort;
  
  

  constructor(private reportsService: ReportsService) { }

  ngOnInit() {
    this.reportsService.getAllReports()
    .subscribe(
      (res =>{
        console.log(res);
        this.dataSource =new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
