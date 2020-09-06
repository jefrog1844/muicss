import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiSelect } from './select';

describe('SelectComponent', () => {
  let component: MuiSelect;
  let fixture: ComponentFixture<MuiSelect>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MuiSelect]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuiSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
