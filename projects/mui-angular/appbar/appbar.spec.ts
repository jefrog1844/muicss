import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiAppbar } from './appbar';

describe('MuiAppbar', () => {
  let component: MuiAppbar;
  let fixture: ComponentFixture<MuiAppbar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MuiAppbar]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuiAppbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
