import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CentersComponent } from './centers.component';
import { CentersRoutingModule } from './centers-routing.module';
import { CentersService } from './centers.service';
import { CentersViewComponent } from './centers-view/centers-view.component';
import { GeneralTabComponent } from './centers-view/general-tab/general-tab.component';
import { NotesTabComponent } from './centers-view/notes-tab/notes-tab.component';
import { EditCenterComponent } from './centers-view/edit-center/edit-center.component';
import { CenterSavingsApplicationComponent } from './centers-view/center-savings-application/center-savings-application.component';
import { SavingsApplicationDetailsStepComponent } from './centers-view/center-savings-application/savings-application-details-step/savings-application-details-step.component';
import { SavingsApplicationTermsStepComponent } from './centers-view/center-savings-application/savings-application-terms-step/savings-application-terms-step.component';
import { SavingsApplicationChargesStepComponent } from './centers-view/center-savings-application/savings-application-charges-step/savings-application-charges-step.component';
import { SavingsApplicationPreviewStepComponent } from './centers-view/center-savings-application/savings-application-preview-step/savings-application-preview-step.component';
import { AddGroupComponent } from './centers-view/add-group/add-group.component';
import { ManageGroupComponent } from './centers-view/manage-group/manage-group.component';


@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    CentersRoutingModule,
    FormsModule,
    MatTableModule,
    FlexLayoutModule

  ],
  declarations: [CentersComponent, CentersViewComponent, GeneralTabComponent, NotesTabComponent, EditCenterComponent, CenterSavingsApplicationComponent, SavingsApplicationDetailsStepComponent, SavingsApplicationTermsStepComponent, SavingsApplicationChargesStepComponent, SavingsApplicationPreviewStepComponent, AddGroupComponent, ManageGroupComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CentersModule { }
