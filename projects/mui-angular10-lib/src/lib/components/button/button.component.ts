import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'mui-button',
  template: `<button muiRipple class={{class}} (click)='handleClick($event)' [disabled]="disabled">
      <ng-content></ng-content>
      <span class="mui-btn__ripple-container"></span>
      </button>`,
  styles: [`
 
  /* modified by jrogers - not using at this time */
  .mui-btn__ripple-container {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 100%;
    width: 100%;
    overflow: hidden;
    z-index: 0;
    pointer-events: none;
  }
  /* modified by jrogers */
  .mui-ripple {
    position: absolute; 
    border-radius: 50%; 
    background-color: rgba(0,0,0,0.3);
    animation: ripple 1s; 
    opacity: 0; 
  }
  
  /* modified by jrogers - Add animation */
  @keyframes ripple { 
      from { 
          opacity: 1; 
          transform: scale(0); 
      } 

      to { 
          opacity: 0; 
          transform: scale(10); 
      } 
  `
  ]
})
export class MuiButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
