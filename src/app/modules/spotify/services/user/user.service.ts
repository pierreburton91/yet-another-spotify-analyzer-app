import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserTopItemsRequest } from '../../utils';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUserProfile() {
    return this.http.get<Spotify.UserProfileResponse>('/me');
  }

  getUserTopItems<T>(
    type: Spotify.UserTopItemsRequestType,
    options?: Spotify.UserTopItemsRequest
  ) {
    return this.http.get<Spotify.UserTopItemsResponse<T>>(`/me/top/${type}`, {
      params: new UserTopItemsRequest(options).toParams(),
    });
  }
}
