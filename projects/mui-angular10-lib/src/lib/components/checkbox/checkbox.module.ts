import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MuiCheckboxComponent } from './checkbox.component';

@NgModule({
  declarations: [MuiCheckboxComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [MuiCheckboxComponent]
})
export class MuiCheckboxModule { }
