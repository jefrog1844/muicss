import { Component, ContentChildren, QueryList, Input, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { MuiTabComponent } from '../tab/tab.component';

@Component({
  selector: 'mui-tabs',
  template: `
  <ul class="mui-tabs__bar" [ngClass]="{'mui-tabs__bar--justified': justified}">
    <li *ngFor="let tab of tabs" [ngClass]="{'mui--is-active': tab.active}">
      <a (click)="onClick(tab)">{{tab.label}}</a>
    </li>
  </ul>
  <ng-content></ng-content>
  `,
  styles: [
  ]
})
export class MuiTabsComponent implements AfterContentInit {

  @Input()
  justified?: boolean = false;

  @Output() muiChange = new EventEmitter<number>();

  @ContentChildren(MuiTabComponent)
  tabs: QueryList<MuiTabComponent>;
  
  private _selected: MuiTabComponent;

  constructor() { }

  ngAfterContentInit() {
    let activeTab = this.tabs.find((tab) => tab.active);

    if(activeTab) {
      this.onClick(activeTab);
    } else {
      this.onClick(this.tabs.first);
    }
  }

  onClick(tab: MuiTabComponent) {
    //this.tabs.toArray().forEach(tab => tab.active = false);
    //tab.active = true;
    if(this._selected === tab) return;


    if(this._selected) {
      this._selected.onDeselect();
    }
    
    this._selected = tab;
    tab.onSelect()

    this.muiChange.emit(this.tabs.toArray().indexOf(this._selected));
  }

}
