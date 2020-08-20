import { Injectable, ViewContainerRef, TemplateRef } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class MuiOverlayService {

  constructor(private overlay: Overlay) { }

  public openOverlay(content: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const configs = new OverlayConfig({
      hasBackdrop: true,
      positionStrategy
     });

     

     const overlayRef = this.overlay.create(configs);
     this.overlay.position().global().centerHorizontally().centerVertically();

     overlayRef.attach(new TemplatePortal(content, viewContainerRef));
     overlayRef.backdropClick().subscribe(() => overlayRef.dispose());

  }
}
