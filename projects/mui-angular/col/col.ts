import { Component, Input } from '@angular/core';

@Component({
  selector: 'mui-col',
  template: `<div class={{class}}><ng-content></ng-content></div>`,
  styles: []
})
export class MuiCol {
  class: string = "";

  @Input()
  set xs(xs: string) {
    if (xs) {
      this.class = this.class + " mui-col-xs-" + xs;
    }
  }

  @Input()
  set sm(sm: string) {
    if (sm) {
      this.class = this.class + " mui-col-sm-" + sm;
    }
  }

  @Input()
  set md(md: string) {
    if (md) {
      this.class = this.class + " mui-col-md-" + md;
    }
  }

  @Input()
  set lg(lg: string) {
    if (lg) {
      this.class = this.class + " mui-col-lg-" + lg;
    }
  }

  @Input()
  set xl(xl: string) {
    if (xl) {
      this.class = this.class + " mui-col-xl-" + xl;
    }
  }

  @Input('xs-offset')
  set xsoffset(xsoffset: string) {
    if (xsoffset) {
      this.class = this.class + " mui-col-xs-offset-" + xsoffset;
    }
  }

  @Input('sm-offset')
  set smoffset(smoffset: string) {
    if (smoffset) {
      this.class = this.class + " mui-col-sm-offset-" + smoffset;
    }
  }

  @Input('md-offset')
  set mdoffset(mdoffset: string) {
    if (mdoffset) {
      this.class = this.class + " mui-col-md-offset-" + mdoffset;
    }
  }

  @Input('lg-offset')
  set lgoffset(lgoffset: string) {
    if (lgoffset) {
      this.class = this.class + " mui-col-lg-offset-" + lgoffset;
    }
  }

  @Input('xl-offset')
  set xloffset(xloffset: string) {
    if (xloffset) {
      this.class = this.class + " mui-col-xl-offset-" + xloffset;
    }
  }
  constructor() { }

}
