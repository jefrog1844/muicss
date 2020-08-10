import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiTabsComponent } from './tabs.component';

@NgModule({
  declarations: [MuiTabsComponent],
  imports: [
    CommonModule
  ],
  exports: [MuiTabsComponent]
})
export class MuiTabsModule { }
