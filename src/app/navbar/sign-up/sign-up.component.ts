import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  /**
   * Holds the registration user data.
   */
  registerUserData: any = {};

  /**
   * Holds the error message displayed during registration.
   */
  errorMessage: string = '';

  /**
   * Creates an instance of the component.
   * @param userService - The service used for user registration.
   * @param router - The router instance for navigation.
   */
  constructor(private userService: UsersService, private router: Router) {}

  /**
   * Lifecycle hook that is called after the component is initialized.
   */
  ngOnInit(): void {}

  /**
   * Registers a new user by creating a user account through the user service.
   */
  registerUser() {
    // Clear previous error messages
    this.errorMessage = '';

    // Perform form validation
    if (
      !this.registerUserData.name ||
      !this.registerUserData.email ||
      !this.registerUserData.password
    ) {
      this.errorMessage = 'Field is required.';
      return;
    }

    // Redirects user to the login page
    this.userService.createUser(this.registerUserData).subscribe((data) => {
      if (data) this.router.navigate(['/login']);
    });
  }
}
