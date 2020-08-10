import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {OverlayModule} from '@angular/cdk/overlay';

import { MuiAppbarModule } from 'mui-angular10-lib';
import { MuiButtonModule } from 'mui-angular10-lib';
import { MuiCaretModule } from 'mui-angular10-lib';
import { MuiCheckboxModule } from 'mui-angular10-lib';
import { MuiColModule } from 'mui-angular10-lib';
import { MuiContainerModule } from 'mui-angular10-lib';
import { MuiDividerModule } from 'mui-angular10-lib';
import { MuiDropdownModule } from 'mui-angular10-lib';
import { MuiFormModule } from 'mui-angular10-lib';
import { MuiInputModule } from 'mui-angular10-lib';
import { MuiOptionModule } from 'mui-angular10-lib';
import { MuiPanelModule } from 'mui-angular10-lib';
import { MuiRadioModule } from 'mui-angular10-lib';
import { MuiRowModule } from 'mui-angular10-lib';
import { MuiSelectModule } from 'mui-angular10-lib';
import { MuiTabModule } from 'mui-angular10-lib';
import { MuiTabsModule } from 'mui-angular10-lib';
import { MuiTextareaModule } from 'mui-angular10-lib';
import { MuiDirectivesModule } from 'mui-angular10-lib'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { AppbarComponent } from './appbar/appbar.component';
import { ButtonComponent } from './button/button.component';
import { ContainerComponent } from './container/container.component';
import { DividerComponent } from './divider/divider.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormComponent } from './form/form.component';
import { GridComponent } from './grid/grid.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    AppbarComponent,
    ButtonComponent,
    ContainerComponent,
    DividerComponent,
    DropdownComponent,
    FormComponent,
    GridComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    AppRoutingModule,
    MuiAppbarModule,
    MuiButtonModule,
    MuiCaretModule,
    MuiCheckboxModule,
    MuiColModule,
    MuiContainerModule,
    MuiDividerModule,
    MuiDropdownModule,
    MuiFormModule,
    MuiInputModule,
    MuiOptionModule,
    MuiPanelModule,
    MuiRadioModule,
    MuiRowModule,
    MuiSelectModule,
    MuiTabModule,
    MuiTabsModule,
    MuiTextareaModule,
    MuiDirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
