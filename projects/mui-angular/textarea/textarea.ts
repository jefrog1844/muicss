import { Component, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorConnector } from 'mui-angular/directives';

@Component({
  selector: 'mui-textarea',
  template: `<div class="mui-textfield"><textarea rows={{rows}} [formControl]="control" placeholder={{hint}}></textarea><label tabindex="-1">{{label}}</label></div>`,
  styles: [],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: MuiTextarea,
    multi: true
  }]
})

export class MuiTextarea extends ControlValueAccessorConnector {

  @Input() label: string;
  @Input() rows?: string = "2";
  @Input() hint?: string = "";

  constructor(injector: Injector) {
    super(injector);
  }

}
