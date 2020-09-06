import { Component, Input } from '@angular/core';

@Component({
  selector: 'mui-container',
  template: `<div class={{class}}><ng-content></ng-content></div>`,
  styles: []
})
export class MuiContainer {

  private _fluid: boolean;
  class: string = "mui-container";

  @Input()
  set fluid(value: any) {
    if (this.transformBooleanProperty(value)) {
      this.class = "mui-container-fluid";
    }
  }

  constructor() { }

  transformBooleanProperty(value: any): boolean {
    return value != null && `${value}` !== 'false';
  }
}
