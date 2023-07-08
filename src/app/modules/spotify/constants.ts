export const RouteNames = {
  ROOT: 'spotify',
  AUTH: 'auth',
  AUTH_CALLBACK: 'auth-callback',
};
export const AuthBaseUrl = 'https://accounts.spotify.com';
export const WebApiBaseUrl = 'https://api.spotify.com/v1';
export const UserTopItemsParams = {
  REQUEST: {
    LONG: 'long-term',
    MEDIUM: 'medium-term',
    SHORT: 'short-term',
  },
  LIMIT: {
    MIN: 1,
    DEFAULT: 20,
    MAX: 50,
  },
  OFFSET: {
    DEFAULT: 0,
  },
};
