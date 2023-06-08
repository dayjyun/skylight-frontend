import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportArrivalsComponent } from './airport-arrivals.component';

describe('AirportArrivalsComponent', () => {
  let component: AirportArrivalsComponent;
  let fixture: ComponentFixture<AirportArrivalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirportArrivalsComponent]
    });
    fixture = TestBed.createComponent(AirportArrivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
