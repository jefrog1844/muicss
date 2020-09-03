import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiTabsComponent } from './tabs.component';

describe('TabsComponent', () => {
  let component: MuiTabsComponent;
  let fixture: ComponentFixture<MuiTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuiTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuiTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
