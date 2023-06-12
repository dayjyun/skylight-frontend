import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleNewFlightButtonComponent } from './schedule-new-flight-button.component';

describe('ScheduleNewFlightButtonComponent', () => {
  let component: ScheduleNewFlightButtonComponent;
  let fixture: ComponentFixture<ScheduleNewFlightButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleNewFlightButtonComponent]
    });
    fixture = TestBed.createComponent(ScheduleNewFlightButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
