import { Component, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'mui-divider',
  template: `<div class="mui-divider"></div>`,
  styles: []
})
export class MuiDividerComponent implements OnInit {
  class: string = "mui-divider";

  constructor(private el: ElementRef, private renderer: Renderer2) {
    //this.renderer.addClass(this.el.nativeElement, this.class);
  }

  ngOnInit(): void {
    
  }

}
