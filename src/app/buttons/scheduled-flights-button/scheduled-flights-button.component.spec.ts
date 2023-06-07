import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledFlightsButtonComponent } from './scheduled-flights-button.component';

describe('ScheduledFlightsButtonComponent', () => {
  let component: ScheduledFlightsButtonComponent;
  let fixture: ComponentFixture<ScheduledFlightsButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduledFlightsButtonComponent]
    });
    fixture = TestBed.createComponent(ScheduledFlightsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
