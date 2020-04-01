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
    EditGroupComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class GroupsModule { }
