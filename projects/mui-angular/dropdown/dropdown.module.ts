import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { MuiDropdown } from './dropdown';
import { MuiDropdownItem } from './dropdown-item';
import { MuiButtonModule } from 'mui-angular/button';
import { MuiCaretModule } from 'mui-angular/caret';

@NgModule({
  declarations: [MuiDropdown, MuiDropdownItem],
  imports: [
    CommonModule,
    OverlayModule,
    MuiButtonModule,
    MuiCaretModule
  ],
  exports: [MuiDropdown, MuiDropdownItem]
})
export class MuiDropdownModule { }
