import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  headers: any;

  constructor(private http: HttpClient) {}

  /**
   * Functionality: User creates account (Public)
   * Path: /api/auth/register
   * @param userData is the data for the user being registered
   * @return the data for the newly registered user
   */
  createUser(userData: any) {
    return this.http.post<any>(
      `http://localhost:8080/api/auth/register`,
      userData
    );
  }

  /**
   * Functionality: User logs into of account (Public)
   * Path: /api/auth/login
   * @param userData user credentials (email, password)
   * @return JWT key
   */
  loginUser(userData: any) {
    return this.http.post<any>(
      `http://localhost:8080/api/auth/login`,
      userData
    );
  }

  /**
   * Functionality: Logs out user from their account
   */
  logout() {
    localStorage.removeItem("jwt");
  }

  /**
   * Functionality: Check if the user is logged in
   */
  isLoggedIn() {
    const jwt = localStorage.getItem('jwt');
    return !!jwt;
  }

  isAdmin() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      // Decode the JWT to extract the user information
      const jwtData = JSON.parse(atob(jwt.split('.')[1]));
      // Invert the value of isAdmin property
      // If jwtData.isAdmin is true, return false (indicating non-admin user)
      // If jwtData.isAdmin is false, return true (indicating admin user)
      return !jwtData.isAdmin;
    }
    // If JWT is not present, return false (indicating non-admin user)
    return false;
  }

  /**
   * Functionality: Returns logged-in user’s account (Private)
   * Path: /api/myProfile
   * @return Logged-in user's data
   */
  getMyProfile() {
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders({ Authorization: `Bearer ${jwt}` });
    return this.http.get('http://localhost:8080/api/myProfile', { headers });
  }

  /**
   * Functionality: Edit user account (Private)
   * Path: /api/myProfile
   * @param userData is the updated information for the logged-in user
   * @return updated user data
   */
  updateMyProfile(userData: any) {
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders({ Authorization: `Bearer ${jwt}` });
    return this.http.put('http://localhost:8080/api/myProfile', userData, {
      headers,
    });
  }

  /**
   * Functionality: Returns a list of flights the user booked	(Private)
   * Path: /api/myProfile/myFlights
   * @return List of tickets the user has booked
   */
  getMyTickets() {
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders({ Authorization: `Bearer ${jwt}` });
    return this.http.get('http://localhost:8080/api/myProfile/myTickets', {
      headers,
    });
  }

  /**
   * Functionality: User submits request to become a pilot (Private)
   * Path: /api/myProfile/flyTheSkies
   * @return updated user to an admin
   */
  flyTheSkies() {
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders({ Authorization: `Bearer ${jwt}` });
    return this.http.put(
      'http://localhost:8080/api/myProfile',
      { isAdmin: true },
      { headers }
    );
  }

  /**
   * Functionality: Returns a list of flight the admin has submitted	(Private)
   * Path: /api/myProfile/air
   * @return List of flights the user has scheduled
   */
  getScheduledFlights() {
    const jwt = localStorage.getItem('jwt');
    const headers = new HttpHeaders({ Authorization: `Bearer ${jwt}` });
    return this.http.get('http://localhost:8080/api/myProfile/air', {
      headers,
    });
  }
}
