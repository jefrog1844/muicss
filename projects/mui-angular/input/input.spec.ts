import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiInput } from './input';

describe('MuiInput', () => {
  let component: MuiInput;
  let fixture: ComponentFixture<MuiInput>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MuiInput]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuiInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
