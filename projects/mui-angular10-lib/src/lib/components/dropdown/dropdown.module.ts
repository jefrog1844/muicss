import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiDropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [MuiDropdownComponent],
  imports: [
    CommonModule
  ],
  exports: [MuiDropdownComponent]
})
export class MuiDropdownModule { }
