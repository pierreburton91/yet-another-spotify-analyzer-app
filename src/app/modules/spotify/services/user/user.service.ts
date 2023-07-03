import {
  HttpClient,
  HttpParams,
  HttpParamsOptions,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserTopItemsParams } from '../../constants';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUserProfile() {
    return this.http.get<Spotify.UserProfileResponse>('/me');
  }

  getUserTopItems<T>(
    type: Spotify.UserTopItemsRequestType,
    options?: Spotify.UserTopItemsRequestParams
  ) {
    const rawParams: Spotify.UserTopItemsRequestParams = {
      time_range: 'long_term',
      limit: UserTopItemsParams.LIMIT.MAX,
      offset: UserTopItemsParams.OFFSET.DEFAULT,
      ...(options ?? {}),
    };
    const params = new HttpParams({
      fromObject: rawParams as unknown as HttpParamsOptions['fromObject'],
    });
    return this.http.get<Spotify.UserTopItemsResponse<T>>(`/me/top/${type}`, {
      params,
    });
  }
}
