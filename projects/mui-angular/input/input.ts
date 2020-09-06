import { Component, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorConnector } from 'mui-angular/directives';

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
    useExisting: MuiInput,
    multi: true
  }]
})

export class MuiInput extends ControlValueAccessorConnector {

  @Input() label?: string;
  @Input() hint?: string;
  @Input() type?: string = "text";

  constructor(injector: Injector) {
    super(injector);
  }

}
