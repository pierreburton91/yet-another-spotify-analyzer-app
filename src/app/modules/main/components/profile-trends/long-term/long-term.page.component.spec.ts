import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongTermPageComponent } from './long-term.page.component';

describe('LongTermPageComponent', () => {
  let component: LongTermPageComponent;
  let fixture: ComponentFixture<LongTermPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LongTermPageComponent]
    });
    fixture = TestBed.createComponent(LongTermPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
