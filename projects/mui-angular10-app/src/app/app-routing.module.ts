import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppbarComponent} from './appbar/appbar.component';
import {ButtonComponent} from './button/button.component';
import {ContainerComponent} from './container/container.component';
import {DividerComponent} from './divider/divider.component';
import {DropdownComponent} from './dropdown/dropdown.component';
import {FormComponent} from './form/form.component';
import {GridComponent} from './grid/grid.component';
import {PanelComponent} from './panel/panel.component';
import {TabComponent} from './tab/tab.component';
import {OverlayComponent} from './overlay/overlay.component';

const routes: Routes = [
  {
    path: 'appbar',
    component: AppbarComponent,
  },
  {
    path: 'button',
    component: ButtonComponent,
  },
  {
    path: 'container',
    component: ContainerComponent,
  },
  {
    path: 'divider',
    component: DividerComponent,
  },
  {
    path: 'dropdown',
    component: DropdownComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'grid',
    component: GridComponent,
  },
  {
    path: 'panel',
    component: PanelComponent,
  },
  {
    path: 'tab',
    component: TabComponent,
  },
  {
    path: 'overlay',
    component: OverlayComponent,
  },
  {
    path: '',
    redirectTo: '/appbar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
