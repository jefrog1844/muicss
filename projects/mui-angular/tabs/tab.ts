import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mui-tab',
  template: `
  <div class="mui-tabs__pane" [hidden]="!active" [ngClass]="{'mui--is-active':active}">
    <ng-content></ng-content>
  </div>
  `,
  styles: []
})
export class MuiTab {

  @Input()
  label: string;

  @Input()
  active?: boolean = false;
  
  @Output() muiSelect = new EventEmitter<MuiTab>();
  @Output() muiDeselect = new EventEmitter<MuiTab>();

  constructor() { }

  onSelect() {
    this.muiSelect.emit(this);
    this.active = true;
  }

  onDeselect() {
    this.muiDeselect.emit(this);
    this.active = false;
  }

}
