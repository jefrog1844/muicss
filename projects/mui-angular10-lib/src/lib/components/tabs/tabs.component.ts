import { Component, OnInit, ContentChildren, QueryList, Input } from '@angular/core';
import { MuiTabComponent } from '../tab/tab.component';

@Component({
  selector: 'mui-tabs',
  template: `
  <ul class="mui-tabs__bar" [ngClass]="{'mui-tabs__bar--justified': justified}">
    <li *ngFor="let tab of tabs; let i = index" [ngClass]="{'mui--is-active': $index === selectedId}">
      <a (click)="onClick($index)">{{tab.label}}</a>
    </li>
  </ul>
  `,
  styles: [
  ]
})
export class MuiTabsComponent implements OnInit {

  @Input()
  justified?: boolean = false;

  @ContentChildren(MuiTabComponent)
  tabs: QueryList<MuiTabComponent>;
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(index: number) {

  }
}
