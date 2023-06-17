export interface Environment extends NodeJS.ProcessEnv {
  SPTF_APP_CLIENT_ID: string;
  SPTF_APP_CLIENT_SECRET: string;
  SPTF_APP_REDIRECT_URI: string;
}
