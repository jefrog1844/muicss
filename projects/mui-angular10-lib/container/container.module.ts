import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiContainerComponent } from './container.component';

@NgModule({
  declarations: [MuiContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [MuiContainerComponent]
})
export class MuiContainerModule { }
