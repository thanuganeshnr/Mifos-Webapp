import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Routing Imports */
import { Route } from '../core/route/route.service';

/** Translation Imports */
import { extract } from '../core/i18n/i18n.service';

import { GroupsComponent } from './groups.component';
import { GroupsViewComponent } from './groups-view/groups-view.component';
import { GeneralTabComponent } from './groups-view/general-tab/general-tab.component';
import { CommitteeTabComponent } from './groups-view/committee-tab/committee-tab.component';
import { NotesTabComponent } from './groups-view/notes-tab/notes-tab.component';
import { EditGroupComponent } from './groups-view/edit-group/edit-group.component';
import { GrpSaveAppComponent } from './groups-view/grp-save-app/grp-save-app.component';
import { GrpLoanAppComponent } from './groups-view/grp-loan-app/grp-loan-app.component';
import { BulkLoanAppComponent } from './groups-view/bulk-loan-app/bulk-loan-app.component';
import { AttendanceViewComponent } from './groups-view/attendance-view/attendance-view.component';
import { UnassignViewComponent } from './groups-view/unassign-view/unassign-view.component';
import { CloseViewComponent} from './groups-view/close-view/close-view.component';
import { TransferClientsComponent } from './groups-view/transfer-clients/transfer-clients.component';
import { ManageMembersComponent } from './groups-view/manage-members/manage-members.component';
import { AddMembersComponent } from './groups-view/add-members/add-members.component';
import { JlgLoan1Component } from './groups-view/jlg-loan1/jlg-loan1.component';
import { ViewCloseAccComponent } from './groups-view/view-close-acc/view-close-acc.component';
import { AddButtonComponent } from './groups-view/notes-tab/add-button/add-button.component';
import { SubmitbuttonComponent } from './groups-view/committee-tab/submitbutton/submitbutton.component';
import { from } from 'rxjs';
const routes: Routes = [
  Route.withShell([

    {
      path: 'groups',
      data: { title: extract('Groups'), breadcrumb: 'Groups' },
      children: [
        {
          path: '',
          component: GroupsComponent,
        },
        {
          path: 'groupId',
          component: GroupsViewComponent,
           data: { title: extract('Groups View'),  breadcrumb: 'Group Id',routeParamBreadcrumb: 'groupId' },
            
           children : [
            {
              path: 'general',
              component: GeneralTabComponent,
              data: { title: extract('General'), breadcrumb: 'General', routeParamBreadcrumb: false }
            },
           
            {
              path: 'notes',
              component: NotesTabComponent,
              data: { title: extract('Notes'), breadcrumb: 'Notes', routeParamBreadcrumb: false }
            },
            {
              path: 'committee',
              component: CommitteeTabComponent,
              data: { title: extract('Commitee'), breadcrumb: 'Comittee', routeParamBreadcrumb: false }
            }]
          },
          {
            path: 'editgroup',
            component: EditGroupComponent,
          },
        {
          path: 'grpsaveapp',
          component: GrpSaveAppComponent,
        },
        {
          path: 'grploanapp',
          component: GrpLoanAppComponent
        },
        {
          path: 'bulkloanapp',
          component: BulkLoanAppComponent
        },
        {
          path: 'attendanceview',
          component: AttendanceViewComponent
        },
        {
          path: 'unassignview',
          component: UnassignViewComponent
        },
        {
          path: 'closeview',
          component: CloseViewComponent
        },
        {
          path: 'transferclients',
          component: TransferClientsComponent
        },
        {
          path: 'managemembers',
          component: ManageMembersComponent
        },
        {
          path: 'addmembers',
          component: AddMembersComponent
        },
        {
          path: 'jlgloan1',
          component: JlgLoan1Component
        },
        {
          path: 'viewcloseacc',
          component: ViewCloseAccComponent
        },
        {
          path: 'addbutton',
          component: AddButtonComponent
        },
        {
          path: 'submitbutton',
          component: SubmitbuttonComponent
        }
      ]
          
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class GroupsRoutingModule { }
