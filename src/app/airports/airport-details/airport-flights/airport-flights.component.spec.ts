import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportFlightsComponent } from './airport-flights.component';

describe('AirportFlightsComponent', () => {
  let component: AirportFlightsComponent;
  let fixture: ComponentFixture<AirportFlightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirportFlightsComponent]
    });
    fixture = TestBed.createComponent(AirportFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
