import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiRow } from './row';

describe('MuiRow', () => {
  let component: MuiRow;
  let fixture: ComponentFixture<MuiRow>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MuiRow]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuiRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
