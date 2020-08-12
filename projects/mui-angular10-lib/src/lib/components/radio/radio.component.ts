import { Component, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorConnector } from '../../directives/control-value-accessor-connector';

@Component({
  selector: 'mui-radio',
  template: `<div class="mui-radio"><label><input type="radio" [formControl]="control" value={{value}}>{{label}}</label></div>`,
  styles: [],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: MuiRadioComponent,
    multi: true
  }]
})
export class MuiRadioComponent extends ControlValueAccessorConnector {

  @Input() label: string;
  @Input() value: string;

  constructor(injector: Injector) {
    super(injector);
  }


}
