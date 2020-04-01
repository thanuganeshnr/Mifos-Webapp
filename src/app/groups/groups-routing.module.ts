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
          }]
          
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class GroupsRoutingModule { }
