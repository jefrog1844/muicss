import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiModal } from './modal.';
import { MuiButtonModule } from 'mui-angular/button';

@NgModule({
  declarations: [MuiModal],
  imports: [
    CommonModule,
    MuiButtonModule
  ],
  exports: [MuiModal]
})
export class MuiModalModule { }
