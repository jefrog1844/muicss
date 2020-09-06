import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiTabs } from './tabs';

describe('MuiTabs', () => {
  let component: MuiTabs;
  let fixture: ComponentFixture<MuiTabs>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MuiTabs]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuiTabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
