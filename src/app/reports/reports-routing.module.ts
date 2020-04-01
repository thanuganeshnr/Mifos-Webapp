import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Routing Imports */
import { Route } from '../core/route/route.service';

/** Translation Imports */
import { extract } from '../core/i18n/i18n.service';

import { ReportsComponent } from './reports.component';
import {ClientsReportsComponent} from './clients-reports/clients-reports.component';
import {AllReportsComponent} from './all-reports/all-reports.component';
import {LoansReportsComponent} from './loans-reports/loans-reports.component';
import {SavingsReportsComponent} from './savings-reports/savings-reports.component';
import {FundsReportsComponent} from './funds-reports/funds-reports.component';
import {AccountingReportsComponent} from './accounting-reports/accounting-reports.component';

const routes: Routes = [
  Route.withShell([

    {
      path: 'reports',
      component: ReportsComponent,
      data: { title: extract('Reports'), breadcrumb: 'Reports' }
    },
    {
      path:'clients-reports',
      component:ClientsReportsComponent,
      data : { title: extract('Clients'), breadcrumb: 'Clients'}
    },
    {
      path:'all-reports',
      component:AllReportsComponent,
      data : { title: extract('All'), breadcrumb: 'All'}
    },
    {
      path:'loans-reports',
      component:LoansReportsComponent,
      data : { title: extract('Loans'), breadcrumb: 'Loans'}
    },
    {
      path:'savings-reports',
      component:SavingsReportsComponent,
      data : { title: extract('Savings'), breadcrumb: 'Savings'}
    },
    {
      path:'funds-reports',
      component:FundsReportsComponent,
      data : { title: extract('Funds'), breadcrumb: 'Funds'}
    },
    {
      path:'accounting-reports',
      component:AccountingReportsComponent,
      data : { title: extract('Accounting'), breadcrumb: 'Accounting'}
    },


  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ReportsRoutingModule { }
