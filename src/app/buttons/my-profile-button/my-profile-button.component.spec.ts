import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileButtonComponent } from './my-profile-button.component';

describe('MyProfileButtonComponent', () => {
  let component: MyProfileButtonComponent;
  let fixture: ComponentFixture<MyProfileButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyProfileButtonComponent]
    });
    fixture = TestBed.createComponent(MyProfileButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
