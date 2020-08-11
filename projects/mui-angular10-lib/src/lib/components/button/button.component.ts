import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'mui-button',
  template: `<button muiRipple class={{class}} (click)='handleClick($event)' [disabled]="disabled">
      <ng-content></ng-content>
      </button>`,
  styles: [`
  .mui-btn {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.87);
    background-color: #FFF;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    display: inline-block;
    height: 36px;
    padding: 0 26px;
    margin: 6px 0;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    background-image: none;
    text-align: center;
    line-height: 36px;
    vertical-align: middle;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 14px;
    font-family: inherit;
    letter-spacing: 0.03em;
    position: relative;
    overflow: hidden;
  }
  
  .mui-btn:hover, .mui-btn:focus, .mui-btn:active {
    color: rgba(0, 0, 0, 0.87);
    background-color: white;
  }
  
  .mui-btn[disabled]:hover, .mui-btn[disabled]:focus, .mui-btn[disabled]:active {
    color: rgba(0, 0, 0, 0.87);
    background-color: #FFF;
  }
  
  .mui-btn.mui-btn--flat {
    color: rgba(0, 0, 0, 0.87);
    background-color: transparent;
  }
  
  .mui-btn.mui-btn--flat:hover, .mui-btn.mui-btn--flat:focus, .mui-btn.mui-btn--flat:active {
    color: rgba(0, 0, 0, 0.87);
    background-color: #f2f2f2;
  }
  
  .mui-btn.mui-btn--flat[disabled]:hover, .mui-btn.mui-btn--flat[disabled]:focus, .mui-btn.mui-btn--flat[disabled]:active {
    color: rgba(0, 0, 0, 0.87);
    background-color: transparent;
  }
  
  .mui-btn:hover, .mui-btn:focus, .mui-btn:active {
    outline: 0;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.87);
  }
  
  .mui-btn:hover, .mui-btn:focus {
    -webkit-box-shadow: 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
  }
  
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    .mui-btn:hover, .mui-btn:focus {
      -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
      box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
    }
  }
  
  @supports (-ms-ime-align: auto) {
    .mui-btn:hover, .mui-btn:focus {
      -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
      box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
    }
  }
  
  .mui-btn:active:hover {
    -webkit-box-shadow: 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
  }
  
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    .mui-btn:active:hover {
      -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
      box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
    }
  }
  
  @supports (-ms-ime-align: auto) {
    .mui-btn:active:hover {
      -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
      box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
    }
  }
  
  .mui-btn:disabled, .mui-btn.mui--is-disabled {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.60;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  
  .mui-btn + .mui-btn {
    margin-left: 8px;
  }
  
  .mui-btn--flat {
    background-color: transparent;
  }
  
  .mui-btn--flat:hover, .mui-btn--flat:focus, .mui-btn--flat:active, .mui-btn--flat:active:hover {
    -webkit-box-shadow: none;
    box-shadow: none;
    background-color: #f2f2f2;
  }
  
  .mui-btn--raised, .mui-btn--fab {
    -webkit-box-shadow: 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
  }
  
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    .mui-btn--raised, .mui-btn--fab {
      -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
      box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
    }
  }
  
  @supports (-ms-ime-align: auto) {
    .mui-btn--raised, .mui-btn--fab {
      -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
      box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
    }
  }
  
  .mui-btn--raised:active, .mui-btn--fab:active {
    -webkit-box-shadow: 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
  }
  
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    .mui-btn--raised:active, .mui-btn--fab:active {
      -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
      box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
    }
  }
  
  @supports (-ms-ime-align: auto) {
    .mui-btn--raised:active, .mui-btn--fab:active {
      -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
      box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
    }
  }
  
  .mui-btn--fab {
    position: relative;
    padding: 0;
    width: 55px;
    height: 55px;
    line-height: 55px;
    border-radius: 50%;
    z-index: 1;
  }
  
  .mui-btn--primary {
    color: #FFF;
    background-color: #2196F3;
  }
  
  .mui-btn--primary:hover, .mui-btn--primary:focus, .mui-btn--primary:active {
    color: #FFF;
    background-color: #39a1f4;
  }
  
  .mui-btn--primary[disabled]:hover, .mui-btn--primary[disabled]:focus, .mui-btn--primary[disabled]:active {
    color: #FFF;
    background-color: #2196F3;
  }
  
  .mui-btn--primary.mui-btn--flat {
    color: #2196F3;
    background-color: transparent;
  }
  
  .mui-btn--primary.mui-btn--flat:hover, .mui-btn--primary.mui-btn--flat:focus, .mui-btn--primary.mui-btn--flat:active {
    color: #2196F3;
    background-color: #f2f2f2;
  }
  
  .mui-btn--primary.mui-btn--flat[disabled]:hover, .mui-btn--primary.mui-btn--flat[disabled]:focus, .mui-btn--primary.mui-btn--flat[disabled]:active {
    color: #2196F3;
    background-color: transparent;
  }
  
  .mui-btn--dark {
    color: #FFF;
    background-color: #424242;
  }
  
  .mui-btn--dark:hover, .mui-btn--dark:focus, .mui-btn--dark:active {
    color: #FFF;
    background-color: #4f4f4f;
  }
  
  .mui-btn--dark[disabled]:hover, .mui-btn--dark[disabled]:focus, .mui-btn--dark[disabled]:active {
    color: #FFF;
    background-color: #424242;
  }
  
  .mui-btn--dark.mui-btn--flat {
    color: #424242;
    background-color: transparent;
  }
  
  .mui-btn--dark.mui-btn--flat:hover, .mui-btn--dark.mui-btn--flat:focus, .mui-btn--dark.mui-btn--flat:active {
    color: #424242;
    background-color: #f2f2f2;
  }
  
  .mui-btn--dark.mui-btn--flat[disabled]:hover, .mui-btn--dark.mui-btn--flat[disabled]:focus, .mui-btn--dark.mui-btn--flat[disabled]:active {
    color: #424242;
    background-color: transparent;
  }
  
  .mui-btn--danger {
    color: #FFF;
    background-color: #F44336;
  }
  
  .mui-btn--danger:hover, .mui-btn--danger:focus, .mui-btn--danger:active {
    color: #FFF;
    background-color: #f55a4e;
  }
  
  .mui-btn--danger[disabled]:hover, .mui-btn--danger[disabled]:focus, .mui-btn--danger[disabled]:active {
    color: #FFF;
    background-color: #F44336;
  }
  
  .mui-btn--danger.mui-btn--flat {
    color: #F44336;
    background-color: transparent;
  }
  
  .mui-btn--danger.mui-btn--flat:hover, .mui-btn--danger.mui-btn--flat:focus, .mui-btn--danger.mui-btn--flat:active {
    color: #F44336;
    background-color: #f2f2f2;
  }
  
  .mui-btn--danger.mui-btn--flat[disabled]:hover, .mui-btn--danger.mui-btn--flat[disabled]:focus, .mui-btn--danger.mui-btn--flat[disabled]:active {
    color: #F44336;
    background-color: transparent;
  }
  
  .mui-btn--accent {
    color: #FFF;
    background-color: #FF4081;
  }
  
  .mui-btn--accent:hover, .mui-btn--accent:focus, .mui-btn--accent:active {
    color: #FFF;
    background-color: #ff5a92;
  }
  
  .mui-btn--accent[disabled]:hover, .mui-btn--accent[disabled]:focus, .mui-btn--accent[disabled]:active {
    color: #FFF;
    background-color: #FF4081;
  }
  
  .mui-btn--accent.mui-btn--flat {
    color: #FF4081;
    background-color: transparent;
  }
  
  .mui-btn--accent.mui-btn--flat:hover, .mui-btn--accent.mui-btn--flat:focus, .mui-btn--accent.mui-btn--flat:active {
    color: #FF4081;
    background-color: #f2f2f2;
  }
  
  .mui-btn--accent.mui-btn--flat[disabled]:hover, .mui-btn--accent.mui-btn--flat[disabled]:focus, .mui-btn--accent.mui-btn--flat[disabled]:active {
    color: #FF4081;
    background-color: transparent;
  }
  
  .mui-btn--small {
    height: 30.6px;
    line-height: 30.6px;
    padding: 0 16px;
    font-size: 13px;
  }
  
  .mui-btn--large {
    height: 54px;
    line-height: 54px;
    padding: 0 26px;
    font-size: 14px;
  }
  
  .mui-btn--fab.mui-btn--small {
    width: 44px;
    height: 44px;
    line-height: 44px;
  }
  
  .mui-btn--fab.mui-btn--large {
    width: 75px;
    height: 75px;
    line-height: 75px;
  }

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
    /* To make it round */
    background-color: rgba(0, 0, 0, 0.3); 
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

      
.mui-ripple.mui--is-animating {
  -webkit-transform: none;
  transform: none;
  -webkit-transition: width 0.3s cubic-bezier(0, 0, 0.2, 1), height 0.3s cubic-bezier(0, 0, 0.2, 1), opacity 0.3s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.3s cubic-bezier(0, 0, 0.2, 1);
  transition: width 0.3s cubic-bezier(0, 0, 0.2, 1), height 0.3s cubic-bezier(0, 0, 0.2, 1), opacity 0.3s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.3s cubic-bezier(0, 0, 0.2, 1);
  transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1), width 0.3s cubic-bezier(0, 0, 0.2, 1), height 0.3s cubic-bezier(0, 0, 0.2, 1), opacity 0.3s cubic-bezier(0, 0, 0.2, 1);
  transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1), width 0.3s cubic-bezier(0, 0, 0.2, 1), height 0.3s cubic-bezier(0, 0, 0.2, 1), opacity 0.3s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.3s cubic-bezier(0, 0, 0.2, 1);
}

.mui-ripple.mui--is-visible {
  opacity: 0.3;
}

.mui-btn .mui-ripple {
  background-color: #a6a6a6;
}

.mui-btn--primary .mui-ripple {
  background-color: #FFF;
}

.mui-btn--dark .mui-ripple {
  background-color: #FFF;
}

.mui-btn--danger .mui-ripple {
  background-color: #FFF;
}

.mui-btn--accent .mui-ripple {
  background-color: #FFF;
}

.mui-btn--flat .mui-ripple {
  background-color: #a6a6a6;
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
