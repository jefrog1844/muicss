import { TestBed } from '@angular/core/testing';

import { MuiOverlayService } from './overlay.service';

describe('OverlayService', () => {
  let service: MuiOverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuiOverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
