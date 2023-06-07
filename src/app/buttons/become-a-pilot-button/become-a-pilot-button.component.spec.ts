import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeAPilotButtonComponent } from './become-a-pilot-button.component';

describe('BecomeAPilotButtonComponent', () => {
  let component: BecomeAPilotButtonComponent;
  let fixture: ComponentFixture<BecomeAPilotButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BecomeAPilotButtonComponent]
    });
    fixture = TestBed.createComponent(BecomeAPilotButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
