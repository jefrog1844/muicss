import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MuiTextareaComponent } from './textarea.component';
import {MuiDirectivesModule} from 'mui-angular10-lib/directives';
@NgModule({
  declarations: [MuiTextareaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MuiDirectivesModule
  ],
  exports: [MuiTextareaComponent]
})
export class MuiTextareaModule { }
