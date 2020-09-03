import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiButtonComponent } from './button.component';
import {MuiDirectivesModule} from 'mui-angular10-lib/directives';

@NgModule({
  declarations: [MuiButtonComponent],
  imports: [
    CommonModule,
    MuiDirectivesModule
  ],
  exports: [MuiButtonComponent]
})
export class MuiButtonModule { }
