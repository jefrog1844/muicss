import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mui-appbar',
  template: `<div class="mui-appbar"><ng-content></ng-content></div>`,
  styles: []
})
export class MuiAppbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
