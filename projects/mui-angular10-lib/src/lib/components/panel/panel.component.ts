import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mui-panel',
  template: `<div class="mui-panel"><ng-content></ng-content></div>`,
  styles: []
})
export class MuiPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
