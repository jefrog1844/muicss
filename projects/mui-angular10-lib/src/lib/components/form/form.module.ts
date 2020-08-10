import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiFormComponent } from './form.component';

@NgModule({
  declarations: [MuiFormComponent],
  imports: [
    CommonModule
  ],
  exports: [MuiFormComponent]
})
export class MuiFormModule { }
