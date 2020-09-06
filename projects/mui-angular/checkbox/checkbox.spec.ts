import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiCheckbox } from './checkbox';

describe('MuiCheckbox', () => {
  let component: MuiCheckbox;
  let fixture: ComponentFixture<MuiCheckbox>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MuiCheckbox]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuiCheckbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
