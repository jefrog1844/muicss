import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mui-appbar',
  template: `<div class="mui-appbar"><ng-content></ng-content></div>`,
  styles: [`
  .mui-appbar {
    background-color: #2196F3;
    color: #FFF;
  }
  
   .mui--appbar-height {
      height: 56px;
    }
    
    .mui--appbar-min-height, .mui-appbar {
      min-height: 56px;
    }
    
    .mui--appbar-line-height {
      line-height: 56px;
    }
    
    .mui--appbar-top {
      top: 56px;
    }
    
    @media (orientation: landscape) and (max-height: 480px) {
      .mui--appbar-height {
        height: 48px;
      }
      .mui--appbar-min-height, .mui-appbar {
        min-height: 48px;
      }
      .mui--appbar-line-height {
        line-height: 48px;
      }
      .mui--appbar-top {
        top: 48px;
      }
    }
    
    @media (min-width: 480px) {
      .mui--appbar-height {
        height: 64px;
      }
      .mui--appbar-min-height, .mui-appbar {
        min-height: 64px;
      }
      .mui--appbar-line-height {
        line-height: 64px;
      }
      .mui--appbar-top {
        top: 64px;
      }
    }
  
  `

  ]
})
export class MuiAppbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
