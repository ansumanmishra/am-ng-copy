import { TestBed } from '@angular/core/testing';

import { AmNgCopyService } from './am-ng-copy.service';

describe('AmNgCopyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmNgCopyService = TestBed.get(AmNgCopyService);
    expect(service).toBeTruthy();
  });
});
