import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiPanel } from './panel';

@NgModule({
  declarations: [MuiPanel],
  imports: [
    CommonModule
  ],
  exports: [MuiPanel]
})
export class MuiPanelModule { }
