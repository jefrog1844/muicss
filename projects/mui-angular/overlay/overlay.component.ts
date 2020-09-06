import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'mui-overlay',
  template: `
  <div [@dialog] *ngIf="visible" class="mui-dialog">
	  <ng-content></ng-content>
	  <mui-button *ngIf="closable" (click)="close()" variant="flat" size="small" style="position: absolute;top: 8px;right: 8px;">X</mui-button>
  </div>
  <div *ngIf="visible" class="mui-overlay" (click)="close()"></div>
  `,
  styles: [],
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
export class MuiOverlay implements OnInit {

  @Input() closable?: boolean = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
