import { Component, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorConnector } from '../../directives/control-value-accessor-connector';


@Component({
  selector: 'mui-input',
  template: `
    <div class="mui-textfield" #divTarget>
      <input #inputTarget [ngClass]="{'mui--is-not-empty': control.value, 'mui--is-empty': !control.value}" type={{type}} [formControl]="control" placeholder={{hint}}>
      <label tabindex="-1">{{label}}</label>
    </div>`,
  styles: [],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: MuiInputComponent,
    multi: true
  }]
})

export class MuiInputComponent extends ControlValueAccessorConnector {

  @Input() label?: string;
  @Input() hint?: string;
  @Input() type?: string = "text";

  constructor(injector: Injector) {
    super(injector);
  }

}
