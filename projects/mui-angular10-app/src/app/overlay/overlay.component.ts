import { Component} from '@angular/core';
import {  MuiModalService } from 'mui-angular10-lib';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent {
  showDialog: boolean = false;
  constructor(private modalService: MuiModalService) { }

  openModal(modalId: string) {
    this.showDialog = true;
    this.modalService.open(modalId);
  }

  closeModal(modalId: string) {
    this.showDialog = false;
    this.modalService.close(modalId);
  }
}
