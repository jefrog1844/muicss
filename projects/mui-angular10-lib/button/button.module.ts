import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import {MuiDirectivesModule} from '../directives/directives.module';
import { MuiButtonComponent } from './button.component';
import {MuiDirectivesModule} from 'mui-angular10-lib/directives';

@NgModule({
  declarations: [MuiButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [MuiButtonComponent]
})
export class MuiButtonModule { }
