import { Component, OnInit, Input, ContentChildren, QueryList, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { MuiDropdownItem } from './dropdown-item';
import { ConnectionPositionPair, CdkConnectedOverlay } from '@angular/cdk/overlay';
import { Subscription } from 'rxjs';
import { ESCAPE } from '@angular/cdk/keycodes';

@Component({
  selector: 'mui-dropdown',
  template: `
  <mui-button variant={{variant}} color={{color}} size={{size}} (click)="showItems($event)" cdkOverlayOrigin #trigger="cdkOverlayOrigin">
    <ng-container *ngIf="placement === 'left' else default">
      <mui-caret direction={{placement}}></mui-caret>&nbsp;{{label}}
    </ng-container>
  </mui-button>

  <ng-template #default>
    {{label}}&nbsp;<mui-caret direction={{placement}}></mui-caret>
  </ng-template>

  <ng-template cdkConnectedOverlay  [cdkConnectedOverlayPositions]="positions"   [cdkConnectedOverlayOrigin]="trigger" [cdkConnectedOverlayOpen]="isOpen">
    <ul class="mui-dropdown__menu mui--is-open" style="position:'relative';">
      <ng-container *ngFor="let item of items">  
        <ng-container [ngTemplateOutlet]="item.itemTemplate"></ng-container>
      </ng-container>
    </ul>
  </ng-template>
  `,
  styles: []
})
export class MuiDropdown implements OnDestroy, AfterViewInit {

  @Input()
  variant?: string;

  @Input()
  label: string;

  @Input()
  color?: string;

  @Input()
  size?: string

  @Input()
  set placement(placement: string) {
    if (placement) {
      this._placement = placement;
    }
  }

  get placement(): string {
    return this._placement;
  }

  @Input()
  set alignment(alignment: string) {
    if (alignment) {
      this._alignment = alignment;
    }
  }

  @ContentChildren(MuiDropdownItem)
  items: QueryList<MuiDropdownItem>;

  @ViewChild(CdkConnectedOverlay, { static: false }) _overlay: CdkConnectedOverlay;

  //this needs to change based on placement
  public positions = [];

  isOpen: boolean = false;

  private _placement: string = "";
  private _alignment: string = '';
  private unsubscribe: Subscription = new Subscription();

  constructor() { }

  ngAfterViewInit() {
    const out = this._overlay.overlayOutsideClick.subscribe(event => {
      this.showItems(event);
    });

    const key = this._overlay.overlayKeydown.subscribe(event => {
      if (event.keyCode === ESCAPE) {
        this.close();
      }
    });

    this.unsubscribe.add(out);
    this.unsubscribe.add(key);
    this.close();
  }

  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
  }

  /* show the options */
  showItems = function (event: MouseEvent) {

    if (this.disabled) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();

    // open the dropdown
    if (!this.isOpen) {
      this.setPositions();
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
  };

  private setPositions() {
    //using offset to adjust from css padding, margin,etc
    var origX, overX, origY, overY, offX, offY;

    switch (this._placement) {
      case 'up':
        origX = 'start';
        overX = 'start';
        origY = 'top';
        overY = 'bottom';
        offX = 0;
        offY = -12;
        break;
      case 'right':
        origX = 'end';
        overX = 'start';
        origY = 'top';
        overY = 'top';
        offX = 2;
        offY = -12;
        break;
      case 'left':
        origX = 'start';
        overX = 'end';
        origY = 'top';
        overY = 'top';
        offX = -4;
        offY = -12;
        break;
      default:
        origX = 'start';
        overX = 'start';
        origY = 'bottom';
        overY = 'top';
        offX = 0;
        offY = 12;
    }

    switch (this._alignment) {
      case 'bottom':
        origY = 'bottom';
        overY = 'bottom';
        offY = 12;
        break;
      case 'right':
        origX = 'end';
        overX = 'end';
        break;
    }

    this.positions = [
      new ConnectionPositionPair(
        { originX: origX, originY: origY },
        { overlayX: overX, overlayY: overY },
        offX, offY)
    ];
  }

  private close() {
    this.isOpen = false;
  }
}
