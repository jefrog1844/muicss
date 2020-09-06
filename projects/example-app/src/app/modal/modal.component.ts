import { Component, ViewContainerRef, TemplateRef} from '@angular/core';
import {  MuiModalService } from 'mui-angular/modal';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import {MuiOverlayService} from 'mui-angular/overlay';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: []
})
export class ModalComponent {

  private _overlayRef: OverlayRef;
  constructor(private modalService: MuiModalService,private overlayService: MuiOverlayService, private viewContainerRef: ViewContainerRef) { }

  openModal(modalId: string) {
    this.modalService.open(modalId);
  }

  closeModal(modalId: string) {
    this.modalService.close(modalId);
  }

  open(content: TemplateRef<any>) {
    this._overlayRef = this.overlayService.openOverlay(content, this.viewContainerRef);
  }

  close(event: any) {
    console.log("event: ",event);
    this._overlayRef.dispose();
    this._overlayRef = null;
  }
}
