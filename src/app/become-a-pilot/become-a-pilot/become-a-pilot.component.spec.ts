import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeAPilotComponent } from './become-a-pilot.component';

describe('BecomeAPilotComponent', () => {
  let component: BecomeAPilotComponent;
  let fixture: ComponentFixture<BecomeAPilotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BecomeAPilotComponent]
    });
    fixture = TestBed.createComponent(BecomeAPilotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
