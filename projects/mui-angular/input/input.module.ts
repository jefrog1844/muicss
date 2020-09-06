import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MuiInput } from './input';
import { MuiDirectivesModule } from 'mui-angular/directives';
@NgModule({
  declarations: [MuiInput],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MuiDirectivesModule
  ],
  exports: [MuiInput]
})
export class MuiInputModule { }
