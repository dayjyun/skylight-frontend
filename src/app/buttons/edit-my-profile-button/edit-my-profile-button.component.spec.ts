import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMyProfileButtonComponent } from './edit-my-profile-button.component';

describe('EditMyProfileButtonComponent', () => {
  let component: EditMyProfileButtonComponent;
  let fixture: ComponentFixture<EditMyProfileButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMyProfileButtonComponent]
    });
    fixture = TestBed.createComponent(EditMyProfileButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
