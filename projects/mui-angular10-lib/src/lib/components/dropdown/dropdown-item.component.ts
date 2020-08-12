import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'mui-dropdown-item',
  template: `
  <ng-template #templateref>
    <li><a href="{{link}}"><ng-content></ng-content></a></li>
  </ng-template>
  `,
  styles: [
  ]
})
export class MuiDropdownItemComponent {

  @Input()
  link: string;

  @ViewChild('templateref')
  public itemTemplate: TemplateRef<any>

  constructor() {
    
   }

}
