import { TestBed } from '@angular/core/testing';

import { TosectionService } from './tosection.service';

describe('TosectionService', () => {
  let service: TosectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TosectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
