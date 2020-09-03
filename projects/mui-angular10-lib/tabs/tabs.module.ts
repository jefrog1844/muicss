import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiTabModule } from 'mui-angular10-lib/tab';
import { MuiTabsComponent } from './tabs.component';


@NgModule({
  declarations: [MuiTabsComponent],
  imports: [
    CommonModule,
    MuiTabModule
  ],
  exports: [MuiTabsComponent]
})
export class MuiTabsModule { }
