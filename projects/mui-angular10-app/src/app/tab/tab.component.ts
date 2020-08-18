import { Component, OnInit } from '@angular/core';
import { MuiTabComponent } from 'mui-angular10-lib';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  select(tab: MuiTabComponent) {
    console.log("Tab selected: ",tab.label);
  }

  deselect(tab: MuiTabComponent) {
    console.log("Tab deselected: ",tab.label);
  }

  change(index: number) {
    console.log('User activated new tab: ',index);
  }
}
