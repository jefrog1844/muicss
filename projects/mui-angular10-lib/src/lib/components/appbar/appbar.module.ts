import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiAppbarComponent } from './appbar.component';


@NgModule({
  declarations: [MuiAppbarComponent],
  imports: [
    CommonModule
  ],
  exports: [MuiAppbarComponent]
})
export class MuiAppbarModule { }
