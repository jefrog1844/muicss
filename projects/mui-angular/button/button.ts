import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mui-button',
  template: `<button muiRipple class={{class}} (click)='handleClick($event)' [disabled]="disabled">
      <ng-content></ng-content>
      <span class="mui-btn__ripple-container"><span class="mui-ripple"></span></span>
      </button>`,
  styles: []
})
export class MuiButton {

  constructor() { }

  class: string = "mui-btn";

  @Output() muiClick = new EventEmitter<Event>();

  @Input()
  set size(size: string) {
    if (size) {
      this.class = this.class + " mui-btn--" + size;
    }
  }

  @Input()
  set color(color: string) {
    if (color) {
      this.class = this.class + " mui-btn--" + color;
    }
  }

  @Input()
  set variant(variant: string) {
    if (variant) {
      this.class = this.class + " mui-btn--" + variant;
    }
  }

  @Input() disabled?: boolean = false;

  handleClick(event: Event) {
    if (!this.disabled) {
      this.muiClick.emit(event);
    } else {
      event.stopPropagation();
    }
  }



}
