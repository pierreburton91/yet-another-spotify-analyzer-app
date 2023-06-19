interface Environment extends NodeJS.ProcessEnv {
  SPTF_APP_CLIENT_ID: string;
  SPTF_APP_CLIENT_SECRET: string;
  SPTF_APP_REDIRECT_URI: string;
}

declare namespace Spotify {
  interface AuthInitRequest {
    response_type: string;
    client_id: string;
    scope: string;
    redirect_uri: string;
    state: string;
    code_challenge_method: string;
    code_challenge: string;
  }
  interface AuthInitResponse {
    code: string;
    state: string;
  }
  interface AuthInitError {
    error: string;
    state: string;
  }
  interface GrantAccessRequest {
    grant_type: string;
    code: string;
    redirect_uri: string;
    client_id: string;
    code_verifier: string;
  }
  interface GrantAccessResponse {
    access_token: string;
    token_type: string;
    scope: string;
    expires_in: number;
    refresh_token: string;
  }
  interface RefreshAccessRequest {
    grant_type: string;
    refresh_token: string;
    client_id: string;
  }
  type Storable = GrantAccessResponse | string;
  type StorableKey = 'code_verifier' | 'access';
}
