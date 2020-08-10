import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiOptionComponent } from './option.component';

@NgModule({
  declarations: [MuiOptionComponent],
  imports: [
    CommonModule
  ],
  exports: [MuiOptionComponent]
})
export class MuiOptionModule { }
