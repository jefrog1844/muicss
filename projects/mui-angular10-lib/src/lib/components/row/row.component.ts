import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mui-row',
  template: `<div class="mui-row"><ng-content></ng-content></div>`,
  styles: [`
  .mui-row {
    margin-left: -15px;
    margin-right: -15px;
  }
  
  .mui-row:before, .mui-row:after {
    content: " ";
    display: table;
  }
  
  .mui-row:after {
    clear: both;
  }
  `]
})
export class MuiRowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
