import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MuiTextareaComponent } from './textarea.component';

@NgModule({
  declarations: [MuiTextareaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [MuiTextareaComponent]
})
export class MuiTextareaModule { }
