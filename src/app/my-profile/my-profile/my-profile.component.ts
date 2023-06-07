import { Component } from '@angular/core';

import { UsersService} from '../../services/users/users.service'

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {
  myProfile: any;

  constructor(private userService: UsersService) { }

  isAdmin() {
    return this.userService.isAdmin();
  }

  ngOnInit() {
    this.userService.getMyProfile().subscribe(data => {
      this.myProfile = data;
    })
  }
}
