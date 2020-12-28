import { TestBed } from '@angular/core/testing';

import { HttpWorkersService } from './http-workers.service';

describe('HttpWorkersService', () => {
  let service: HttpWorkersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpWorkersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
