import { Component, OnInit, Input, ContentChildren, QueryList, AfterViewInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { MuiDropdownItemComponent } from './dropdown-item.component';
import { ConnectionPositionPair, Overlay } from '@angular/cdk/overlay';
import { Subject, BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'mui-dropdown',
  template: `
  <div class="mui-dropdown">
      <mui-button variant={{variant}} color={{color}} size={{size}} (click)="showItems($event)" cdkOverlayOrigin #trigger="cdkOverlayOrigin">
        <ng-container *ngIf="placement === 'left' else default">
          <mui-caret direction={{placement}}></mui-caret>&nbsp;{{label}}
        </ng-container>
      </mui-button>
  </div>

  <ng-template #default>
    {{label}}&nbsp;<mui-caret direction={{placement}}></mui-caret>
  </ng-template>

  <ng-template cdkConnectedOverlay [cdkConnectedOverlayPanelClass]="panelClass" [cdkConnectedOverlayPositions]="positions"  [cdkConnectedOverlayOrigin]="trigger" [cdkConnectedOverlayOpen]="open$ | async">
    <ul >
      <ng-container *ngFor="let item of items">
          <ng-container [ngTemplateOutlet]="item.itemTemplate"></ng-container>
      </ng-container>
    </ul>
  </ng-template>
  `,
  styles: []
})
export class MuiDropdownComponent implements OnInit, OnDestroy, AfterViewInit {
  panelClass: string = "mui-dropdown__menu";
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
    this.class = this.class + " mui-dropdown--" + placement;
  }

  get placement(): string {
    return this._placement;
  }

  @Input()
  set alignment(alignment: string) {
    if (alignment) {
      this.class = this.class + " mui-dropdown__menu--" + alignment;
    }
  }

  @ContentChildren(MuiDropdownItemComponent)
  items: QueryList<MuiDropdownItemComponent>;

  class: string = "mui-dropdown";

  isOpen: boolean = false;
  private _drop;

  //this needs to change based on placement
  public positions = [];

  private _open = new BehaviorSubject<boolean>(false);
  open$ = this._open.asObservable();

  private _placement: string = "right";
  private unsubscribe: Subscription = new Subscription();


  constructor(private el: ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
    const sub = this._open.subscribe(open => {
      if(open) {
        this.setPositions();
      }
    })
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
    //this.isOpen = !this.isOpen;
    this._open.next(!this._open.value);
    console.log("isOpen: ", this._open.value);
  };

  private setPositions() {
    //need to switch on placement to set position correctly
    this.positions = [
      new ConnectionPositionPair({
        originX: 'end',
        originY: 'top'
      }, {
        overlayX: 'end',
        overlayY: 'bottom'
      })
    ];
  }
}
