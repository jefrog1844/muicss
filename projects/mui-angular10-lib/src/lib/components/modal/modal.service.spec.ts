import { TestBed } from '@angular/core/testing';

import { MuiModalService } from './modal.service';

describe('ModalService', () => {
  let service: MuiModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuiModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
