import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent {
  /**
   * Holds the user's profile data.
   */
  user: {
    name: string;
    email: string;
    password: string;
  };

  /**
   * Indicates whether there was an error during the profile update.
   */
  updateError: boolean = false;

  /**
   * Creates an instance of ProfileUpdateComponent.
   * @param userService - The service used for managing user data.
   * @param router - The router instance for navigation.
   */
  constructor(private userService: UsersService, private router: Router) {
    this.user = {
      name: '',
      email: '',
      password: '',
    };
  }

  /**
   * Saves the changes made to the user's profile.
   */
  saveChanges(): void {
    this.updateError = false;
    this.userService.updateMyProfile(this.user).subscribe((res) => {
      if (res) {
        this.userService.logout();
        this.router.navigate(['/login']);
      }
    });
  }

  /**
   * Cancels the profile update and navigates back to the user's profile page.
   */
  cancel(): void {
    this.router.navigate(['/myProfile']);
  }
}
