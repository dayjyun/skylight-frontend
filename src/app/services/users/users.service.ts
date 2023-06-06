import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  name: string,
  email: string,
  password: string,
  isAdmin: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  createUser(userObj: User) {
    // /api/auth/register
  }

  loginUser() {
    // /api/auth/login
  }

  getMyProfile() {
    // /api/myProfile
  }

  updateMyProfile() {
    // /api/myProfile
  }

  getMyTickets() {
    // /api/myProfile/myTickets
  }

  flyTheSkies() {
    // /api/myProfile/flyTheSkies
  }

  getScheduledFlights() {
    // /api/myProfile/air
  }
}
