import { Injectable } from '@angular/core';
import { MuiModalComponent } from './modal.component';

@Injectable({
  providedIn: 'root'
})
export class MuiModalService {

  private _modals: Array<MuiModalComponent>;

  constructor() {
    this._modals = [];
  }

  register(modal: MuiModalComponent) {
    this.removeModal(modal);
    this._modals.push(modal);
  }

  unregister(modal: MuiModalComponent) {
    this.removeModal(modal);
  }

  close(modalId: string) {
    const modal = this.findModal(modalId);
    if (modal) {
      setTimeout(() => {
        modal.visible = false;
      }, 250);
    }
  }

  open(modalId: string) {
    const modal = this.findModal(modalId);
    if (modal) {
      setTimeout(() => {
        modal.visible = true;
      }, 250);
    }
  }

  private findModal(modalId: string): MuiModalComponent {
    return this._modals.find(modal => modal.id === modalId);
  }

  private removeModal(modal: MuiModalComponent) {
    const remove = this.findModal(modal.id);
    if (remove) {
      this._modals.splice(this._modals.indexOf(remove), 1);
    }
  }
}
