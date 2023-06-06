import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerUserData: any = {}

  constructor(private userService: UsersService) { }

  ngOnInit(): void { }

  registerUser() {
    this.userService.createUser(this.registerUserData).subscribe(res => console.log(res)
    )
  }
}
