import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiForm } from './form';

describe('MuiForm', () => {
  let component: MuiForm;
  let fixture: ComponentFixture<MuiForm>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MuiForm]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuiForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
