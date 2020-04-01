import { NgModule,  CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ReportsComponent } from './reports.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsService } from './reports.service';
import {ClientsReportsComponent} from './clients-reports/clients-reports.component';
import {AllReportsComponent} from './all-reports/all-reports.component';
import {LoansReportsComponent} from './loans-reports/loans-reports.component';
import {SavingsReportsComponent} from './savings-reports/savings-reports.component';
import {FundsReportsComponent} from './funds-reports/funds-reports.component';
import {AccountingReportsComponent} from './accounting-reports/accounting-reports.component';
import { from } from 'rxjs';
@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule,
    CoreModule,
    MatTableModule,
    FlexLayoutModule
  ],
  declarations: [ReportsComponent,
    ClientsReportsComponent,
    AllReportsComponent,
    LoansReportsComponent,
    SavingsReportsComponent,
    FundsReportsComponent,
    AccountingReportsComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ReportsModule { }
