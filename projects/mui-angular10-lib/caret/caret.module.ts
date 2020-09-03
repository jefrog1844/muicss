import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiCaretComponent } from './caret.component';

@NgModule({
  declarations: [MuiCaretComponent],
  imports: [
    CommonModule
  ],
  exports: [MuiCaretComponent]
})
export class MuiCaretModule { }
