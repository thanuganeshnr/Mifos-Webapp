import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Routing Imports */
import { Route } from '../core/route/route.service';

/** Translation Imports */
import { extract } from '../core/i18n/i18n.service';

import { CentersComponent } from './centers.component';
import { CentersViewComponent } from './centers-view/centers-view.component';
import { GeneralTabComponent } from './centers-view/general-tab/general-tab.component';
import { NotesTabComponent } from './centers-view/notes-tab/notes-tab.component';
import { EditCenterComponent } from './centers-view/edit-center/edit-center.component';
import { CenterSavingsApplicationComponent } from './centers-view/center-savings-application/center-savings-application.component';
import { AddGroupComponent } from './centers-view/add-group/add-group.component';
import { ManageGroupComponent } from './centers-view/manage-group/manage-group.component';
import { CloseCenterComponent } from './centers-view/close-center/close-center.component';
import { AttendanceComponent } from './centers-view/attendance/attendance.component';
import { CreateCenterComponent } from './centers-view/create-center/create-center.component';
import { AssignStaffComponent } from './centers-view/assign-staff/assign-staff.component';

const routes: Routes = [
  Route.withShell([

    {
      path: 'centers',
      data: { title: extract('Centers'),  breadcrumb: 'Centers', routeParamBreadcrumb: false },
      children: [
        {
          path: '',
          component: CentersComponent,
        },
        {
          path: 'centerId',
          component: CentersViewComponent,
           data: { title: extract('Centers View'),  breadcrumb: 'Center Id',routeParamBreadcrumb: 'centerId' },
            
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
            }]
          },
          
         {
            path: 'editcenter',
            component: EditCenterComponent,
            data: { title: extract('Edit Center'), breadcrumb: 'Edit Center', routeParamBreadcrumb: false }
          },
          {
            path: 'savingapplication',
            component: CenterSavingsApplicationComponent,
            data: { title: extract('Saving Application'), breadcrumb: 'Savings Application', routeParamBreadcrumb: false }
          }, {
            path: 'addgroup',
            component: AddGroupComponent,
            data: { title: extract('Add Group'), breadcrumb: 'Add Group', routeParamBreadcrumb: false }
          }, {
            path: 'managegroup',
            component: ManageGroupComponent,
            data: { title: extract('Manage Group'), breadcrumb: 'Manage Group', routeParamBreadcrumb: false }
          }, {
            path: 'closecenter',
            component: CloseCenterComponent,
            data: { title: extract('Close Center'), breadcrumb: 'Close Center', routeParamBreadcrumb: false }
          }, {
            path: 'attendance',
            component: AttendanceComponent,
            data: { title: extract('Attendance'), breadcrumb: 'Attendance', routeParamBreadcrumb: false }
          }, {
            path: 'createcenter',
            component: CreateCenterComponent,
            data: { title: extract('Create Center'), breadcrumb: 'Create Center', routeParamBreadcrumb: false }
          }, {
            path: 'assignstaff',
            component: AssignStaffComponent,
            data: { title: extract('Assign Staff'), breadcrumb: 'Assign Staff', routeParamBreadcrumb: false }
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
export class CentersRoutingModule { }
