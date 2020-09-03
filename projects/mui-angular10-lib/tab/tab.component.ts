import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mui-tab',
  template: `
  <div class="mui-tabs__pane" [hidden]="!active" [ngClass]="{'mui--is-active':active}">
    <ng-content></ng-content>
  </div>
  `,
  styles: []
})
export class MuiTabComponent implements OnInit {

  @Input()
  label: string;

  @Input()
  active?: boolean = false;
  
  @Output() muiSelect = new EventEmitter<MuiTabComponent>();
  @Output() muiDeselect = new EventEmitter<MuiTabComponent>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect() {
    this.muiSelect.emit(this);
    this.active = true;
  }

  onDeselect() {
    this.muiDeselect.emit(this);
    this.active = false;
  }

}
