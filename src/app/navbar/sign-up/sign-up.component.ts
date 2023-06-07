import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  registerUserData: any = {};

  errorMessage: string = '';

  constructor(private userService: UsersService, private router: Router) {}

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

    this.userService.createUser(this.registerUserData).subscribe((data) => {
      console.log(data);

      if (data) {
        // Prepare the data to be sent
        const userData = { ...data };

        // Set up the navigation extras with the data
        const navigationExtras: NavigationExtras = {
          state: { userData }, // Pass the userData as state
        };

        // Redirect to the myPage route with the navigation extras
        this.router.navigate(['/login'], navigationExtras);
      }
    });
  }
}
