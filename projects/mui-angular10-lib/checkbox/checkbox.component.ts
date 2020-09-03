import { Component, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import {ControlValueAccessorConnector} from 'mui-angular10-lib/directives';

@Component({
  selector: 'mui-checkbox',
  template: `<div class="mui-checkbox"><label><input type="checkbox" [formControl]="control" value={{value}}>{{label}}</label></div>`,
  styles: [],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: MuiCheckboxComponent,
    multi: true
  }]
})
export class MuiCheckboxComponent extends ControlValueAccessorConnector {
  @Input() label: string;
  @Input() value: string;

  constructor(injector: Injector) {
    super(injector);
  }

}
