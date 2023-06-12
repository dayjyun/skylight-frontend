import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleFlightComponent } from './schedule-flight.component';

describe('ScheduleFlightComponent', () => {
  let component: ScheduleFlightComponent;
  let fixture: ComponentFixture<ScheduleFlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleFlightComponent]
    });
    fixture = TestBed.createComponent(ScheduleFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
