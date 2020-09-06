import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiRow } from './row';

@NgModule({
  declarations: [MuiRow],
  imports: [
    CommonModule
  ],
  exports: [MuiRow]
})
export class MuiRowModule { }
