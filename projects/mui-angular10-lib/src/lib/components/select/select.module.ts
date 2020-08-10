import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {OverlayModule} from '@angular/cdk/overlay';
import { MuiSelectComponent } from './select.component';

@NgModule({
  declarations: [MuiSelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule
  ],
  exports: [MuiSelectComponent]
})
export class MuiSelectModule { }
