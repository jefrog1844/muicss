import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiButton } from './button';
import { MuiDirectivesModule } from 'mui-angular/directives';

@NgModule({
  declarations: [MuiButton],
  imports: [
    CommonModule,
    MuiDirectivesModule
  ],
  exports: [MuiButton]
})
export class MuiButtonModule { }
