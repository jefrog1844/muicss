import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiDivider } from './divider';

describe('MuiDivider', () => {
  let component: MuiDivider;
  let fixture: ComponentFixture<MuiDivider>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MuiDivider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuiDivider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
