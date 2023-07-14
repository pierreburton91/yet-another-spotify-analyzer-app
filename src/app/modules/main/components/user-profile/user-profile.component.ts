import { Component, Input } from '@angular/core';
import { UNKNOWN } from 'src/app/constants';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  @Input() userProfile: Spotify.UserProfileResponse | null = null;
  @Input() isLoading: boolean = false;
  @Input() error: Error | null = null;

  readonly UNKNOWN = UNKNOWN;

  get image() {
    // Take the highest resolution
    return this.userProfile?.images?.at(-1)?.url;
  }

  get product() {
    return this.userProfile?.product;
  }

  get explicitContent() {
    return this.userProfile?.explicit_content?.filter_enabled ?? UNKNOWN;
  }

  get followers() {
    return this.userProfile?.followers?.total ?? false;
  }
}
