import { Component, Input, HostBinding } from '@angular/core';
import { Highlightable } from '@angular/cdk/a11y';

@Component({
  selector: 'mui-option',
  template: `<option>{{label}}</option>`,
  styles: [`
  .mui-select {
    display: block;
    padding-top: 15px;
    margin-bottom: 20px;
    position: relative;
  }
  
  .mui-select:focus {
    outline: 0;
  }
  
  .mui-select:focus > select {
    height: calc(32px + 1px);
    margin-bottom: -1px;
    border-color: #2196F3;
    border-width: 2px;
  }
  
  .mui-select > select {
    display: block;
    height: 32px;
    width: 100%;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.26);
    border-radius: 0px;
    -webkit-box-shadow: none;
    box-shadow: none;
    background-color: transparent;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNiIgd2lkdGg9IjEwIj48cG9seWdvbiBwb2ludHM9IjAsMCAxMCwwIDUsNiIgc3R5bGU9ImZpbGw6cmdiYSgwLDAsMCwuMjQpOyIvPjwvc3ZnPg==");
    background-repeat: no-repeat;
    background-position: right center;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.87);
    font-size: 16px;
    font-family: inherit;
    line-height: inherit;
    padding: 0 25px 0 0;
  }
  
  .mui-select > select::-ms-expand {
    display: none;
  }
  
  .mui-select > select:focus {
    outline: 0;
    height: calc(32px + 1px);
    margin-bottom: -1px;
    border-color: #2196F3;
    border-width: 2px;
  }
  
  .mui-select > select:disabled {
    color: rgba(0, 0, 0, 0.38);
    cursor: not-allowed;
    background-color: transparent;
    opacity: 1;
  }
  
  .mui-select > select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
  
  .mui-select > select:focus::-ms-value {
    background: none;
    color: rgba(0, 0, 0, 0.87);
  }
  
  .mui-select > select.mui--text-placeholder {
    color: rgba(0, 0, 0, 0.26);
  }
  
  .mui-select > label {
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
  
  .mui-select:focus > label,
  .mui-select > select:focus ~ label {
    color: #2196F3;
  }
  
  .mui-select__menu {
    position: absolute;
    z-index: 2;
    min-width: 100%;
    overflow-y: auto;
    padding: 8px 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #FFF;
    font-size: 16px;
  }
  
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    .mui-select__menu {
      border-left: 1px solid rgba(0, 0, 0, 0.12);
      border-top: 1px solid rgba(0, 0, 0, 0.12);
    }
  }
  
  @supports (-ms-ime-align: auto) {
    .mui-select__menu {
      border-left: 1px solid rgba(0, 0, 0, 0.12);
      border-top: 1px solid rgba(0, 0, 0, 0.12);
    }
  }
  
  .mui-select__menu > div {
    padding: 0 22px;
    height: 42px;
    line-height: 42px;
    cursor: pointer;
    white-space: nowrap;
  }
  
  .mui-select__menu > div.mui--is-selected {
    background-color: #EEEEEE;
  }
  
  .mui-select__menu > div.mui--is-disabled {
    color: rgba(0, 0, 0, 0.38);
    cursor: not-allowed;
  }
  
  .mui-select__menu > div:not(.mui-optgroup__label):not(.mui--is-disabled):hover {
    background-color: #E0E0E0;
  }
  
  .mui-optgroup__option {
    text-indent: 1em;
  }
  
  .mui-optgroup__label {
    color: rgba(0, 0, 0, 0.54);
    font-size: 0.9em;
  }

  .mui-select__menu > div.mui--is-active {
    background-color: #EEEEEE;
  }
  
  `
  ]
})
export class MuiOptionComponent implements Highlightable {
  private _disabled: boolean = false;

  public active = false;
  
  @Input()
  label: string;

  @Input()
  value: string;

  @Input()
  set disabled(value: boolean) {
    console.log("disabled: ",value);
    if (value) {
      this._disabled = value;
    }
  }

  get disabled(): boolean {
    return this._disabled;
  }

  @Input()
  hidden: boolean = false;

  constructor() { }

  public setActiveStyles(): void {
    this.active = true;
  }

  public setInactiveStyles(): void {
    this.active = false;
  }

  getLabel(): string {
    return this.label;
  }

}
