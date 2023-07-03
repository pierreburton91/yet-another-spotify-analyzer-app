export class AuthInitResponse {
  static getCodeFromLocation(): Spotify.AuthInitResponse['code'] | null {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('code');
  }

  static getErrorFromLocation(): string | null {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('error');
  }
}
