import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyScheduledFlightsComponent } from './my-scheduled-flights.component';

describe('MyScheduledFlightsComponent', () => {
  let component: MyScheduledFlightsComponent;
  let fixture: ComponentFixture<MyScheduledFlightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyScheduledFlightsComponent]
    });
    fixture = TestBed.createComponent(MyScheduledFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
