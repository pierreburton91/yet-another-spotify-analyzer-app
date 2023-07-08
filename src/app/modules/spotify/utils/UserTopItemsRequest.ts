import { HttpParams, HttpParamsOptions } from '@angular/common/http';
import { UserTopItemsParams } from '../constants';

export class UserTopItemsRequest implements Spotify.UserTopItemsRequest {
  time_range;
  limit;
  offset;

  readonly params = UserTopItemsParams;
  static params = UserTopItemsParams;

  constructor(private options?: Spotify.UserTopItemsRequest) {
    this.time_range =
      this.options?.time_range ??
      (this.params.REQUEST.LONG as Spotify.UserTopItemsRequest['time_range']);
    this.limit = this.options?.limit ?? this.params.LIMIT.MAX;
    this.offset = this.options?.offset ?? this.params.OFFSET.DEFAULT;
  }

  valueOf() {
    return {
      time_range: this.time_range,
      limit: this.limit,
      offset: this.offset,
    };
  }

  toParams() {
    return new HttpParams({
      fromObject: this.valueOf() as unknown as HttpParamsOptions['fromObject'],
    });
  }
}
