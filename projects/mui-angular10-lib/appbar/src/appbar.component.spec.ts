import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiAppbarComponent } from './appbar.component';

describe('AppbarComponent', () => {
  let component: MuiAppbarComponent;
  let fixture: ComponentFixture<MuiAppbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuiAppbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuiAppbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
