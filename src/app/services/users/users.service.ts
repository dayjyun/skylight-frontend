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
   * Functionality: User creates account (Public)
   * Path: /api/auth/register
   * @param userObject is the data for the user being registered
   * @return the data for the newly registered user
   */
  createUser(userObj: User) {
    // return this.http.post(``);
  }

  /**
   * Functionality: User logs into of account (Public)
   * Path: /api/auth/login
   * @param loginRequest user credentials (email, password)
   * @return JWT key
   */
  loginUser() {}

  /**
   * Functionality: Returns logged-in user’s account (Private)
   * Path: /api/myProfile
   * @return Logged-in user's data
   */
  getMyProfile() {}

  /**
   * Functionality: Edit user account (Private)
   * Path: /api/myProfile
   * @param updateBody is the updated information for the logged-in user
   * @return updated user data
   */
  updateMyProfile() {}

  /**
   * Functionality: Returns a list of flights the user booked	(Private)
   * Path: /api/myProfile/myFlights
   * @return List of tickets the user has booked
   */
  getMyTickets() {}

  /**
   * Functionality: User submits request to become a pilot (Private)
   * Path: /api/myProfile/flyTheSkies
   * @return updated user data
   */
  flyTheSkies() {}

  /**
   * Functionality: Returns a list of flight the admin has submitted	(Private)
   * Path: /api/myProfile/air
   * @return List of flights the user has scheduled
   */
  getScheduledFlights() {}
}
