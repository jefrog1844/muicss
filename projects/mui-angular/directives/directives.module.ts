import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiRippleDirective } from './ripple.directive';
import { MuiFloatingLabelDirective } from './floating-label.directive';
import { ControlValueAccessorConnector } from './control-value-accessor-connector';

@NgModule({
  declarations: [MuiRippleDirective, MuiFloatingLabelDirective, ControlValueAccessorConnector],
  imports: [
    CommonModule
  ],
  exports: [MuiRippleDirective, MuiFloatingLabelDirective, ControlValueAccessorConnector]
})
export class MuiDirectivesModule { }
