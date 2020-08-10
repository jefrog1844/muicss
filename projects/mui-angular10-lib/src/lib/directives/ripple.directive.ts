import { Directive, HostListener, ElementRef } from '@angular/core';
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
    this.playAnimation(this.getFadeOutAnimation(event));
  }

  @HostListener('mouseup', ['$event', '$event.currentTarget']) mouseUp() {
    this.playAnimation(this.getFadeInAnimation());
  }

  constructor(private builder: AnimationBuilder, private el: ElementRef) { }

  private playAnimation(animationMetaData: AnimationMetadata[]): void {
    const animation = this.builder.build(animationMetaData);
    const player = animation.create(this.el.nativeElement);
    player.play();
  }

  private getFadeInAnimation(): AnimationMetadata[] {
    return [
      animate('400ms ease-in', style({ opacity: 0 })),
    ];
  }

  private getFadeOutAnimation(event): AnimationMetadata[] {
    /* Just including this for now in case I need it */
    const btn = this.el.nativeElement;
    var offsetWidth, offsetHeight, offsetTop, offsetLeft, radius, diameter, width, height, left, top;
    offsetWidth = btn.offsetWidth;
    offsetHeight = btn.offsetHeight;
    offsetTop = btn.offsetTop;
    offsetLeft = btn.offsetLeft;
    radius = Math.sqrt(offsetWidth * offsetWidth + offsetHeight * offsetHeight);
    diameter = radius * 2 + 'px';

    width = diameter;
    height = diameter;
    left = Math.round(event.pageX - offsetLeft - radius) + 'px';
    top = Math.round(event.pageY - offsetTop - radius) + 'px';

    /* Just need to convert below to cubic bezier */
    return [animate('10000ms ease-in', style({ opacity: 0.3 }))];
  }



}