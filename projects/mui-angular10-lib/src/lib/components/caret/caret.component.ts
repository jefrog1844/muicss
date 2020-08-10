import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mui-caret',
  template: `<span class={{class}}></span>`,
  styles: [`
  .mui-caret {
    display: inline-block;
    width: 0;
    height: 0;
    margin: 0 0 0 2px;
    vertical-align: middle;
    border-top: 4px solid;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
  }
  
  .mui-caret.mui-caret--up {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    margin: 0 0 2px 2px;
  }
  
  .mui-caret.mui-caret--right {
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    margin: 0 0 2px 2px;
  }
  
  .mui-caret.mui-caret--left {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    margin: 0 2px 2px 0;
  }
  `]
})
export class MuiCaretComponent implements OnInit {
  class: string = "mui-caret";

  @Input()
  set direction(direction: string) {
    if (direction) {
      this.class = this.class + " mui-caret--" + direction;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
