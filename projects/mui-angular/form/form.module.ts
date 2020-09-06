import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiForm } from './form';

@NgModule({
  declarations: [MuiForm],
  imports: [
    CommonModule
  ],
  exports: [MuiForm]
})
export class MuiFormModule { }
