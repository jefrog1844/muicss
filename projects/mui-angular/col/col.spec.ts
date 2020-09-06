import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiCol } from './col';

describe('MuiCol', () => {
  let component: MuiCol;
  let fixture: ComponentFixture<MuiCol>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MuiCol]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuiCol);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
