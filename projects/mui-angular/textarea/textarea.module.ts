import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MuiTextarea } from './textarea';
import { MuiDirectivesModule } from 'mui-angular/directives';
@NgModule({
  declarations: [MuiTextarea],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MuiDirectivesModule
  ],
  exports: [MuiTextarea]
})
export class MuiTextareaModule { }
