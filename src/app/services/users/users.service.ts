import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  /**
   *Functionality: User creates account (Public)
   * Path: /api/auth/register
   */
  createUser(userObj: User) {
    // return this.http.post(``);
  }

  /**
   *Functionality: User logs into of account (Public)
   * Path: /api/auth/login
   */
  loginUser() {}

  /**
   * Functionality: Returns logged-in user’s account (Private)
   * Path: /api/myProfile
   */
  getMyProfile() {}

  /**
   * Functionality: Edit user account (Private)
   * Path: /api/myProfile
   */
  updateMyProfile() {}

  /**
   * Functionality: Returns a list of flights the user booked	(Private)
   * Path: /api/myProfile/myFlights
   */
  getMyTickets() {}

  /**
   * Functionality: User submits request to become a pilot (Private)
   * Path: /api/myProfile/flyTheSkies
   */
  flyTheSkies() {}

  /**
   * Functionality: Returns a list of flight the admin has submitted	(Private)
   * Path: /api/myProfile/air
   */
  getScheduledFlights() {}
}
