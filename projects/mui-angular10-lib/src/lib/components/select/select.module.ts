import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {OverlayModule} from '@angular/cdk/overlay';
import { MuiSelectComponent } from './select.component';
import { MuiOptionComponent } from './option.component';

@NgModule({
  declarations: [MuiSelectComponent, MuiOptionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule
  ],
  exports: [MuiSelectComponent, MuiOptionComponent]
})
export class MuiSelectModule { }
