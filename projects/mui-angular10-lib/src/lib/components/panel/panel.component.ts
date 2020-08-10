import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mui-panel',
  template: `<div class="mui-panel"><ng-content></ng-content></div>`,
  styles: [`
  .mui-panel {
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 0;
    background-color: #FFF;
    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0px 2px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0px 2px 0 rgba(0, 0, 0, 0.12);
  }
  
  .mui-panel:before, .mui-panel:after {
    content: " ";
    display: table;
  }
  
  .mui-panel:after {
    clear: both;
  }
  
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    .mui-panel {
      -webkit-box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.12), -1px 0px 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0px 2px 0 rgba(0, 0, 0, 0.12);
      box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.12), -1px 0px 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0px 2px 0 rgba(0, 0, 0, 0.12);
    }
  }
  
  @supports (-ms-ime-align: auto) {
    .mui-panel {
      -webkit-box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.12), -1px 0px 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0px 2px 0 rgba(0, 0, 0, 0.12);
      box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.12), -1px 0px 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0px 2px 0 rgba(0, 0, 0, 0.12);
    }
  }
  `]
})
export class MuiPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
