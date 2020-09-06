import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiOverlay } from './overlay.component';


@NgModule({
  declarations: [MuiOverlay],
  imports: [
    CommonModule
  ],
  exports: [MuiOverlay]
})
export class MuiOverlayModule { }
