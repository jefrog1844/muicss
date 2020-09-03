import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MuiRadioComponent } from './radio.component';
import {MuiDirectivesModule} from 'mui-angular10-lib/directives';

@NgModule({
  declarations: [MuiRadioComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MuiDirectivesModule
  ],
  exports: [MuiRadioComponent]
})
export class MuiRadioModule { }
