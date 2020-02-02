import { TestBed } from '@angular/core/testing';

import { ItemsCounterService } from './items-counter.service';

describe('ItemsCounterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemsCounterService = TestBed.get(ItemsCounterService);
    expect(service).toBeTruthy();
  });
});
