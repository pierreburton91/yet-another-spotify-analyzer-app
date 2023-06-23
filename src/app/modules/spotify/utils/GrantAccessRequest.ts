import { environment } from 'src/environments/environment';
import { StorageService } from '../services';

export class GrantAccessRequest implements Spotify.GrantAccessRequest {
  grant_type = 'authorization_code';
  code;
  client_id = environment.SPTF_APP_CLIENT_ID;
  redirect_uri = environment.SPTF_APP_REDIRECT_URI;
  code_verifier;

  constructor(
    code: Spotify.AuthInitResponse['code'],
    private storage: StorageService
  ) {
    this.code = code;
    this.code_verifier = this.storage.get('code_verifier');
  }

  valueOf() {
    return {
      grant_type: this.grant_type,
      client_id: this.client_id,
      code: this.code,
      redirect_uri: this.redirect_uri,
      code_verifier: this.code_verifier,
    };
  }

  toParams() {
    return new URLSearchParams(this.valueOf());
  }
}
