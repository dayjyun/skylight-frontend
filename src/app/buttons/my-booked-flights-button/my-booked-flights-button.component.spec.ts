import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBookedFlightsButtonComponent } from './my-booked-flights-button.component';

describe('MyBookedFlightsButtonComponent', () => {
  let component: MyBookedFlightsButtonComponent;
  let fixture: ComponentFixture<MyBookedFlightsButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyBookedFlightsButtonComponent]
    });
    fixture = TestBed.createComponent(MyBookedFlightsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
