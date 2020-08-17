import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mui-tab',
  template: `
  <div class="mui-tabs__pane" [ngClass]="{'mui--is-active': tabId === selectedId}"><ng-content></ng-content></div>
  `,
  styles: []
})
export class MuiTabComponent implements OnInit {

  @Input()
  label: string;

  @Input()
  selectedId: any;

  @Input()
  tabId: any;

  @Output() muiSelect = new EventEmitter<any>();
  @Output() muiDeselect = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(index: any) {
    this.muiSelect.emit(index);
  }

  onDeselect(index: any) {
    this.muiDeselect.emit(index);
  }
}
