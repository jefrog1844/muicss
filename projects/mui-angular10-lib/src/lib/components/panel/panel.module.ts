import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiPanelComponent } from './panel.component';

@NgModule({
  declarations: [MuiPanelComponent],
  imports: [
    CommonModule
  ],
  exports: [MuiPanelComponent]
})
export class MuiPanelModule { }
