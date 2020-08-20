import { Injectable, ViewContainerRef, TemplateRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class MuiOverlayService {


  constructor(private overlay: Overlay) { }

  public openOverlay(content: TemplateRef<any>, viewContainerRef: ViewContainerRef): OverlayRef {
    const overlayRef = this.overlay.create(this.getOverlayConfig());
    overlayRef.attach(new TemplatePortal(content, viewContainerRef));
    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
    return overlayRef;
  }

  private getOverlayConfig(): OverlayConfig {
    let positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    return new OverlayConfig({
      hasBackdrop: true,
      positionStrategy,
      backdropClass: 'mui-overlay',
      panelClass: 'mui-dialog'
    });

  }
}
