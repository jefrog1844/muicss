import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { MuiOverlayService } from 'mui-angular10-lib';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {

  showDialog = false;
  constructor(private overlayService: MuiOverlayService, private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

  open(content: TemplateRef<any>) {
    const ref = this.overlayService.openOverlay(content, this.viewContainerRef);
    //ref.afterClosed....
  }

  close(event: any) {
    
  }
}
