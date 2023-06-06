import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { Router } from '@angular/router';

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
   * Redirects the
   */
  registerUser() {
    // Clear previous error message
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
      if (data) this.router.navigate(['/myProfile']);
    });
  }
}
