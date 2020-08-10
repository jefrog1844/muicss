import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiColComponent } from './col.component';

@NgModule({
  declarations: [MuiColComponent],
  imports: [
    CommonModule
  ],
  exports: [MuiColComponent]
})
export class MuiColModule { }
