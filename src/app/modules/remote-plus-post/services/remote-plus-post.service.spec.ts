import { TestBed } from '@angular/core/testing';

import { RemotePlusPostService } from './remote-plus-post.service';

describe('RemotePlusPostService', () => {
  let service: RemotePlusPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemotePlusPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
