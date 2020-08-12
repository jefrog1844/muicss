import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mui-container',
  template: `<div class={{class}}><ng-content></ng-content></div>`,
  styles: []
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
