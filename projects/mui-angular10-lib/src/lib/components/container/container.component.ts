import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mui-container',
  template: `<div class={{class}}><ng-content></ng-content></div>`,
  styles: [`
  .mui-container {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
  
  .mui-container:before, .mui-container:after {
    content: " ";
    display: table;
  }
  
  .mui-container:after {
    clear: both;
  }
  
  @media (min-width: 544px) {
    .mui-container {
      max-width: 570px;
    }
  }
  
  @media (min-width: 768px) {
    .mui-container {
      max-width: 740px;
    }
  }
  
  @media (min-width: 992px) {
    .mui-container {
      max-width: 960px;
    }
  }
  
  @media (min-width: 1200px) {
    .mui-container {
      max-width: 1170px;
    }
  }
  
  .mui-container-fluid {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
  
  .mui-container-fluid:before, .mui-container-fluid:after {
    content: " ";
    display: table;
  }
  
  .mui-container-fluid:after {
    clear: both;
  }
  `]
})
export class MuiContainerComponent implements OnInit {

  private _fluid: boolean;
  class: string = "mui-container";

  @Input()
  set fluid(value: any) {
    if (this.transformBooleanProperty(value)) {
      this.class = "mui-container-fluid";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  transformBooleanProperty(value: any): boolean {
    return value != null && `${value}` !== 'false';
  }
}
