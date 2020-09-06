import { Component, OnInit } from '@angular/core';
import { MuiTab } from 'mui-angular/tabs';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  select(tab: MuiTab) {
    console.log("Tab selected: ",tab.label);
  }

  deselect(tab: MuiTab) {
    console.log("Tab deselected: ",tab.label);
  }

  change(index: number) {
    console.log('User activated new tab: ',index);
  }
}
