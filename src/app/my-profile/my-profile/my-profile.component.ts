import { Component } from '@angular/core';

import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent {
  /**
   * Holds the user's profile data.
   */
  myProfile: any;
  /**
   * Indicates whether the user is an admin.
   */
  isAdmin: any;

  /**
   * Creates an instance of MyProfileComponent.
   * @param userService - The service used for retrieving user profile data.
   */
  constructor(private userService: UsersService) {}

  /**
   * Lifecycle hook that is called after the component is initialized.
   * Retrieves the user's profile data and assigns it to the `myProfile` property.
   * Also assigns the value of the 'admin' property from the profile data to the `isAdmin` property.
   */
  ngOnInit() {
    this.userService.getMyProfile().subscribe((data: any) => {
      this.myProfile = data;
      this.isAdmin = data.admin;
    });
  }
}
