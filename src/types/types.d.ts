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

  interface StoredAccess {
    access_token: string;
    refresh_token: string;
    expires_at: number;
  }

  interface GenresSeedResponse {
    genres: string[];
  }

  interface UserProfileResponse {
    contry?: string;
    display_name?: string;
    email?: string;
    explicit_content?: {
      filter_enabled?: boolean;
      filter_locked?: boolean;
    };
    external_urls?: ExternalUrls;
    followers?: {
      href?: null;
      total?: number;
    };
    href?: string;
    id?: string;
    images?: Image[];
    product?: string;
    type?: 'user';
    uri?: string;
  }

  type UserTopItemsRequestType = 'artists' | 'tracks';

  interface UserTopItemsRequest {
    time_range: 'long_term' | 'medium_term' | 'short_term';
    limit: number;
    offset: number;
  }

  type UserTopItemsResponse<T> = {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: UserTopItemsResponseItems<T>[];
  };
  type UserTopItemsResponseItems<Type> = {
    [Property in keyof Type]: Type[Property];
  };

  interface SimplifiedArtist {
    external_urls?: ExternalUrls;
    href?: string;
    id?: string;
    name?: string;
    type?: 'artist';
    uri?: string;
  }
  interface Artist extends SimplifiedArtist {
    followers?: {
      href?: string | null;
      total?: number;
    };
    genres?: GenresSeedResponse['genres'];
    images?: Image[];
    popularity?: number;
  }
  interface Track {
    album?: Album;
    artists?: Artist[];
    available_markets?: string[];
    disc_number?: number;
    duration_ms?: number;
    explicit?: boolean;
    external_ids?: ExternalIds;
    external_urls?: ExternalUrls;
    href?: string;
    id?: string;
    is_playable?: boolean;
    linked_from?: {}; // Missing documentation
    restrictions?: Restriction;
    name?: string;
    popularity?: number;
    preview_url?: string;
    track_number?: number;
    type?: 'track';
    uri?: string;
    is_local?: boolean;
  }

  interface Album {
    album_type: string;
    total_tracks: number;
    available_markets: string[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: 'year' | 'month' | 'day';
    restrictions?: Restriction;
    type: 'album';
    uri: string;
    copyrights?: Copyright[];
    external_ids?: ExternalIds;
    genres?: GenresSeedResponse['genres'];
    label?: string;
    popularity?: number;
    album_group?: number;
    artists: SimplifiedArtist[];
  }

  interface Image {
    url: string;
    height: number | null;
    width: number | null;
  }

  interface ExternalUrls {
    spotify?: string;
  }
  interface Restriction {
    reason?: string;
  }
  interface Copyright {
    text?: string;
    type?: string;
  }
  interface ExternalIds {
    isrc?: string;
    ean?: string;
    upc?: string;
  }

  type Storable = StoredAccess | string;
  type StorableKey = 'code_verifier' | 'access';
}

interface GenreHit {
  name: string;
  hits: number;
  artists: Spotify.Artist[];
}

type Storable =
  | Spotify.UserProfileResponse
  | Spotify.UserTopItemsResponse<Spotify.Artist>
  | Spotify.UserTopItemsResponse<Spotify.Track>;
type StorableKey = 'user_profile' | 'utir_artist' | 'utir_track';
