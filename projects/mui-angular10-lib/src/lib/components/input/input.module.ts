import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MuiInputComponent } from './input.component';

@NgModule({
  declarations: [MuiInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [MuiInputComponent]
})
export class MuiInputModule { }
