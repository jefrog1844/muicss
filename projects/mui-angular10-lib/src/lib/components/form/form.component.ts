import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mui-form',
  template: `<form class={{class}}><ng-content></ng-content></form>`,
  styles: []
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
