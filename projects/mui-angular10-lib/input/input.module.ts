import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MuiInputComponent } from './input.component';
import {MuiDirectivesModule} from 'mui-angular10-lib/directives';
@NgModule({
  declarations: [MuiInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MuiDirectivesModule
  ],
  exports: [MuiInputComponent]
})
export class MuiInputModule { }
