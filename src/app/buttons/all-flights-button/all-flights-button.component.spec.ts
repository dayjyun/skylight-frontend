import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFlightsButtonComponent } from './all-flights-button.component';

describe('AllFlightsButtonComponent', () => {
  let component: AllFlightsButtonComponent;
  let fixture: ComponentFixture<AllFlightsButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllFlightsButtonComponent]
    });
    fixture = TestBed.createComponent(AllFlightsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
