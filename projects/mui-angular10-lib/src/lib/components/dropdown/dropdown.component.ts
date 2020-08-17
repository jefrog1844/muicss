import { Component, OnInit, Input, ContentChildren, QueryList, AfterViewInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { MuiDropdownItemComponent } from './dropdown-item.component';
import { ConnectionPositionPair, Overlay } from '@angular/cdk/overlay';
import { Subject, BehaviorSubject, Subscription } from 'rxjs';

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

  <ng-template cdkConnectedOverlay  [cdkConnectedOverlayPositions]="positions"  [cdkConnectedOverlayOrigin]="trigger" [cdkConnectedOverlayOpen]="open$ | async">
    <ul class="mui-dropdown__menu mui--is-open" style="position:'relative';">
      <ng-container *ngFor="let item of items">  
        <ng-container [ngTemplateOutlet]="item.itemTemplate"></ng-container>
      </ng-container>
    </ul>
  </ng-template>
  `,
  styles: []
})
export class MuiDropdownComponent implements OnInit, OnDestroy {

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

  @ContentChildren(MuiDropdownItemComponent)
  items: QueryList<MuiDropdownItemComponent>;

  //this needs to change based on placement
  public positions = [];

  private _open = new BehaviorSubject<boolean>(false);
  open$ = this._open.asObservable();

  private _placement: string = "";
  private _alignment: string = '';
  private unsubscribe: Subscription = new Subscription();

  constructor() { }

  ngOnInit(): void {
    const sub = this._open.subscribe(open => {
      if (open) {
        this.setPositions();
      }
    });
    this.unsubscribe.add(sub);
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
    this._open.next(!this._open.value);
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
}
