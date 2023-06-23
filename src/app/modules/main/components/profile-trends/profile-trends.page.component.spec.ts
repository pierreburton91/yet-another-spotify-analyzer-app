import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTrendsPageComponent } from './profile-trends.page.component';

describe('ProfileTrendsPageComponent', () => {
  let component: ProfileTrendsPageComponent;
  let fixture: ComponentFixture<ProfileTrendsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileTrendsPageComponent]
    });
    fixture = TestBed.createComponent(ProfileTrendsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
