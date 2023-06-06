import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css'],
})
export class LoginButtonComponent {
  constructor(private router: Router) {}
  
  loginPage() {
    this.router.navigate(['/login']);
  }
}
