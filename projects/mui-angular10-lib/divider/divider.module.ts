import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiDividerComponent } from './divider.component';

@NgModule({
  declarations: [MuiDividerComponent],
  imports: [
    CommonModule
  ],
  exports: [MuiDividerComponent]
})
export class MuiDividerModule { }
