import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiRowComponent } from './row.component';

@NgModule({
  declarations: [MuiRowComponent],
  imports: [
    CommonModule
  ],
  exports: [MuiRowComponent]
})
export class MuiRowModule { }
