import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ViewContainerRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';

import {MuiAppbarModule } from 'mui-angular10-lib/appbar';
import { MuiModalService } from 'mui-angular10-lib/modal';
import { MuiButtonModule } from 'mui-angular10-lib/button';
import { MuiCaretModule } from 'mui-angular10-lib/caret';
import { MuiCheckboxModule } from 'mui-angular10-lib/checkbox';
import { MuiColModule } from 'mui-angular10-lib/col';
import { MuiContainerModule } from 'mui-angular10-lib/container';
import { MuiDividerModule } from 'mui-angular10-lib/divider';
import { MuiDropdownModule } from 'mui-angular10-lib/dropdown';
import { MuiFormModule } from 'mui-angular10-lib/form';
import { MuiInputModule } from 'mui-angular10-lib/input';
import { MuiPanelModule } from 'mui-angular10-lib/panel';
import { MuiRadioModule } from 'mui-angular10-lib/radio';
import { MuiRowModule } from 'mui-angular10-lib/row';
import { MuiSelectModule } from 'mui-angular10-lib/select';
import { MuiTabModule } from 'mui-angular10-lib/tab';
import { MuiTabsModule } from 'mui-angular10-lib/tabs';
import { MuiTextareaModule } from 'mui-angular10-lib/textarea';
import { MuiModalModule } from 'mui-angular10-lib/modal';
import { MuiDirectivesModule } from 'mui-angular10-lib/directives';

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
import { ModalComponent } from './modal/modal.component';

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
    TabComponent,
    ModalComponent
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
    MuiPanelModule,
    MuiRadioModule,
    MuiRowModule,
    MuiSelectModule,
    MuiTabModule,
    MuiTabsModule,
    MuiTextareaModule,
    MuiModalModule,
    MuiDirectivesModule
  ],
  providers: [MuiModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
