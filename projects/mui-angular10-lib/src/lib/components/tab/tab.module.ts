import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiTabComponent } from './tab.component';

@NgModule({
  declarations: [MuiTabComponent],
  imports: [
    CommonModule
  ],
  exports: [MuiTabComponent]
})
export class MuiTabModule { }
