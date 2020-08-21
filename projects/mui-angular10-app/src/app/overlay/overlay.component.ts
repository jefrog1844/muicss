import { Component, TemplateRef, ViewContainerRef, AfterViewInit, OnDestroy } from '@angular/core';
import { MuiOverlayService, MuiOverlayRef } from 'mui-angular10-lib';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnDestroy {

  basicForm = new FormGroup({
    inputA: new FormControl(''),
    inputB: new FormControl(''),
    inputC: new FormControl('')
  });

  templateOverlayResponse: string;
  formOverlayResponse: string;
  showDialog = false;
  private _overlayRef: MuiOverlayRef;
  private unsubscribe = new Subscription();
  constructor(private overlayService: MuiOverlayService, private viewContainerRef: ViewContainerRef) { }

  open(content: TemplateRef<any>) {
    this._overlayRef = this.overlayService.openOverlay(content, this.viewContainerRef);

    const sub = this._overlayRef.afterClosed$.subscribe(response => {

      switch (response.key) {
        case 'templateOverlayResponse':
          this.templateOverlayResponse = response.response;
          break;
        case 'formOverlayResponse':
          this.formOverlayResponse = response.response;
          break;
      }
    })
    this.unsubscribe.add(sub);
  }

  closeTemplateOverlay(content: JSON) {
    console.log("content: ", content);
    this._overlayRef.close({ key: 'templateOverlayResponse', response: content });
  }

  closeFormOverlay() {
    this._overlayRef.close(this.basicForm.value);
    this._overlayRef.close({ key: 'formOverlayResponse', response: this.basicForm.value });
    this.basicForm.reset();
  }

  ngOnDestroy(): void {
    this.unsubscribe.unsubscribe();
  }
}
