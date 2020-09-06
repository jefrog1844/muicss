import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiButton } from './button';

describe('MuiButton', () => {
  let component: MuiButton;
  let fixture: ComponentFixture<MuiButton>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MuiButton]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuiButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
