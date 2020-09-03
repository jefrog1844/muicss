import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiModalComponent } from './modal.component';
import { MuiButtonModule } from 'mui-angular10-lib/button';

@NgModule({
  declarations: [MuiModalComponent],
  imports: [
    CommonModule,
    MuiButtonModule
  ],
  exports: [MuiModalComponent]
})
export class MuiModalModule { }
