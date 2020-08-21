import { Injectable, ViewContainerRef, TemplateRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MuiOverlayService {

  constructor(private overlay: Overlay) { }

  public openOverlay(content: TemplateRef<any>, viewContainerRef: ViewContainerRef): MuiOverlayRef {
    const overlayRef = this.overlay.create(this.getOverlayConfig());
    overlayRef.attach(new TemplatePortal(content, viewContainerRef));
    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
    return new MuiOverlayRef(overlayRef);
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

export class MuiOverlayRef {
  private _afterClosed: Subject<any> = new Subject();
  afterClosed$ = this._afterClosed.asObservable();

  constructor(private overlayRef: OverlayRef) { }

  close(data: any): void {
    this.overlayRef.dispose();
    this._afterClosed.next(data);
  }
}
