import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ViewContainerRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';

import {MuiAppbarModule } from 'mui-angular/appbar';
import { MuiModalService } from 'mui-angular/modal';
import { MuiButtonModule } from 'mui-angular/button';
import { MuiCaretModule } from 'mui-angular/caret';
import { MuiCheckboxModule } from 'mui-angular/checkbox';
import { MuiColModule } from 'mui-angular/col';
import { MuiContainerModule } from 'mui-angular/container';
import { MuiDividerModule } from 'mui-angular/divider';
import { MuiDropdownModule } from 'mui-angular/dropdown';
import { MuiFormModule } from 'mui-angular/form';
import { MuiInputModule } from 'mui-angular/input';
import { MuiPanelModule } from 'mui-angular/panel';
import { MuiRadioModule } from 'mui-angular/radio';
import { MuiRowModule } from 'mui-angular/row';
import { MuiSelectModule } from 'mui-angular/select';
import { MuiTabsModule } from 'mui-angular/tabs';
import { MuiTextareaModule } from 'mui-angular/textarea';
import { MuiModalModule } from 'mui-angular/modal';
import { MuiDirectivesModule } from 'mui-angular/directives';
import {MuiOverlayModule} from 'mui-angular/overlay';
import {MuiOverlayService} from 'mui-angular/overlay';

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
    MuiTabsModule,
    MuiTextareaModule,
    MuiModalModule,
    MuiDirectivesModule,
    MuiOverlayModule
  ],
  providers: [MuiModalService, MuiOverlayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
