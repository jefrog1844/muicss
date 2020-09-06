import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiCaret } from './caret';

describe('MuiCaret', () => {
  let component: MuiCaret;
  let fixture: ComponentFixture<MuiCaret>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MuiCaret]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuiCaret);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
