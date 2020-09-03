import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {OverlayModule} from '@angular/cdk/overlay';
import { MuiSelectComponent } from './select.component';
import { MuiOptionComponent } from './option.component';
import {MuiDirectivesModule} from 'mui-angular10-lib/directives';
@NgModule({
  declarations: [MuiSelectComponent, MuiOptionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    MuiDirectivesModule
  ],
  exports: [MuiSelectComponent, MuiOptionComponent]
})
export class MuiSelectModule { }
