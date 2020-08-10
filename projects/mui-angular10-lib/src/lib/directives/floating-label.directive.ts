import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[muiFloatingLabel]'
})
export class MuiFloatingLabelDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    
  }

  ngAfterViewInit() {
    let div = this.el.nativeElement.querySelector('div');
    let label = this.el.nativeElement.querySelector('label');
    
    this.renderer.addClass(div,'mui-textfield--float-label');
    this.renderer.setStyle(label,'transition','.15s ease-in-out');
    this.renderer.setStyle(label,'-webkit-transition','.15s ease-out');
    this.renderer.setStyle(label,'-moz-transition','.15s ease-out');
    this.renderer.setStyle(label,'-o-transition','.15s ease-out');
    this.renderer.setStyle(label,'-ms-transition','.15s ease-out');
    
  }
}
