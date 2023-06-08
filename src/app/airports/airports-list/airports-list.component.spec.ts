import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportsListComponent } from './airports-list.component';

describe('AirportsListComponent', () => {
  let component: AirportsListComponent;
  let fixture: ComponentFixture<AirportsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirportsListComponent]
    });
    fixture = TestBed.createComponent(AirportsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
