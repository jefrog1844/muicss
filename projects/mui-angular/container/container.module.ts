import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiContainer } from './container';

@NgModule({
  declarations: [MuiContainer],
  imports: [
    CommonModule
  ],
  exports: [MuiContainer]
})
export class MuiContainerModule { }
