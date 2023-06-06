import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUserData: any = {};

  errorMessage: string = '';

  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit(): void {}

  loginUser() {
    // Clear previous error messages
    this.errorMessage = '';

    //// Perform form validation
    if (
      !this.loginUserData.email ||
      !this.loginUserData.password
    ) {
      this.errorMessage = 'Field is required.';
      return;
    }

    this.userService.loginUser(this.loginUserData).subscribe(data => {
      if (data) this.router.navigate(['/myProfile'])
    })
  }
}
