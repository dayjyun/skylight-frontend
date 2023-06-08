import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportDeparturesComponent } from './airport-departures.component';

describe('AirportDeparturesComponent', () => {
  let component: AirportDeparturesComponent;
  let fixture: ComponentFixture<AirportDeparturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirportDeparturesComponent]
    });
    fixture = TestBed.createComponent(AirportDeparturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
