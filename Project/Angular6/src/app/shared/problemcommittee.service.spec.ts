import { TestBed } from '@angular/core/testing';

import { ProblemcommitteeService } from './problemcommittee.service';

describe('ProblemcommitteeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProblemcommitteeService = TestBed.get(ProblemcommitteeService);
    expect(service).toBeTruthy();
  });
});
