import { TestBed } from '@angular/core/testing';

import { SearchData } from './search-data';

describe('SearchData', () => {
  let service: SearchData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
