import { NgModule,  CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';

import { GroupsComponent } from './groups.component';
import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsService } from './groups.service';
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
import { CloseViewComponent } from './groups-view/close-view/close-view.component';
import { TransferClientsComponent } from './groups-view/transfer-clients/transfer-clients.component';
import { ManageMembersComponent } from './groups-view/manage-members/manage-members.component';
import { AddMembersComponent } from './groups-view/add-members/add-members.component';
import { JlgLoan1Component } from './groups-view/jlg-loan1/jlg-loan1.component';
import { ViewCloseAccComponent } from './groups-view/view-close-acc/view-close-acc.component';
import { AddButtonComponent } from './groups-view/notes-tab/add-button/add-button.component';
import { SubmitbuttonComponent } from './groups-view/committee-tab/submitbutton/submitbutton.component';
@NgModule({
  imports: [
    CommonModule,
    GroupsRoutingModule,
    CoreModule,
    MatTableModule,
    FlexLayoutModule
  ],
  declarations: [GroupsComponent,
    GroupsViewComponent,
    GeneralTabComponent,
    CommitteeTabComponent,
    NotesTabComponent,
    EditGroupComponent,
    GrpSaveAppComponent,
    GrpLoanAppComponent,
    BulkLoanAppComponent,
    AttendanceViewComponent,
    UnassignViewComponent,
    CloseViewComponent,
    TransferClientsComponent,
    ManageMembersComponent,
    AddMembersComponent,
    JlgLoan1Component,
    ViewCloseAccComponent,
    AddButtonComponent,
    SubmitbuttonComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class GroupsModule { }
