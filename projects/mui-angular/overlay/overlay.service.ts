import { Injectable, ViewContainerRef, TemplateRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Subject } from 'rxjs';

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
      .top("0px");

    return new OverlayConfig({
      hasBackdrop: true,
      positionStrategy,
      backdropClass: 'mui-modal-overlay',
      panelClass: 'mui-modal-dialog'
    });

  }
}

