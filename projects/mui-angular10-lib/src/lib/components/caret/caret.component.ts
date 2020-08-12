import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mui-caret',
  template: `<span class={{class}}></span>`,
  styles: []
})
export class MuiCaretComponent implements OnInit {
  class: string = "mui-caret";

  @Input()
  set direction(direction: string) {
    console.log("direction: ",direction);
    if (direction) {
      this.class = this.class + " mui-caret--" + direction;
      
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
