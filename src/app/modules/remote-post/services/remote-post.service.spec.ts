import { TestBed } from '@angular/core/testing';

import { RemotePostService } from './remote-post.service';

describe('RemotePostService', () => {
  let service: RemotePostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemotePostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
