import { Component, Injector, Input, ElementRef, QueryList, ContentChildren, ViewChild, AfterViewInit, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { DOWN_ARROW, ENTER, ESCAPE, LEFT_ARROW, RIGHT_ARROW, TAB, UP_ARROW, SPACE } from '@angular/cdk/keycodes';

import {ControlValueAccessorConnector} from 'mui-angular10-lib/directives';
import { MuiOptionComponent } from './option.component';

import { Subscription } from 'rxjs';

@Component({
  selector: 'mui-select',
  template: `
  <div #wrapper class="mui-select"  (keydown) = "onWrapperKeydown($event)" (click)="showOptions($event)">
    <select #select (mousedown)="hideOptions($event)" [formControl]="control" cdkOverlayOrigin #overlayOrigin="cdkOverlayOrigin">
        <option *ngIf="placeholder" value="" placeholder>{{placeholder}}</option>
        <option *ngFor="let option of options" value={{option.value}} [disabled]="option.disabled ? true : null">
            {{option.label}}</option>
    </select>
    <label tabindex="-1">{{label}}</label>
</div>

<ng-template cdkConnectedOverlay [cdkConnectedOverlayOrigin]="overlayOrigin" [cdkConnectedOverlayOpen]="isOpen">
    <div class="mui-select__menu" #menu>
        <div (click)="chooseOption($event, option)"
            [ngClass]="{'mui--is-selected': option.value === control.value ,'mui--is-active' : option.active ,'mui--is-disabled' : option.disabled}"
            *ngFor="let option of options; let i = index">
            <div>{{option.getLabel()}}</div>
        </div>
    </div>
</ng-template>
  `,
  styles: [],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: MuiSelectComponent,
    multi: true
  }]
})
export class MuiSelectComponent extends ControlValueAccessorConnector implements AfterViewInit, OnDestroy, OnInit {

  @Input()
  label: string;

  @Input()
  placeholder: string;

  @Input()
  useDefault?: boolean = false;

  @Input()
  debounceInterval?: number = 200;

  @ViewChild('select', { static: true, read: ElementRef })
  selectTarget: ElementRef;

  @ViewChild('wrapper', { static: true, read: ElementRef })
  wrapperTarget: ElementRef;

  @ContentChildren(MuiOptionComponent)
  options: QueryList<MuiOptionComponent>;

  /* Collects all subscriptions to be destroyed */
  private unsubscribe: Subscription = new Subscription();

  /* flag for showing and hiding menu */
  isOpen: boolean = false;

  private keyManager: ActiveDescendantKeyManager<MuiOptionComponent>;
  private selectedIndex: number;

  constructor(injector: Injector, private renderer: Renderer2) {
    super(injector);
  }

  ngOnInit() {
    if (this.useDefault) {
      this.renderer.setAttribute(this.selectTarget.nativeElement, 'tabindex', '0');
      this.renderer.setAttribute(this.wrapperTarget.nativeElement, 'tabindex', '-1');
    } else {
      this.renderer.setAttribute(this.selectTarget.nativeElement, 'tabindex', '-1');
      this.renderer.setAttribute(this.wrapperTarget.nativeElement, 'tabindex', '0');
    }
  }
  ngAfterViewInit() {
    // set the selected option on the presenter to initialize the menuIndex
    setTimeout(() => {
      this.keyManager = new ActiveDescendantKeyManager(this.options)
        .withHorizontalOrientation('ltr')
        .withVerticalOrientation()
        .withTypeAhead(this.debounceInterval)
        .withWrap();

      this.setIndex();

      const sel = this.keyManager.change.subscribe(selectedIndex => {
        this.selectedIndex = selectedIndex;
      })

      // update subscription
      this.unsubscribe.add(sel);
    });
  }

  ngOnDestroy() {
    // remove subscription
    this.unsubscribe.unsubscribe();
  }

  private setIndex() {
    this.selectedIndex = this.options.toArray().findIndex(option => option.value === this.control.value);
  }

  /* prevents the default dropdown from showing */
  hideOptions(event: MouseEvent) {
    // check flag
    if (event.button !== 0 || this.useDefault) return;

    // prevent built-in menu from opening
    event.preventDefault();
  }

  /* show the options */
  showOptions = function (event: MouseEvent) {
    // only left click, check default prevented and useDefault
    if (event.button !== 0 ||
      event.defaultPrevented ||
      this.useDefault) {

      //need to add this back in: selectEl[0].disabled????
      return;
    } else {
      // open the dropdown
      this.isOpen = true;
      this.selectTarget.nativeElement.focus();
    }
  };

  /* dispatch the selected option */
  chooseOption(event: MouseEvent, option: MuiOptionComponent) {
    // prevent bubbling
    event.stopImmediatePropagation();

    this.selectOption(option);
  }

  private selectOption(option: MuiOptionComponent) {

    // ignore disabled
    if (option.disabled) return;

    // set the selected option value
    this.control.setValue(option.value);

    this.isOpen = !this.isOpen;

    this.setIndex();

    this.selectTarget.nativeElement.focus();
  }


  onWrapperKeydown = function (event: KeyboardEvent) {

    // exit if preventDefault() was called or useDefault is true
    if (event.defaultPrevented || this.useDefault) return;

    var keyCode = event.keyCode;

    this.keyManager.setActiveItem(this.selectedIndex);

    if (!this.isOpen) {
      
      // spacebar, down, up
      if ([SPACE, DOWN_ARROW, UP_ARROW, RIGHT_ARROW, LEFT_ARROW].indexOf(keyCode) > -1) {
        // prevent win scroll
        event.preventDefault();

        // open the dropdown
        this.isOpen = open;
      }

    } else {

      // spacebar | escape | up | down | enter - prevent default dropdown from showing
      if ([SPACE, ESCAPE, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, ENTER].indexOf(keyCode) > -1) {
        event.preventDefault();
      }

      if (keyCode === ESCAPE || keyCode === TAB) {
        this.isOpen = false;
        this.setIndex();
      } else if (keyCode === ENTER || keyCode === SPACE) {
        this.selectOption(this.keyManager.activeItem);
      } else {
        this.keyManager.onKeydown(event);
      }

    }

  };

}
