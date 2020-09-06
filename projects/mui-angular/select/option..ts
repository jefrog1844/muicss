import { Component, Input } from '@angular/core';
import { Highlightable } from '@angular/cdk/a11y';

@Component({
  selector: 'mui-option',
  template: `<option>{{label}}</option>`,
  styles: []
})
export class MuiOption implements Highlightable {
  private _disabled: boolean = false;

  public active = false;

  @Input()
  label: string;

  @Input()
  value: string;

  @Input()
  set disabled(value: boolean) {
    if (value) {
      this._disabled = value;
    }
  }

  get disabled(): boolean {
    return this._disabled;
  }

  @Input()
  hidden: boolean = false;

  constructor() { }

  public setActiveStyles(): void {
    this.active = true;
  }

  public setInactiveStyles(): void {
    this.active = false;
  }

  getLabel(): string {
    return this.label;
  }

}
