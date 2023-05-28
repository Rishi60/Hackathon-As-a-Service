import { TestBed } from '@angular/core/testing';

import { SuperadminService } from './superadmin.service';

describe('SuperadminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuperadminService = TestBed.get(SuperadminService);
    expect(service).toBeTruthy();
  });
});
