import { Component, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'mui-divider',
  template: `<div class="mui-divider"></div>`,
  styles: [`
  .mui-divider {
    display: block;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.12);
  }
  
  .mui--divider-top {
    border-top: 1px solid rgba(0, 0, 0, 0.12);
  }
  
  .mui--divider-bottom {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }
  
  .mui--divider-left {
    border-left: 1px solid rgba(0, 0, 0, 0.12);
  }
  
  .mui--divider-right {
    border-right: 1px solid rgba(0, 0, 0, 0.12);
  }
  `]
})
export class MuiDividerComponent implements OnInit {
  class: string = "mui-divider";

  constructor(private el: ElementRef, private renderer: Renderer2) {
    //this.renderer.addClass(this.el.nativeElement, this.class);
  }

  ngOnInit(): void {
    
  }

}
