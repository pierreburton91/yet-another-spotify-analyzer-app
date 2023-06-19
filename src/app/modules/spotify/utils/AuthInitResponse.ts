export class AuthInitResponse {
  static getCodeFromLocation(): Spotify.AuthInitResponse['code'] {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('code') ?? '';
  }
}
