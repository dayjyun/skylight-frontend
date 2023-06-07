import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private usersService: UsersService, private router: Router) {}

  /**
   * Check if the user is logged in
   * @return a boolean verifying log-in status
   */
  isLoggedIn() {
    return this.usersService.isLoggedIn();
  }

  /**
   * Logs out the user and redirects them back to the home page
   */
  logout() {
    this.usersService.logout();
    this.router.navigate(['/']);
  }
}
