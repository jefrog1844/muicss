import { Component} from '@angular/core';
import {  MuiModalService } from 'mui-angular10-lib';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent {

  constructor(private modalService: MuiModalService) { }

  openModal(modalId: string) {
    this.modalService.open(modalId);
  }

  closeModal(modalId: string) {
    this.modalService.close(modalId);
  }
}
