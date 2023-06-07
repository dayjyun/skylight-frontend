import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent {
  user: {
    name: string;
    email: string;
    password: string;
  };
  updateError: boolean = false;

  constructor(private userService: UsersService, private router: Router) {
    this.user = {
      name: '',
      email: '',
      password: '',
    };
  }

  saveChanges(): void {
    this.updateError = false;
    this.userService.updateMyProfile(this.user).subscribe(
      (res) => {
        if (res) {
          this.userService.logout()
          this.router.navigate(['/login']);
        }
      }
    );
  }
  cancel(): void {
    this.router.navigate(['/myProfile']);
  }
}
