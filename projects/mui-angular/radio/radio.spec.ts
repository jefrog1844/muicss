import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiRadio } from './radio';

describe('MuiRadio', () => {
  let component: MuiRadio;
  let fixture: ComponentFixture<MuiRadio>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MuiRadio]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuiRadio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
