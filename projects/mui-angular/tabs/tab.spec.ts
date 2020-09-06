import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiTab } from './tab';

describe('MuiTab', () => {
  let component: MuiTab;
  let fixture: ComponentFixture<MuiTab>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MuiTab]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuiTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
