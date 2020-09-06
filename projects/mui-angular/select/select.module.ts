import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { MuiSelect } from './select';
import { MuiOption } from './option.';
import { MuiDirectivesModule } from 'mui-angular/directives';
@NgModule({
  declarations: [MuiSelect, MuiOption],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    MuiDirectivesModule
  ],
  exports: [MuiSelect, MuiOption]
})
export class MuiSelectModule { }
