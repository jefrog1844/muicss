import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiOverlayComponent } from './overlay.component';
import {MuiOverlayRef} from './overlay.service';
import { MuiButtonModule } from '../button/button.module';
import { OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  declarations: [MuiOverlayComponent],
  imports: [
    CommonModule,
    MuiButtonModule,
    OverlayModule
  ],
  exports: [MuiOverlayComponent]
})
export class MuiOverlayModule { }
