import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAirportsButtonComponent } from './all-airports-button.component';

describe('AllAirportsButtonComponent', () => {
  let component: AllAirportsButtonComponent;
  let fixture: ComponentFixture<AllAirportsButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllAirportsButtonComponent]
    });
    fixture = TestBed.createComponent(AllAirportsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
