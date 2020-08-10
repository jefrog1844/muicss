import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MuiRadioComponent } from './radio.component';

@NgModule({
  declarations: [MuiRadioComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [MuiRadioComponent]
})
export class MuiRadioModule { }
