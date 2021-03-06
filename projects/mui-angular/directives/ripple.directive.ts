import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[muiRipple]',
})
export class MuiRippleDirective {

  @HostListener('mousedown', ['$event', '$event.currentTarget'])
  mouseDown(event: MouseEvent) {
    if(event.button === 0){
      this.getFadeOutAnimation(event);
    }
  }

  @HostListener('mouseup', ['$event', '$event.currentTarget']) mouseUp() {
    this.getFadeInAnimation()
  }

  private _btn;
  private _rip;
  private _cont;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this._btn = this.el.nativeElement;
  }

  ngAfterViewInit() {
    this._cont = this._btn.querySelector('.mui-btn__ripple-container');
    this._rip = this._btn.querySelector('.mui-ripple');
  }

  private getFadeOutAnimation(event) {
    var offsetWidth, offsetHeight, offsetTop, offsetLeft, radius, diameter, width, height, left, top;
    offsetWidth = this._btn.offsetWidth;
    offsetHeight = this._btn.offsetHeight;
    offsetTop = this._btn.offsetTop;
    offsetLeft = this._btn.offsetLeft;
    radius = Math.sqrt(offsetWidth * offsetWidth + offsetHeight * offsetHeight);
    diameter = radius * 2 + 'px';

    width = diameter;
    height = diameter;
    left = Math.round(event.pageX - offsetLeft - radius) + 'px';
    top = Math.round(event.pageY - offsetTop - radius) + 'px';

    this.renderer.setStyle(this._rip, 'left', left);
    this.renderer.setStyle(this._rip, 'top', top);
    this.renderer.setStyle(this._rip, 'width', width);
    this.renderer.setStyle(this._rip, 'height', height);

    this.renderer.removeClass(this._rip,'mui--is-animating');
    this.renderer.addClass(this._rip, 'mui--is-visible');
    window.requestAnimationFrame(() =>this.renderer.addClass(this._rip,'mui--is-animating') );
   
  }

  private getFadeInAnimation() {
    window.requestAnimationFrame(() =>this.renderer.removeClass(this._rip,'mui--is-visible') );
  }

}