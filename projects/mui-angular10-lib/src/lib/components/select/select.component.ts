import { Component, Injector, Input, ElementRef, QueryList, ContentChildren, ViewChild, AfterViewInit, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { DOWN_ARROW, ENTER, ESCAPE, LEFT_ARROW, RIGHT_ARROW, TAB, UP_ARROW, SPACE } from '@angular/cdk/keycodes';

import { ControlValueAccessorConnector } from '../../directives/control-value-accessor-connector';
import { MuiOptionComponent } from '../option/option.component';

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
  styles: [`
  .mui-select {
    display: block;
    padding-top: 15px;
    margin-bottom: 20px;
    position: relative;
  }
  
  .mui-select:focus {
    outline: 0;
  }
  
  .mui-select:focus > select {
    height: calc(32px + 1px);
    margin-bottom: -1px;
    border-color: #2196F3;
    border-width: 2px;
  }
  
  .mui-select > select {
    display: block;
    height: 32px;
    width: 100%;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.26);
    border-radius: 0px;
    -webkit-box-shadow: none;
    box-shadow: none;
    background-color: transparent;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNiIgd2lkdGg9IjEwIj48cG9seWdvbiBwb2ludHM9IjAsMCAxMCwwIDUsNiIgc3R5bGU9ImZpbGw6cmdiYSgwLDAsMCwuMjQpOyIvPjwvc3ZnPg==");
    background-repeat: no-repeat;
    background-position: right center;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.87);
    font-size: 16px;
    font-family: inherit;
    line-height: inherit;
    padding: 0 25px 0 0;
  }
  
  .mui-select > select::-ms-expand {
    display: none;
  }
  
  .mui-select > select:focus {
    outline: 0;
    height: calc(32px + 1px);
    margin-bottom: -1px;
    border-color: #2196F3;
    border-width: 2px;
  }
  
  .mui-select > select:disabled {
    color: rgba(0, 0, 0, 0.38);
    cursor: not-allowed;
    background-color: transparent;
    opacity: 1;
  }
  
  .mui-select > select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
  
  .mui-select > select:focus::-ms-value {
    background: none;
    color: rgba(0, 0, 0, 0.87);
  }
  
  .mui-select > select.mui--text-placeholder {
    color: rgba(0, 0, 0, 0.26);
  }
  
  .mui-select > label {
    position: absolute;
    top: 0;
    display: block;
    width: 100%;
    color: rgba(0, 0, 0, 0.54);
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .mui-select:focus > label,
  .mui-select > select:focus ~ label {
    color: #2196F3;
  }
  
  .mui-select__menu {
    position: absolute;
    z-index: 2;
    min-width: 100%;
    overflow-y: auto;
    padding: 8px 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #FFF;
    font-size: 16px;
  }
  
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    .mui-select__menu {
      border-left: 1px solid rgba(0, 0, 0, 0.12);
      border-top: 1px solid rgba(0, 0, 0, 0.12);
    }
  }
  
  @supports (-ms-ime-align: auto) {
    .mui-select__menu {
      border-left: 1px solid rgba(0, 0, 0, 0.12);
      border-top: 1px solid rgba(0, 0, 0, 0.12);
    }
  }
  
  .mui-select__menu > div {
    padding: 0 22px;
    height: 42px;
    line-height: 42px;
    cursor: pointer;
    white-space: nowrap;
  }
  
  .mui-select__menu > div.mui--is-selected {
    background-color: #EEEEEE;
  }
  
  .mui-select__menu > div.mui--is-disabled {
    color: rgba(0, 0, 0, 0.38);
    cursor: not-allowed;
  }
  
  .mui-select__menu > div:not(.mui-optgroup__label):not(.mui--is-disabled):hover {
    background-color: #E0E0E0;
  }
  
  .mui-optgroup__option {
    text-indent: 1em;
  }
  
  .mui-optgroup__label {
    color: rgba(0, 0, 0, 0.54);
    font-size: 0.9em;
  }

  .mui-select__menu > div.mui--is-active {
    background-color: #EEEEEE;
  }
  
  `],
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
    if(this.useDefault) {
      this.renderer.setAttribute(this.selectTarget.nativeElement,'tabindex','0');
      this.renderer.setAttribute(this.wrapperTarget.nativeElement,'tabindex','-1');
    } else {
      this.renderer.setAttribute(this.selectTarget.nativeElement,'tabindex','-1');
      this.renderer.setAttribute(this.wrapperTarget.nativeElement,'tabindex','0');
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
      if (keyCode === SPACE || keyCode === DOWN_ARROW || keyCode === UP_ARROW) {
        // prevent win scroll
        event.preventDefault();

        // open the dropdown
        this.isOpen = open;

      }

    } else {

      // spacebar | escape | up | down | enter - prevent default dropdown from showing
      if (keyCode === SPACE
        || keyCode === ESCAPE
        || keyCode === UP_ARROW
        || keyCode === DOWN_ARROW
        || keyCode === LEFT_ARROW
        || keyCode === RIGHT_ARROW
        || keyCode === ENTER) {
        event.preventDefault();
      }

      if (keyCode === ESCAPE || keyCode === TAB) {
        this.isOpen = false;
        this.setIndex();
      } else if (keyCode === ENTER) {
        this.selectOption(this.keyManager.activeItem);
      } else {
        this.keyManager.onKeydown(event);
      }

    }

  };

}
