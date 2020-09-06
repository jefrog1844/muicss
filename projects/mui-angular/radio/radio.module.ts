import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MuiRadio } from './radio';
import { MuiDirectivesModule } from 'mui-angular/directives';

@NgModule({
  declarations: [MuiRadio],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MuiDirectivesModule
  ],
  exports: [MuiRadio]
})
export class MuiRadioModule { }
