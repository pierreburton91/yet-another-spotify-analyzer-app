export const environment: Environment = {
  // These will be overriden by process.env on production mode
  SPTF_APP_CLIENT_ID: '',
  SPTF_APP_CLIENT_SECRET: '',
  SPTF_APP_REDIRECT_URI: '',

  ...process.env,
};
