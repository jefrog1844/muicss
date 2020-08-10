import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mui-col',
  template: `<div class={{class}}><ng-content></ng-content></div>`,
  styles: [`
  
.mui-col-xs-1, .mui-col-sm-1, .mui-col-md-1, .mui-col-lg-1, .mui-col-xs-2, .mui-col-sm-2, .mui-col-md-2, .mui-col-lg-2, .mui-col-xs-3, .mui-col-sm-3, .mui-col-md-3, .mui-col-lg-3, .mui-col-xs-4, .mui-col-sm-4, .mui-col-md-4, .mui-col-lg-4, .mui-col-xs-5, .mui-col-sm-5, .mui-col-md-5, .mui-col-lg-5, .mui-col-xs-6, .mui-col-sm-6, .mui-col-md-6, .mui-col-lg-6, .mui-col-xs-7, .mui-col-sm-7, .mui-col-md-7, .mui-col-lg-7, .mui-col-xs-8, .mui-col-sm-8, .mui-col-md-8, .mui-col-lg-8, .mui-col-xs-9, .mui-col-sm-9, .mui-col-md-9, .mui-col-lg-9, .mui-col-xs-10, .mui-col-sm-10, .mui-col-md-10, .mui-col-lg-10, .mui-col-xs-11, .mui-col-sm-11, .mui-col-md-11, .mui-col-lg-11, .mui-col-xs-12, .mui-col-sm-12, .mui-col-md-12, .mui-col-lg-12 {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
}

.mui-col-xs-1, .mui-col-xs-2, .mui-col-xs-3, .mui-col-xs-4, .mui-col-xs-5, .mui-col-xs-6, .mui-col-xs-7, .mui-col-xs-8, .mui-col-xs-9, .mui-col-xs-10, .mui-col-xs-11, .mui-col-xs-12 {
  float: left;
}

.mui-col-xs-1 {
  width: 8.33333%;
}

.mui-col-xs-2 {
  width: 16.66667%;
}

.mui-col-xs-3 {
  width: 25%;
}

.mui-col-xs-4 {
  width: 33.33333%;
}

.mui-col-xs-5 {
  width: 41.66667%;
}

.mui-col-xs-6 {
  width: 50%;
}

.mui-col-xs-7 {
  width: 58.33333%;
}

.mui-col-xs-8 {
  width: 66.66667%;
}

.mui-col-xs-9 {
  width: 75%;
}

.mui-col-xs-10 {
  width: 83.33333%;
}

.mui-col-xs-11 {
  width: 91.66667%;
}

.mui-col-xs-12 {
  width: 100%;
}

.mui-col-xs-offset-0 {
  margin-left: 0%;
}

.mui-col-xs-offset-1 {
  margin-left: 8.33333%;
}

.mui-col-xs-offset-2 {
  margin-left: 16.66667%;
}

.mui-col-xs-offset-3 {
  margin-left: 25%;
}

.mui-col-xs-offset-4 {
  margin-left: 33.33333%;
}

.mui-col-xs-offset-5 {
  margin-left: 41.66667%;
}

.mui-col-xs-offset-6 {
  margin-left: 50%;
}

.mui-col-xs-offset-7 {
  margin-left: 58.33333%;
}

.mui-col-xs-offset-8 {
  margin-left: 66.66667%;
}

.mui-col-xs-offset-9 {
  margin-left: 75%;
}

.mui-col-xs-offset-10 {
  margin-left: 83.33333%;
}

.mui-col-xs-offset-11 {
  margin-left: 91.66667%;
}

.mui-col-xs-offset-12 {
  margin-left: 100%;
}

@media (min-width: 544px) {
  .mui-col-sm-1, .mui-col-sm-2, .mui-col-sm-3, .mui-col-sm-4, .mui-col-sm-5, .mui-col-sm-6, .mui-col-sm-7, .mui-col-sm-8, .mui-col-sm-9, .mui-col-sm-10, .mui-col-sm-11, .mui-col-sm-12 {
    float: left;
  }
  .mui-col-sm-1 {
    width: 8.33333%;
  }
  .mui-col-sm-2 {
    width: 16.66667%;
  }
  .mui-col-sm-3 {
    width: 25%;
  }
  .mui-col-sm-4 {
    width: 33.33333%;
  }
  .mui-col-sm-5 {
    width: 41.66667%;
  }
  .mui-col-sm-6 {
    width: 50%;
  }
  .mui-col-sm-7 {
    width: 58.33333%;
  }
  .mui-col-sm-8 {
    width: 66.66667%;
  }
  .mui-col-sm-9 {
    width: 75%;
  }
  .mui-col-sm-10 {
    width: 83.33333%;
  }
  .mui-col-sm-11 {
    width: 91.66667%;
  }
  .mui-col-sm-12 {
    width: 100%;
  }
  .mui-col-sm-offset-0 {
    margin-left: 0%;
  }
  .mui-col-sm-offset-1 {
    margin-left: 8.33333%;
  }
  .mui-col-sm-offset-2 {
    margin-left: 16.66667%;
  }
  .mui-col-sm-offset-3 {
    margin-left: 25%;
  }
  .mui-col-sm-offset-4 {
    margin-left: 33.33333%;
  }
  .mui-col-sm-offset-5 {
    margin-left: 41.66667%;
  }
  .mui-col-sm-offset-6 {
    margin-left: 50%;
  }
  .mui-col-sm-offset-7 {
    margin-left: 58.33333%;
  }
  .mui-col-sm-offset-8 {
    margin-left: 66.66667%;
  }
  .mui-col-sm-offset-9 {
    margin-left: 75%;
  }
  .mui-col-sm-offset-10 {
    margin-left: 83.33333%;
  }
  .mui-col-sm-offset-11 {
    margin-left: 91.66667%;
  }
  .mui-col-sm-offset-12 {
    margin-left: 100%;
  }
}

@media (min-width: 768px) {
  .mui-col-md-1, .mui-col-md-2, .mui-col-md-3, .mui-col-md-4, .mui-col-md-5, .mui-col-md-6, .mui-col-md-7, .mui-col-md-8, .mui-col-md-9, .mui-col-md-10, .mui-col-md-11, .mui-col-md-12 {
    float: left;
  }
  .mui-col-md-1 {
    width: 8.33333%;
  }
  .mui-col-md-2 {
    width: 16.66667%;
  }
  .mui-col-md-3 {
    width: 25%;
  }
  .mui-col-md-4 {
    width: 33.33333%;
  }
  .mui-col-md-5 {
    width: 41.66667%;
  }
  .mui-col-md-6 {
    width: 50%;
  }
  .mui-col-md-7 {
    width: 58.33333%;
  }
  .mui-col-md-8 {
    width: 66.66667%;
  }
  .mui-col-md-9 {
    width: 75%;
  }
  .mui-col-md-10 {
    width: 83.33333%;
  }
  .mui-col-md-11 {
    width: 91.66667%;
  }
  .mui-col-md-12 {
    width: 100%;
  }
  .mui-col-md-offset-0 {
    margin-left: 0%;
  }
  .mui-col-md-offset-1 {
    margin-left: 8.33333%;
  }
  .mui-col-md-offset-2 {
    margin-left: 16.66667%;
  }
  .mui-col-md-offset-3 {
    margin-left: 25%;
  }
  .mui-col-md-offset-4 {
    margin-left: 33.33333%;
  }
  .mui-col-md-offset-5 {
    margin-left: 41.66667%;
  }
  .mui-col-md-offset-6 {
    margin-left: 50%;
  }
  .mui-col-md-offset-7 {
    margin-left: 58.33333%;
  }
  .mui-col-md-offset-8 {
    margin-left: 66.66667%;
  }
  .mui-col-md-offset-9 {
    margin-left: 75%;
  }
  .mui-col-md-offset-10 {
    margin-left: 83.33333%;
  }
  .mui-col-md-offset-11 {
    margin-left: 91.66667%;
  }
  .mui-col-md-offset-12 {
    margin-left: 100%;
  }
}

@media (min-width: 992px) {
  .mui-col-lg-1, .mui-col-lg-2, .mui-col-lg-3, .mui-col-lg-4, .mui-col-lg-5, .mui-col-lg-6, .mui-col-lg-7, .mui-col-lg-8, .mui-col-lg-9, .mui-col-lg-10, .mui-col-lg-11, .mui-col-lg-12 {
    float: left;
  }
  .mui-col-lg-1 {
    width: 8.33333%;
  }
  .mui-col-lg-2 {
    width: 16.66667%;
  }
  .mui-col-lg-3 {
    width: 25%;
  }
  .mui-col-lg-4 {
    width: 33.33333%;
  }
  .mui-col-lg-5 {
    width: 41.66667%;
  }
  .mui-col-lg-6 {
    width: 50%;
  }
  .mui-col-lg-7 {
    width: 58.33333%;
  }
  .mui-col-lg-8 {
    width: 66.66667%;
  }
  .mui-col-lg-9 {
    width: 75%;
  }
  .mui-col-lg-10 {
    width: 83.33333%;
  }
  .mui-col-lg-11 {
    width: 91.66667%;
  }
  .mui-col-lg-12 {
    width: 100%;
  }
  .mui-col-lg-offset-0 {
    margin-left: 0%;
  }
  .mui-col-lg-offset-1 {
    margin-left: 8.33333%;
  }
  .mui-col-lg-offset-2 {
    margin-left: 16.66667%;
  }
  .mui-col-lg-offset-3 {
    margin-left: 25%;
  }
  .mui-col-lg-offset-4 {
    margin-left: 33.33333%;
  }
  .mui-col-lg-offset-5 {
    margin-left: 41.66667%;
  }
  .mui-col-lg-offset-6 {
    margin-left: 50%;
  }
  .mui-col-lg-offset-7 {
    margin-left: 58.33333%;
  }
  .mui-col-lg-offset-8 {
    margin-left: 66.66667%;
  }
  .mui-col-lg-offset-9 {
    margin-left: 75%;
  }
  .mui-col-lg-offset-10 {
    margin-left: 83.33333%;
  }
  .mui-col-lg-offset-11 {
    margin-left: 91.66667%;
  }
  .mui-col-lg-offset-12 {
    margin-left: 100%;
  }
}

@media (min-width: 1200px) {
  .mui-col-xl-1, .mui-col-xl-2, .mui-col-xl-3, .mui-col-xl-4, .mui-col-xl-5, .mui-col-xl-6, .mui-col-xl-7, .mui-col-xl-8, .mui-col-xl-9, .mui-col-xl-10, .mui-col-xl-11, .mui-col-xl-12 {
    float: left;
  }
  .mui-col-xl-1 {
    width: 8.33333%;
  }
  .mui-col-xl-2 {
    width: 16.66667%;
  }
  .mui-col-xl-3 {
    width: 25%;
  }
  .mui-col-xl-4 {
    width: 33.33333%;
  }
  .mui-col-xl-5 {
    width: 41.66667%;
  }
  .mui-col-xl-6 {
    width: 50%;
  }
  .mui-col-xl-7 {
    width: 58.33333%;
  }
  .mui-col-xl-8 {
    width: 66.66667%;
  }
  .mui-col-xl-9 {
    width: 75%;
  }
  .mui-col-xl-10 {
    width: 83.33333%;
  }
  .mui-col-xl-11 {
    width: 91.66667%;
  }
  .mui-col-xl-12 {
    width: 100%;
  }
  .mui-col-xl-offset-0 {
    margin-left: 0%;
  }
  .mui-col-xl-offset-1 {
    margin-left: 8.33333%;
  }
  .mui-col-xl-offset-2 {
    margin-left: 16.66667%;
  }
  .mui-col-xl-offset-3 {
    margin-left: 25%;
  }
  .mui-col-xl-offset-4 {
    margin-left: 33.33333%;
  }
  .mui-col-xl-offset-5 {
    margin-left: 41.66667%;
  }
  .mui-col-xl-offset-6 {
    margin-left: 50%;
  }
  .mui-col-xl-offset-7 {
    margin-left: 58.33333%;
  }
  .mui-col-xl-offset-8 {
    margin-left: 66.66667%;
  }
  .mui-col-xl-offset-9 {
    margin-left: 75%;
  }
  .mui-col-xl-offset-10 {
    margin-left: 83.33333%;
  }
  .mui-col-xl-offset-11 {
    margin-left: 91.66667%;
  }
  .mui-col-xl-offset-12 {
    margin-left: 100%;
  }
}
  `]
})
export class MuiColComponent implements OnInit {
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

  ngOnInit(): void {
  }

}
