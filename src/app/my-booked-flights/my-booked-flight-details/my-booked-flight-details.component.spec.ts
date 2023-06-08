import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBookedFlightDetailsComponent } from './my-booked-flight-details.component';

describe('MyBookedFlightDetailsComponent', () => {
  let component: MyBookedFlightDetailsComponent;
  let fixture: ComponentFixture<MyBookedFlightDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyBookedFlightDetailsComponent]
    });
    fixture = TestBed.createComponent(MyBookedFlightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
