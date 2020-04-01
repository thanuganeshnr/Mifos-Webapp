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
