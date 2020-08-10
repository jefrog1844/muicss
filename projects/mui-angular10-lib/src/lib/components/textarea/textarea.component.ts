import { Component, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorConnector } from '../../directives/control-value-accessor-connector';

@Component({
  selector: 'mui-textarea',
  template: `<div class="mui-textfield"><textarea rows={{rows}} [formControl]="control" placeholder={{hint}}></textarea><label tabindex="-1">{{label}}</label></div>`,
  styles: [`
  .mui-textfield {
    display: block;
    padding-top: 15px;
    margin-bottom: 20px;
    position: relative;
  }
  
  .mui-textfield > label {
    position: absolute;
    top: 0;
    display: block;
    width: 100%;
    color: rgba(0, 0, 0, 0.54);
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .mui-textfield > textarea {
    padding-top: 5px;
  }
  
  .mui-textfield > input:focus ~ label,
  .mui-textfield > textarea:focus ~ label {
    color: #2196F3;
  }
  
  .mui-textfield--float-label > label {
    position: absolute;
    -webkit-transform: translate(0px, 15px);
    transform: translate(0px, 15px);
    font-size: 16px;
    line-height: 32px;
    color: rgba(0, 0, 0, 0.26);
    text-overflow: clip;
    cursor: text;
    pointer-events: none;
  }
  
  .mui-textfield--float-label > input:-webkit-autofill ~ label,
  .mui-textfield--float-label > textarea:-webkit-autofill ~ label {
    -webkit-transform: translate(0px, 0px);
    transform: translate(0px, 0px);
    font-size: 12px;
    line-height: 15px;
    text-overflow: ellipsis;
  }
  
  .mui-textfield--float-label > input:focus ~ label,
  .mui-textfield--float-label > textarea:focus ~ label {
    -webkit-transform: translate(0px, 0px);
    transform: translate(0px, 0px);
    font-size: 12px;
    line-height: 15px;
    text-overflow: ellipsis;
  }
  
  .mui-textfield--float-label > input:not(:focus).mui--is-not-empty ~ label, .mui-textfield--float-label > input:not(:focus)[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty) ~ label, .mui-textfield--float-label > input:not(:focus):not(:empty):not(.mui--is-empty):not(.mui--is-not-empty) ~ label,
  .mui-textfield--float-label > textarea:not(:focus).mui--is-not-empty ~ label,
  .mui-textfield--float-label > textarea:not(:focus)[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty) ~ label,
  .mui-textfield--float-label > textarea:not(:focus):not(:empty):not(.mui--is-empty):not(.mui--is-not-empty) ~ label {
    color: rgba(0, 0, 0, 0.54);
    font-size: 12px;
    line-height: 15px;
    -webkit-transform: translate(0px, 0px);
    transform: translate(0px, 0px);
    text-overflow: ellipsis;
  }
  
  .mui-textfield--wrap-label {
    display: table;
    width: 100%;
    padding-top: 0px;
  }
  
  .mui-textfield--wrap-label:not(.mui-textfield--float-label) > label {
    display: table-header-group;
    position: static;
    white-space: normal;
    overflow-x: visible;
  }
  
  .mui-textfield > input,
  .mui-textfield > textarea {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    background-color: transparent;
    color: rgba(0, 0, 0, 0.87);
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.26);
    outline: none;
    width: 100%;
    padding: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-radius: 0px;
    font-size: 16px;
    font-family: inherit;
    line-height: inherit;
    background-image: none;
  }
  
  .mui-textfield > input:focus,
  .mui-textfield > textarea:focus {
    border-color: #2196F3;
    border-width: 2px;
  }
  
  .mui-textfield > input:disabled, .mui-textfield > input:-moz-read-only,
  .mui-textfield > textarea:disabled,
  .mui-textfield > textarea:-moz-read-only {
    cursor: not-allowed;
    background-color: transparent;
    opacity: 1;
  }
  
  .mui-textfield > input:disabled, .mui-textfield > input:read-only,
  .mui-textfield > textarea:disabled,
  .mui-textfield > textarea:read-only {
    cursor: not-allowed;
    background-color: transparent;
    opacity: 1;
  }
  
  .mui-textfield > input::-webkit-input-placeholder,
  .mui-textfield > textarea::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.26);
    opacity: 1;
  }
  
  .mui-textfield > input::-moz-placeholder,
  .mui-textfield > textarea::-moz-placeholder {
    color: rgba(0, 0, 0, 0.26);
    opacity: 1;
  }
  
  .mui-textfield > input:-ms-input-placeholder,
  .mui-textfield > textarea:-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.26);
    opacity: 1;
  }
  
  .mui-textfield > input::-ms-input-placeholder,
  .mui-textfield > textarea::-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.26);
    opacity: 1;
  }
  
  .mui-textfield > input::placeholder,
  .mui-textfield > textarea::placeholder {
    color: rgba(0, 0, 0, 0.26);
    opacity: 1;
  }
  
  .mui-textfield > input {
    height: 32px;
  }
  
  .mui-textfield > input:focus {
    height: calc(32px + 1px);
    margin-bottom: -1px;
  }
  
  .mui-textfield > textarea {
    min-height: 64px;
  }
  
  .mui-textfield > textarea[rows]:not([rows="2"]):focus {
    margin-bottom: -1px;
  }
  
  .mui-textfield > input:focus {
    height: calc(32px + 1px);
    margin-bottom: -1px;
  }
  
  .mui-textfield > input:invalid:not(:focus):not(:required), .mui-textfield > input:invalid:not(:focus):required.mui--is-not-empty, .mui-textfield > input:invalid:not(:focus):required.mui--is-empty.mui--is-touched, .mui-textfield > input:invalid:not(:focus):required[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty), .mui-textfield > input:invalid:not(:focus):required:not(:empty):not(.mui--is-empty):not(.mui--is-not-empty),
  .mui-textfield > textarea:invalid:not(:focus):not(:required),
  .mui-textfield > textarea:invalid:not(:focus):required.mui--is-not-empty,
  .mui-textfield > textarea:invalid:not(:focus):required.mui--is-empty.mui--is-touched,
  .mui-textfield > textarea:invalid:not(:focus):required[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty),
  .mui-textfield > textarea:invalid:not(:focus):required:not(:empty):not(.mui--is-empty):not(.mui--is-not-empty),
  .mui-textfield > input:not(:focus).mui--is-invalid:not(:required),
  .mui-textfield > input:not(:focus).mui--is-invalid:required.mui--is-not-empty,
  .mui-textfield > input:not(:focus).mui--is-invalid:required.mui--is-empty.mui--is-touched,
  .mui-textfield > input:not(:focus).mui--is-invalid:required[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty),
  .mui-textfield > input:not(:focus).mui--is-invalid:required:not(:empty):not(.mui--is-empty):not(.mui--is-not-empty),
  .mui-textfield > textarea:not(:focus).mui--is-invalid:not(:required),
  .mui-textfield > textarea:not(:focus).mui--is-invalid:required.mui--is-not-empty,
  .mui-textfield > textarea:not(:focus).mui--is-invalid:required.mui--is-empty.mui--is-touched,
  .mui-textfield > textarea:not(:focus).mui--is-invalid:required[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty),
  .mui-textfield > textarea:not(:focus).mui--is-invalid:required:not(:empty):not(.mui--is-empty):not(.mui--is-not-empty) {
    border-color: #F44336;
    border-width: 2px;
  }
  
  .mui-textfield > input:invalid:not(:focus):not(:required), .mui-textfield > input:invalid:not(:focus):required.mui--is-not-empty, .mui-textfield > input:invalid:not(:focus):required.mui--is-empty.mui--is-touched, .mui-textfield > input:invalid:not(:focus):required[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty), .mui-textfield > input:invalid:not(:focus):required:not(:empty):not(.mui--is-empty):not(.mui--is-not-empty),
  .mui-textfield > input:not(:focus).mui--is-invalid:not(:required),
  .mui-textfield > input:not(:focus).mui--is-invalid:required.mui--is-not-empty,
  .mui-textfield > input:not(:focus).mui--is-invalid:required.mui--is-empty.mui--is-touched,
  .mui-textfield > input:not(:focus).mui--is-invalid:required[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty),
  .mui-textfield > input:not(:focus).mui--is-invalid:required:not(:empty):not(.mui--is-empty):not(.mui--is-not-empty) {
    height: calc(32px + 1px);
    margin-bottom: -1px;
  }
  
  .mui-textfield.mui-textfield--float-label > input:invalid:not(:focus):not(:required) ~ label, .mui-textfield.mui-textfield--float-label > input:invalid:not(:focus):required.mui--is-not-empty ~ label, .mui-textfield.mui-textfield--float-label > input:invalid:not(:focus):required[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty) ~ label, .mui-textfield.mui-textfield--float-label > input:invalid:not(:focus):required:not(:empty):not(.mui--is-empty):not(.mui--is-not-empty) ~ label,
  .mui-textfield.mui-textfield--float-label > textarea:invalid:not(:focus):not(:required) ~ label,
  .mui-textfield.mui-textfield--float-label > textarea:invalid:not(:focus):required.mui--is-not-empty ~ label,
  .mui-textfield.mui-textfield--float-label > textarea:invalid:not(:focus):required[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty) ~ label,
  .mui-textfield.mui-textfield--float-label > textarea:invalid:not(:focus):required:not(:empty):not(.mui--is-empty):not(.mui--is-not-empty) ~ label {
    color: #F44336;
  }
  
  .mui-textfield:not(.mui-textfield--float-label) > input:invalid:not(:focus):not(:required) ~ label, .mui-textfield:not(.mui-textfield--float-label) > input:invalid:not(:focus):required.mui--is-empty.mui--is-touched ~ label, .mui-textfield:not(.mui-textfield--float-label) > input:invalid:not(:focus):required.mui--is-not-empty ~ label,
  .mui-textfield:not(.mui-textfield--float-label) > textarea:invalid:not(:focus):not(:required) ~ label,
  .mui-textfield:not(.mui-textfield--float-label) > textarea:invalid:not(:focus):required.mui--is-empty.mui--is-touched ~ label,
  .mui-textfield:not(.mui-textfield--float-label) > textarea:invalid:not(:focus):required.mui--is-not-empty ~ label {
    color: #F44336;
  }
  
  .mui-textfield.mui-textfield--float-label > .mui--is-invalid.mui--is-not-empty:not(:focus) ~ label {
    color: #F44336;
  }
  
  .mui-textfield:not(.mui-textfield--float-label) > .mui--is-invalid:not(:focus) ~ label {
    color: #F44336;
  }
  `],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: MuiTextareaComponent,
    multi: true
  }]
})

export class MuiTextareaComponent extends ControlValueAccessorConnector {

  @Input() label: string;
  @Input() rows?: string = "2";
  @Input() hint?: string = "";

  constructor(injector: Injector) {
    super(injector);
  }

}
