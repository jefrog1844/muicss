import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiButtonComponent } from './button.component';

@NgModule({
  declarations: [MuiButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [MuiButtonComponent]
})
export class MuiButtonModule { }
