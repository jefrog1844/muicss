import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiModalComponent } from './modal.component';
import { MuiButtonModule } from '../button/button.module';



@NgModule({
  declarations: [MuiModalComponent],
  imports: [
    CommonModule,
    MuiButtonModule
  ],
  exports: [MuiModalComponent]
})
export class MuiModalModule { }
