import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mui-form',
  template: `<form class={{class}}><ng-content></ng-content></form>`,
  styles: [`
  .mui-form legend {
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: 10px;
    font-size: 21px;
    color: rgba(0, 0, 0, 0.87);
    line-height: inherit;
    border: 0;
  }
  
  .mui-form fieldset {
    border: 0;
    padding: 0;
    margin: 0 0 20px 0;
  }
  
  @media (min-width: 544px) {
    .mui-form--inline .mui-textfield {
      display: inline-block;
      vertical-align: bottom;
      margin-bottom: 0;
    }
    .mui-form--inline .mui-radio,
    .mui-form--inline .mui-checkbox {
      display: inline-block;
      margin-top: 0;
      margin-bottom: 0;
      vertical-align: middle;
    }
    .mui-form--inline .mui-radio > label,
    .mui-form--inline .mui-checkbox > label {
      padding-left: 0;
    }
    .mui-form--inline .mui-radio > label > input[type="radio"],
    .mui-form--inline .mui-checkbox > label > input[type="checkbox"] {
      position: relative;
      margin-left: 0;
    }
    .mui-form--inline .mui-select {
      display: inline-block;
      vertical-align: bottom;
      margin-bottom: 0;
    }
    .mui-form--inline .mui-btn {
      margin-bottom: 0;
      margin-top: 0;
      vertical-align: bottom;
    }
  }
  
  `]
})
export class MuiFormComponent implements OnInit {
  class: string = "mui-form";

  @Input()
  set inline(value: any) {
    if (this.transformBooleanProperty(value)) {
      this.class = this.class + " mui-form--inline"
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  transformBooleanProperty(value: any): boolean {
    return value != null && `${value}` !== 'false';
  }

}
