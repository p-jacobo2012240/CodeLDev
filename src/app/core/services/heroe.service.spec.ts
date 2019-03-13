import { TestBed } from '@angular/core/testing';

import { HeroeService } from './heroe.service';

describe('HeroeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroeService = TestBed.get(HeroeService);
    expect(service).toBeTruthy();
  });
});
