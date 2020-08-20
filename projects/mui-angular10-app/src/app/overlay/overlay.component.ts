import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { MuiOverlayService } from 'mui-angular10-lib';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {

  showDialog = false;
  private _overlayRef: OverlayRef;
  constructor(private overlayService: MuiOverlayService, private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

  open(content: TemplateRef<any>) {
    this._overlayRef = this.overlayService.openOverlay(content, this.viewContainerRef);
  }

  close(event: any) {
    this._overlayRef.dispose();
    this._overlayRef = null;
  }
}
