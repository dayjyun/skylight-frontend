import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBookedFlightsComponent } from './my-booked-flights.component';

describe('MyBookedFlightsComponent', () => {
  let component: MyBookedFlightsComponent;
  let fixture: ComponentFixture<MyBookedFlightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyBookedFlightsComponent]
    });
    fixture = TestBed.createComponent(MyBookedFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
