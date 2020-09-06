import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiPanel } from './panel';

describe('MuiPanel', () => {
  let component: MuiPanel;
  let fixture: ComponentFixture<MuiPanel>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MuiPanel]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuiPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
