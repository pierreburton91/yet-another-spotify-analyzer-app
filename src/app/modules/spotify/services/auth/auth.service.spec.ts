import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should route to spotify auth', async () => {
    await service.initSpotifyAuthorization();
    expect(window.location).toContain('accounts.spotify.com/authorize');
  });
});
