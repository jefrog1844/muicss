import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MuiCheckboxComponent } from './checkbox.component';
import {MuiDirectivesModule} from 'mui-angular10-lib/directives';

@NgModule({
  declarations: [MuiCheckboxComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MuiDirectivesModule
  ],
  exports: [MuiCheckboxComponent]
})
export class MuiCheckboxModule { }
