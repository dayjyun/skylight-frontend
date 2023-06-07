import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService} from '../../services/users/users.service'

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {
  constructor(private userService: UsersService) {

  }

  myFlights = this.userService.getMyTickets();
}
