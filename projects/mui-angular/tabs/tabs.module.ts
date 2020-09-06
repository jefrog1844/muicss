import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiTab } from './tab';
import { MuiTabs } from './tabs';


@NgModule({
  declarations: [MuiTab, MuiTabs],
  imports: [
    CommonModule
  ],
  exports: [MuiTab, MuiTabs]
})
export class MuiTabsModule { }
