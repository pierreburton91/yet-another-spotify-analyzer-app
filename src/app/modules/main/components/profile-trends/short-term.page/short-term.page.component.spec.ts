import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortTermPageComponent } from './short-term.page.component';

describe('ShortTermPageComponent', () => {
  let component: ShortTermPageComponent;
  let fixture: ComponentFixture<ShortTermPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortTermPageComponent]
    });
    fixture = TestBed.createComponent(ShortTermPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
