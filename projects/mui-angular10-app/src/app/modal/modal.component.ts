import { Component} from '@angular/core';
import {  MuiModalService } from 'mui-angular10-lib';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: []
})
export class ModalComponent {

  constructor(private modalService: MuiModalService) { }

  openModal(modalId: string) {
    this.modalService.open(modalId);
  }

  closeModal(modalId: string) {
    this.modalService.close(modalId);
  }
}
