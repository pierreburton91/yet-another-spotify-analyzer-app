import { TestBed } from '@angular/core/testing';

import { SpotifyFacadeService } from './spotify-facade.service';

describe('SpotifyFacadeService', () => {
  let service: SpotifyFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
