import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMenuComponent } from './section-menu.component';

describe('SectionMenuComponent', () => {
  let component: SectionMenuComponent;
  let fixture: ComponentFixture<SectionMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionMenuComponent]
    });
    fixture = TestBed.createComponent(SectionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
