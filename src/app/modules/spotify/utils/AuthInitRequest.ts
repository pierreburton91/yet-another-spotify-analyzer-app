import { environment } from 'src/environments/environment';
import { StorageService } from '../services';

export class AuthInitRequest implements Spotify.AuthInitRequest {
  readonly response_type = 'code';
  readonly scope = 'user-read-private user-read-email';
  readonly client_id = environment.SPTF_APP_CLIENT_ID;
  readonly redirect_uri = environment.SPTF_APP_REDIRECT_URI;
  readonly code_challenge_method = 'S256';
  state = '';
  code_challenge = '';

  private codeVerifier = '';

  constructor(private storage: StorageService) {}

  valueOf() {
    return {
      response_type: this.response_type,
      client_id: this.client_id,
      scope: this.scope,
      redirect_uri: this.redirect_uri,
      state: this.state,
      code_challenge_method: this.code_challenge_method,
      code_challenge: this.code_challenge,
    };
  }

  private generateRandomString(length: number) {
    let text = '';
    let possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  private async generateCodeChallenge(codeVerifier: string) {
    function base64encode(string: ArrayBuffer) {
      return btoa(String.fromCharCode.apply(null, [...new Uint8Array(string)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);

    return base64encode(digest);
  }

  setCodeVerifier() {
    this.codeVerifier = this.generateRandomString(128);
    this.storage.set('code_verifier', this.codeVerifier);

    return this;
  }

  async toParams() {
    this.code_challenge = await this.generateCodeChallenge(this.codeVerifier);
    this.state = this.generateRandomString(16);

    return new URLSearchParams(this.valueOf());
  }
}
