import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'mui-overlay',
  template: `
  <div [@dialog] *ngIf="visible" class="dialog">
	  <ng-content></ng-content>
	  <mui-button *ngIf="closable" (click)="close()" variant="flat" size="small" style="position: absolute;top: 8px;right: 8px;">X</mui-button>
  </div>
  <div *ngIf="visible" class="overlay" (click)="close()"></div>
  `,
  styles: [
    `
    .overlay {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 999;
      background-color: rgba(0, 0, 0, 0.2);
      overflow: auto;
    }
  
    .dialog {
      z-index: 1000;
      position: fixed;
      right: 0;
      left: 0;
      top: 20px;
      margin-right: auto;
      margin-left: auto;
      min-height: 200px;
      width: 90%;
      max-width: 520px;
      background-color: #fff;
      padding: 12px;
      box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);
    }
    
    @media (min-width: 768px) {
      .dialog {
        top: 40px;
      }
    }
    
    .dialog__close-btn {
      border: 0;
      background: none;
      color: #2d2d2d;
      position: absolute;
      top: 8px;
      right: 8px;
      font-size: 1.2em;
    }
    `],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class MuiOverlayComponent implements OnInit {

  @Input() closable?: boolean = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    console.log("close() method called");
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
