import { Component, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorConnector } from '../../directives/control-value-accessor-connector';

@Component({
  selector: 'mui-radio',
  template: `<div class="mui-radio"><label><input type="radio" [formControl]="control" value={{value}}>{{label}}</label></div>`,
  styles: [`
  .mui-radio {
    position: relative;
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  
  .mui-radio > label {
    min-height: 20px;
    padding-left: 20px;
    margin-bottom: 0;
    font-weight: normal;
    cursor: pointer;
  }
  
  .mui-radio input:disabled {
    cursor: not-allowed;
  }
  
  .mui-radio input:focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }
  
  .mui-radio > label > input[type="radio"],
  .mui-radio--inline > label > input[type="radio"] {
    position: absolute;
    margin-left: -20px;
    margin-top: 4px;
  }
  
  .mui-radio + .mui-radio {
    margin-top: -5px;
  }
  
  .mui-radio--inline {
    display: inline-block;
    padding-left: 20px;
    margin-bottom: 0;
    vertical-align: middle;
    font-weight: normal;
    cursor: pointer;
  }
  
  .mui-radio--inline > input[type="radio"],
  .mui-radio--inline > input[type="checkbox"],
  .mui-radio--inline > label > input[type="radio"],
  .mui-radio--inline > label > input[type="checkbox"] {
    margin: 4px 0 0;
    line-height: normal;
  }
  
  .mui-radio--inline + .mui-radio--inline {
    margin-top: 0;
    margin-left: 10px;
  }
  
  `],
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
