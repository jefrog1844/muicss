import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiTextarea } from './textarea';

describe('MuiTextarea', () => {
  let component: MuiTextarea;
  let fixture: ComponentFixture<MuiTextarea>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MuiTextarea]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuiTextarea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
