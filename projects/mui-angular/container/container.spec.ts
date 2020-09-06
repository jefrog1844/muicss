import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiContainer } from './container';

describe('MuiContainer', () => {
  let component: MuiContainer;
  let fixture: ComponentFixture<MuiContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MuiContainer]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuiContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
