import { Component, Input } from '@angular/core';

@Component({
  selector: 'mui-caret',
  template: `<span class={{class}}></span>`,
  styles: []
})
export class MuiCaret {
  class: string = "mui-caret";

  @Input()
  set direction(direction: string) {
    if (direction) {
      this.class = this.class + " mui-caret--" + direction;

    }
  }

  constructor() { }

}
