import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashImageComponent } from './splash-image.component';

describe('SplashImageComponent', () => {
  let component: SplashImageComponent;
  let fixture: ComponentFixture<SplashImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplashImageComponent]
    });
    fixture = TestBed.createComponent(SplashImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
