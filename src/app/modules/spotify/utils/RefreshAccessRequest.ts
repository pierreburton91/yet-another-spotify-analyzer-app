import { environment } from 'src/environments/environment';
import { StorageService } from '../services';

export class RefreshAccessRequest implements Spotify.RefreshAccessRequest {
  grant_type = 'refresh_token';
  refresh_token;
  client_id = environment.SPTF_APP_CLIENT_ID;

  constructor(private storage: StorageService) {
    this.refresh_token = this.storage.get('access').refresh_token;
  }

  valueOf() {
    return {
      grant_type: this.grant_type,
      client_id: this.client_id,
      refresh_token: this.refresh_token,
    };
  }

  toParams() {
    return new URLSearchParams(this.valueOf());
  }
}
