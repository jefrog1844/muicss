import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, ViewChild, ElementRef, Renderer2, HostListener, AfterViewInit } from '@angular/core';
import { trigger, style, animate, transition, animation } from '@angular/animations'
import { MuiModalService } from './modal.service';

@Component({
  selector: 'mui-modal',
  template: `
  <div [@dialog] *ngIf="visible" class="mui-modal-dialog">
    <ng-content></ng-content>
    <mui-button *ngIf="blocking || closable" (click)="close()" variant="flat" size="small" style="position: absolute;top: 8px;right: 8px;">X</mui-button>
  </div>
  <div *ngIf="visible" class="mui-modal-overlay" (click)="backdropClick()">
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
export class MuiModalComponent implements OnInit, OnDestroy {

  @Input() closable?: boolean = false;
  @Input() visible?: boolean = false;
  @Input() id: string;
  @Input() blocking?: boolean = false;

  @Output() backDropClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor(private modalService: MuiModalService) {
  }

  ngOnInit(): void {
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }
    this.modalService.register(this);
  }

  ngOnDestroy(): void {
    this.modalService.unregister(this);
  }

  open() {
    this.modalService.open(this.id);
  }

  close() {
    this.modalService.close(this.id);
  }

  backdropClick(): void {
    if(this.blocking === true) {
      return;
    } else {
      this.close();
    }    
  }

}
