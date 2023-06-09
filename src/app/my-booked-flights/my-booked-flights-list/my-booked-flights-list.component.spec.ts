import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBookedFlightsListComponent } from './my-booked-flights-list.component';

describe('MyBookedFlightsListComponent', () => {
  let component: MyBookedFlightsListComponent;
  let fixture: ComponentFixture<MyBookedFlightsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyBookedFlightsListComponent]
    });
    fixture = TestBed.createComponent(MyBookedFlightsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
