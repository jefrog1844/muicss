import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiAppbar } from './appbar';


@NgModule({
  declarations: [MuiAppbar],
  imports: [
    CommonModule
  ],
  exports: [MuiAppbar]
})
export class MuiAppbarModule { }
