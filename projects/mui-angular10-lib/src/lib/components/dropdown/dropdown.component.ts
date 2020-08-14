import { Component, OnInit, Input, ContentChildren, QueryList, AfterViewInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { MuiDropdownItemComponent } from './dropdown-item.component';
import { ConnectionPositionPair, Overlay } from '@angular/cdk/overlay';
import { Subject, BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'mui-dropdown',
  template: `
  <div class={{dropdownClass}}>
      <mui-button variant={{variant}} color={{color}} size={{size}} (click)="showItems($event)" cdkOverlayOrigin #trigger="cdkOverlayOrigin">
        <ng-container *ngIf="placement === 'left' else default">
          <mui-caret direction={{placement}}></mui-caret>&nbsp;{{label}}
        </ng-container>
      </mui-button>
  </div>

  <ng-template #default>
    {{label}}&nbsp;<mui-caret direction={{placement}}></mui-caret>
  </ng-template>

  <ng-template cdkConnectedOverlay [cdkConnectedOverlayPanelClass]="menuClass" [cdkConnectedOverlayPositions]="positions"  [cdkConnectedOverlayOrigin]="trigger" [cdkConnectedOverlayOpen]="open$ | async">
    <ul>
      <ng-container *ngFor="let item of items">
          <ng-container [ngTemplateOutlet]="item.itemTemplate"></ng-container>
      </ng-container>
    </ul>
  </ng-template>
  `,
  styles: []
})
export class MuiDropdownComponent implements OnInit, OnDestroy, AfterViewInit {
  dropdownClass: string = "mui-dropdown";
  menuClass: string[] = ["mui-dropdown__menu", "mui--is-open"];

  @Input()
  set variant(variant: string) {
    if (variant) {

    }
  }

  @Input()
  label: string;

  @Input()
  color: string;

  @Input()
  size: string

  @Input()
  set placement(placement: string) {
    if (placement) {
      this._placement = placement;
    }
    //this.dropdownClass = this.dropdownClass + " mui-dropdown--" + placement;
  }

  get placement(): string {
    return this._placement;
  }

  @Input()
  set alignment(alignment: string) {
    if (alignment) {
      this._alignment = alignment;
    }
    //this.menuClass = this.menuClass + " mui-dropdown__menu--" + alignment;
  }

  @ContentChildren(MuiDropdownItemComponent)
  items: QueryList<MuiDropdownItemComponent>;



  private _drop;

  //this needs to change based on placement
  public positions = [];

  private _open = new BehaviorSubject<boolean>(false);
  open$ = this._open.asObservable();

  private _placement: string = "down";
  private _alignment: string = 'left';
  private unsubscribe: Subscription = new Subscription();


  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const sub = this._open.subscribe(open => {
      if (open) {
        this.setPositions();
      }
    });
    this.unsubscribe.add(sub);
  }

  ngAfterViewInit() {
    this._drop = this.el.nativeElement;

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
    //need to switch on placement to set position correctly
    var origX, overX, origY, overY,offX,offY;
    switch (this._placement) {
      case 'up':
        origX = 'start';
        overX = 'start';
        origY = 'top';
        overY = 'bottom';
        offX = 0;
        offY =-12;
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
        {originX: origX, originY: origY},
        {overlayX: overX, overlayY: overY},
        offX, offY)
    ];
  }
}
