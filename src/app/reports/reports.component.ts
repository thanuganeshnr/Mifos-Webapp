import { Component, OnInit } from '@angular/core';
import { ReportsService } from './reports.service';
@Component({
  selector: 'mifosx-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  constructor(private reportsService: ReportsService) { }

  ngOnInit() {
    this.reportsService.getAllReports()
    this.reportsService.getClientsReports()
    this.reportsService.getLoansReports()
    .subscribe();
    
  }
}
