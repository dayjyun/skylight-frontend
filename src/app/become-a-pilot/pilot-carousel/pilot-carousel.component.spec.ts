import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotCarouselComponent } from './pilot-carousel.component';

describe('PilotCarouselComponent', () => {
  let component: PilotCarouselComponent;
  let fixture: ComponentFixture<PilotCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PilotCarouselComponent]
    });
    fixture = TestBed.createComponent(PilotCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
