import { Component, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorConnector } from '../../directives/control-value-accessor-connector';

@Component({
  selector: 'mui-checkbox',
  template: `<div class="mui-checkbox"><label><input type="checkbox" [formControl]="control" value={{value}}>{{label}}</label></div>`,
  styles: [`
  .mui-checkbox {
    position: relative;
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  
  .mui-checkbox > label {
    min-height: 20px;
    padding-left: 20px;
    margin-bottom: 0;
    font-weight: normal;
    cursor: pointer;
  }
  
  .mui-checkbox input:disabled {
    cursor: not-allowed;
  }
  
  .mui-checkbox input:focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }
  
  .mui-checkbox > label > input[type="checkbox"],
  .mui-checkbox--inline > label > input[type="checkbox"] {
    position: absolute;
    margin-left: -20px;
    margin-top: 4px;
  }
  
  .mui-checkbox + .mui-checkbox {
    margin-top: -5px;
  }
  
  .mui-checkbox--inline {
    display: inline-block;
    padding-left: 20px;
    margin-bottom: 0;
    vertical-align: middle;
    font-weight: normal;
    cursor: pointer;
  }
  
  .mui-checkbox--inline > input[type="radio"],
  .mui-checkbox--inline > input[type="checkbox"],
  .mui-checkbox--inline > label > input[type="radio"],
  .mui-checkbox--inline > label > input[type="checkbox"] {
    margin: 4px 0 0;
    line-height: normal;
  }
  
  .mui-checkbox--inline + .mui-checkbox--inline {
    margin-top: 0;
    margin-left: 10px;
  }
  
  `],
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
