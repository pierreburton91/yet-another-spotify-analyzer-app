import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumTermPageComponent } from './medium-term.page.component';

describe('MediumTermPageComponent', () => {
  let component: MediumTermPageComponent;
  let fixture: ComponentFixture<MediumTermPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediumTermPageComponent]
    });
    fixture = TestBed.createComponent(MediumTermPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
