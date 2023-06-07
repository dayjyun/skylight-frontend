import { Component } from '@angular/core';

import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent {
  myProfile: any;
  isAdmin: any;

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.userService.getMyProfile().subscribe((data: any) => {
      this.myProfile = data;
      this.isAdmin = data.admin
    });
  }
}
