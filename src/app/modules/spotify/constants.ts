export const RouteNames = {
  ROOT: 'spotify',
  AUTH: 'auth',
  AUTH_CALLBACK: 'auth-callback',
};
export const AuthBaseUrl = 'https://accounts.spotify.com';
export const WebApiBaseUrl = 'https://api.spotify.com/v1';
export const UserTopItemsParams = {
  LIMIT: {
    MIN: 1,
    DEFAULT: 20,
    MAX: 50,
  },
  OFFSET: {
    DEFAULT: 0,
  },
};
