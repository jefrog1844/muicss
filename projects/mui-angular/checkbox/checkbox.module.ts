import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MuiCheckbox } from './checkbox';
import { MuiDirectivesModule } from 'mui-angular/directives';

@NgModule({
  declarations: [MuiCheckbox],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MuiDirectivesModule
  ],
  exports: [MuiCheckbox]
})
export class MuiCheckboxModule { }
