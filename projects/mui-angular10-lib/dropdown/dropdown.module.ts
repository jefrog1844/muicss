import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { MuiDropdownComponent } from './dropdown.component';
import { MuiDropdownItemComponent } from './dropdown-item.component';
import { MuiButtonModule } from 'mui-angular10-lib/button';
import { MuiCaretModule } from 'mui-angular10-lib/caret';

@NgModule({
  declarations: [MuiDropdownComponent, MuiDropdownItemComponent],
  imports: [
    CommonModule,
    OverlayModule,
    MuiButtonModule,
    MuiCaretModule
  ],
  exports: [MuiDropdownComponent, MuiDropdownItemComponent]
})
export class MuiDropdownModule { }
