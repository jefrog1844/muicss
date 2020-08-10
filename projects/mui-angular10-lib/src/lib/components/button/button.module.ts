import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MuiDirectivesModule} from '../../directives/directives.module';
import { MuiButtonComponent } from './button.component';

@NgModule({
  declarations: [MuiButtonComponent],
  imports: [
    CommonModule,
    MuiDirectivesModule
  ],
  exports: [MuiButtonComponent]
})
export class MuiButtonModule { }
