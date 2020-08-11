import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';
import {
  AnimationBuilder,
  AnimationMetadata,
  style,
  animate,
} from '@angular/animations';

@Directive({
  selector: '[muiRipple]',
})
export class MuiRippleDirective {

  /**
   * found this at https://indepth.dev/in-depth-guide-into-animations-in-angular/
   * Just need to figure out the animation for ripple
   */


  @HostListener('mousedown', ['$event', '$event.currentTarget']) mouseDown() {
    //this.playAnimation(this.getFadeOutAnimation(event));
    this.getFadeOutAnimation(event)
  }

  @HostListener('mouseup', ['$event', '$event.currentTarget']) mouseUp() {
    //this.playAnimation(this.getFadeInAnimation());
    this.getFadeInAnimation()
  }

  private _btn;
  private _rip;

  constructor(private builder: AnimationBuilder, private el: ElementRef, private renderer: Renderer2) {
    this._btn = this.el.nativeElement;
    this._rip = this.renderer.createElement('span');
    this.renderer.addClass(this._rip, "mui-ripple");
    this.renderer.addClass(this._rip, "ripple");
   }

  private playAnimation(animationMetaData: AnimationMetadata[]): void {
    const animation = this.builder.build(animationMetaData);
    const player = animation.create(this.el.nativeElement);
    player.play();
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

    this.renderer.setStyle(this._rip,'left',left);
    this.renderer.setStyle(this._rip,'top',top);
    this.renderer.setStyle(this._rip,'width',width);
    this.renderer.setStyle(this._rip,'height',height);
    this.renderer.appendChild(this._btn,this._rip);

  }
  
  private getFadeInAnimation() {
    setTimeout(() => {
      this.renderer.removeChild(this._btn,this._rip);
    },300);
  }

}